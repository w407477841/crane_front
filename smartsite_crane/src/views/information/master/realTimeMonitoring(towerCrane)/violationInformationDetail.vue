<template>
  <div class="list-container">
    <div class="container-box condition-box">
      <div class="conditionBar">
        <el-form :inline="true" class="condition-form">
          <el-form-item>
            <el-select v-model="checkTime" placeholder="查询时间" @change="dateChange" :clearable="true" :filterable="true" size="mini">
              <el-option v-for="item in checkTimeList" :label="item.label" :value="item.value" :key="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker size="mini" v-model="beginDate" :editable="false" :picker-options="beginPicker" :disabled="dateShow" type="date" placeholder="选择日期" format="yyyy-MM-dd"></el-date-picker>
            <i>-</i>
            <el-date-picker size="mini" v-model="endDate" :editable="false" :picker-options="endPicker" :disabled="dateShow" type="date" placeholder="选择日期" format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button class="searchBtn" type="primary" size="mini" icon="el-icon-search" @click="handleSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="container-box">
      <div class="table-box">
        <el-table size="small" :data="listData" style="width: 100%" highlight-current-row @selection-change="listSelectionChange" header-row-class-name="xyTableHeader">
          <el-table-column type="selection" :width="selectionWidth"></el-table-column>
          <el-table-column type="index" :width="indexWidth"></el-table-column>
          <el-table-column label="违章时间" prop="alarmTime" :formatter="getFormat"></el-table-column>
          <el-table-column label="违章详情" prop="alarmInfo"></el-table-column>
        </el-table>
      </div>
      <div class="pagination-box">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="pageSizes" :page-size="pageSize" :total="pageTotal" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment';
import {selectAlarmData} from '@/views/api/equipmentApi.js';

export default {
  data() {
    return {
      listData: [],
      checkTime: '',
      pageIndex: 1,
      pageSizes: [10, 20, 30],
      pageSize: 10,
      pageTotal: 0,
      sels: [],
      detailsPath: this.$route.path + '/deviceTypeDetail',
      checkTimeList : [
        {label : "7天内",value : 1},
        {label : "15天内",value : 2},
        {label : "30天内",value : 3},
        {label : "自定义",value : 4}
      ],
      beginDate : '',
      endDate : '',
      edit : false,
      dateShow : true
    };
  },
  computed: {
    params() {
      let param = {
        id : this.id,
        pageNum: this.pageIndex,
        pageSize: this.pageSize,
        key:this.keyword,
        body : {
          beginDate : this.beginDate,
          endDate : this.endDate,
          checkTime : this.checkTime
        }
      };
      return param;
    },
    beginPicker() {
      let endTime = this.endDate;
      if(endTime == null) {
        endTime = '';
      }
      if(endTime != '') {
        return {
          disabledDate(time) {
            return (time.getTime() > new Date(endTime) || time.getTime() < new Date(moment(endTime).format("YYYY-MM") + "-01"));
          }
        };
      }else {
        return {
          disabledDate(time) {
            return time.getTime() > new Date(endTime);
          }
        };
      }
    },
    endPicker() {
      let begin = this.beginDate;
      if(begin == null) {
        begin = '';
      }
      let date = "";
      //开始时间非空计算开始时间所在月份的最后一天
      if(begin != '') {
        let beginTime = this.$moment(begin);
        let year = "" + new Date(beginTime).getFullYear();
        let month = "";
        if((new Date(beginTime).getMonth()+1)<10){
          month = "0"+(new Date(beginTime).getMonth()+2);
        }else{
          month = ""+(new Date(beginTime).getMonth()+2);
        }
        let newDate = new Date(year + "-" + month + "-01");
        date = new Date(newDate.setDate(newDate.getDate() - 1));
        return {
          disabledDate(time) {
            return (time.getTime() < new Date(begin) || time.getTime() > new Date(date));
          }
        };
      }else {
        return {
          disabledDate(time) {
            return time.getTime() < new Date(begin);
          }
        }
      }
    }
  },
  mounted() {
    this.getListData();
  },
  methods: {
    //条件查询
    handleSearch() {
      this.pageIndex = 1;
      this.getListData();
    },
    //获取列表
    getListData() {
      selectAlarmData(this.params).then(res => {
        this.listData = res.data.list;
        this.pageTotal = Number(res.data.total);
        if (this.pageTotal == 0 && this.pageIndex > 1) {
          this.pageIndex--;
          this.getListData();
        }
      });
    },
    //改变页面显示条数
    handleSizeChange(val) {
      this.pageSize = val;
      this.getListData();
    },
    //改变页数
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getListData();
    },
    //勾选复选框时给sels赋值
    listSelectionChange(sels) {
      this.sels = sels;
    },
    //选择查询条件时改变日期选择器的可用性
    dateChange : function() {
      if(this.checkTime == 1) {
        this.dateShow = true;
        let begin = new Date(this.$moment(new Date()).format('YYYY-MM-DD'));
        this.endDate = new Date();
        this.beginDate = new Date(begin.setDate(begin.getDate() - 7));
      }else if (this.checkTime == 2) {
        this.dateShow = true;
        let begin = new Date(this.$moment(new Date()).format('YYYY-MM-DD'));
        this.endDate = new Date();
        this.beginDate = new Date(begin.setDate(begin.getDate() - 15));
      }else if (this.checkTime == 3) {
        this.dateShow = true;
        let begin = new Date(this.$moment(new Date()).format('YYYY-MM-DD'));
        this.endDate = new Date();
        this.beginDate = new Date(begin.setDate(begin.getDate() - 30));
      }else if (this.checkTime == 4) {
        this.dateShow = false;
      }
    },
    getFormat : function(row) {
      return moment(row.alarmTime).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  props : ['id','keyword']
};
</script>

<style lang="scss" scoped>
</style>
