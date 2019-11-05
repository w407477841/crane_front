<template>
    <div class="app-container list-container">
        <div class="container-box condition-box">
            <div class="conditionBar">
                <el-form :inline="true" class="condition-form">
                    <el-form-item label="">
                        <el-select v-model="checkTime" placeholder="查询时间" size="mini" @change="chooseShortcutDate()">
                            <el-option v-for="item in checkTimeList" :label="item.label" :value="item.value"
                                       :key="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-date-picker   v-if="beginTime" key   v-model="beginTime"  :disabled="edit" type="date" :picker-options="beginPicker"
                                          placeholder="选择日期" value-format="yyyy-MM-dd" size="mini" ></el-date-picker>
                        <el-date-picker   v-else     v-model="beginTime"  :disabled="edit" type="date" :picker-options="beginPicker"
                                          placeholder="选择日期" value-format="yyyy-MM-dd" size="mini" ></el-date-picker>
                        <i>-</i>
                        <el-date-picker   v-if="beginTime" key  v-model="endTime"  :disabled="edit" type="date" :picker-options="endPicker"
                                          placeholder="选择日期" value-format="yyyy-MM-dd" size="mini" ></el-date-picker>
                        <el-date-picker   v-else    v-model="endTime"  :disabled="edit" type="date" :picker-options="endPicker"
                                          placeholder="选择日期" value-format="yyyy-MM-dd" size="mini" ></el-date-picker>
                    </el-form-item>
                    <!--<el-form-item label="">
                        <el-select v-model="status" placeholder="状态" clearable size="mini">
                            <el-option v-for="item in selectStatus" :label="item.label" :value="item.value"
                                       :key="item.value"></el-option>
                        </el-select>
                    </el-form-item>-->
                    <el-form-item>
                        <el-button class="searchBtn" type="primary" size="mini" icon="el-icon-search"
                                   @click="handleSearchButton">查询
                        </el-button>
                        <el-button size="mini" @click="handleCancel">取 消</el-button>
                    </el-form-item>
                    <el-form-item>
                            <el-button type="primary" icon="el-icon-yckz" size="mini" @click="routerLink">切换成图表形式</el-button>
                        </el-form-item>
                </el-form>
            </div>
        </div>
<div class="container-box condition-box deviceTopInfo">
      <span>工程名称：{{projectName}}</span>
      <span>设备编号：{{deviceNo}}</span>
     <span>设备在线状态：{{isOnline}}</span>
    </div>
        <div class="container-box list-box">
            <div class="table-box">
                <el-table size="small" :data="listData" style="width: 100%" height="100%" highlight-current-row
                          @selection-change="listSelectionChange" header-row-class-name="xyTableHeader">
                    <el-table-column type="selection" :width="selectionWidth"></el-table-column>
                    <el-table-column type="index" :width="indexWidth"></el-table-column>
                    <el-table-column label="设备编号" prop="deviceNo" width="135px"></el-table-column>
                    <el-table-column label="运行时间" prop="deviceTime" width="120px"></el-table-column>
                    <el-table-column label="湿度(%RH)" prop="humidity" width="135px"></el-table-column>
                    <el-table-column label="温度(℃)" prop="temperature"></el-table-column>
                    <el-table-column label="PM2.5(ug/m³)" prop="pm25" width="135px"></el-table-column>
                    <el-table-column label="PM10(ug/m³)" prop="pm10" width="135px"></el-table-column>
                    <el-table-column label="风速(m/s)" prop="windSpeed"></el-table-column>
                    <el-table-column label="噪音(分贝)" prop="noise" width="100px"></el-table-column>
                    <el-table-column label="TSP" prop="tsp"></el-table-column>
                    <el-table-column label="风力(级)" prop="windForce"></el-table-column>
                    <el-table-column label="风向" prop="windDirection"></el-table-column>
                    <!--<el-table-column label="大气压" prop="atmospheric"></el-table-column>-->
                    <!--<el-table-column label="设备状态" prop="status" :formatter="deviceStatusCheck"></el-table-column>-->
                </el-table>
            </div>
            <div class="pagination-box">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                               :current-page="pageIndex" :page-sizes="pageSizes" :page-size="pageSize"
                               :total="pageTotal" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
            </div>
            <!--<div class="details-footer" style="text-align: right;">
                <el-button size="mini" @click="handleCancel">取 消</el-button>
            </div>-->
        </div>
    </div>
</template>

<script>
import { geoperationDataListApi } from "@/views/information/api/dust.js";
import dustButton from "./dustButton";

export default {
  components: { dustButton },
  data() {
    return {
      listData: [],
      isDangerous: "",
      keyword: "",
      checkTime: "",
      isOnline: null,
      projectId: null,
      monitorId: null,
      pageIndex: 1,
      pageSizes: [10, 20, 30],
      pageSize: 10,
      pageTotal: 0,
      sels: [],
      status: null,
      detailsType: null,
      selectStatus: [{ label: "离线", value: 0 }, { label: "在线", value: 1 }],
      checkTimeList: [
        { label: "7天内", value: 1 },
        { label: "15天内", value: 2 },
        { label: "30天内", value: 3 },
        { label: "自定义", value: 4 }
      ],
      beginTime: "",
      endTime: "",
      edit: false,
      deviceNo:"",
      projectName:"",
      manufactor:"",
      mainInfo:[]
    };
  },
  computed: {
    params() {
      let param = {
        key: this.keyword,
        pageNum: this.pageIndex,
        pageSize: this.pageSize,
        body: {
          beginTime: this.beginTime,
          endTime: this.endTime,
          status: this.status,
          monitorId: this.monitorId
        }
      };
      return param;
    },
    beginPicker() {
      let endTime = this.endTime;
      return {
        disabledDate(time) {
          return time.getTime() > new Date(endTime);
        }
      };
    },
    endPicker() {
      let beginTime = this.moment(this.beginTime);
      return {
        disabledDate(time) {
          return time.getTime() < new Date(beginTime);
        }
      };
    }
  },
  mounted() {
    //接收父页面传来的值
    this.monitorId = this.$route.query.row.id;
     this.deviceNo = this.$route.query.row.deviceNo;
    this.isOnline = this.$route.query.row.isOnline==1?"在线":"离线";
    this.projectName = this.$route.query.row.projectName;
    this.mainInfo =this.$route.query.row;
    console.log(this.$route.query.row.isOnline)
    this.getListData();
  },
  methods: {
    routerLink() {
      this.$router.push({
        path: "/dust/dustMonitor/operationChart",
        query: { row: this.mainInfo }
      });
    },
    //页面搜索
    handleSearch() {
      //this.pageIndex = 1;
      this.getListData();
    },
    //条件搜索
    handleSearchButton() {
      this.pageIndex = 1;
      this.getListData();
    },
    //获取数据列表
    getListData() {
      geoperationDataListApi(this.params).then(res => {
        this.listData = res.data.list;
        this.pageTotal = res.data.total;
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleSearch();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.handleSearch();
    },
    listSelectionChange(sels) {
      this.sels = sels;
    },
    //取消
    handleCancel() {
      //   console.log(this.$router);
      //   this.$router.back(-1);
      this.$router.push("/dust/dustMonitor");
    },
    //设备状态
    deviceStatusCheck(row) {
      if (row.status === 0) {
        return "离线";
      } else if (row.status === 1) {
        return "在线";
      } else {
        return "未知";
      }
    }
  }
};
</script>
