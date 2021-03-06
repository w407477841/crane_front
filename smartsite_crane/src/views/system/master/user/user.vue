<template>

  <div class="app-container list-container">
    <div class="container-box condition-box">
      <div class="conditionBar">
        <el-form :inline="true" class="condition-form">
          <el-form-item>
            <el-input size="mini" v-model="keyword" :disabled="edit" placeholder="姓名" :clearable="true">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="searchBtn" type="primary" size="mini" icon="el-icon-search" @click="handleSearch">查询</el-button>
          </el-form-item>
          <topButton @clickInsert="handleInsert" @clickDelate="handleDelete" :sels="sels" :operationPrex="operationPrex"></topButton>
        </el-form>
      </div>
    </div>

    <div class="container-box list-box">
      <div class="table-box">
        <el-table size="small" :data="listData" style="width: 100%" height="100%" highlight-current-row @selection-change="listSelectionChange" header-row-class-name="xyTableHeader">
          <el-table-column type="selection" :width="selectionWidth"></el-table-column>
          <el-table-column type="index" :width="indexWidth"></el-table-column>
          <el-table-column label="姓名" prop="name" width="180"></el-table-column>
          <el-table-column label="登录名" prop="code" width="150"></el-table-column>
          <el-table-column label="手机号" prop="phone" width="150"></el-table-column>
          <el-table-column label="厂家" prop="vender" width="150"></el-table-column>
          <el-table-column label="备注" :show-overflow-tooltip="true" prop="comments" width="180"></el-table-column>
          <el-table-column label="创建日期" :width="dateWidth" prop="createTime" :formatter="changeDate"></el-table-column>
          <el-table-column label="创建人" :width="userWidth" prop="createUserName"></el-table-column>
          <el-table-column label="操作" :width="300" align="center" fixed="right">
            <template slot-scope="scope">
              <rightButton @clickView="handleView" @clickUpdate="handleUpdate" @clickDelate="handleDelete" :row="scope.row" :operationPrex="operationPrex"></rightButton>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination-box">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="pageSizes" :page-size="pageSize" :total="pageTotal" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
      </div>
    </div>

    <el-dialog :title="this.title" :visible.sync="userDetailVisible" :close-on-click-modal="false" width="50%" v-if="userDetailVisible">
      <user-detail @setShow="setShow" :edit="this.edit" :openType="this.openType" :id="this.id" :userRoles="this.userRoles" :roleIds="this.roleIds"></user-detail>
    </el-dialog>

    <el-dialog title="设置角色" :visible.sync="roleVisible" :close-on-click-modal="false" width="50%" v-if="roleVisible">
      <role-list @setShow="setShow"></role-list>
    </el-dialog>
  </div>
</template>

<script>
import {getUser,deleteUsers} from '@/views/system/api/systemApi.js';
import UserDetail from './userDetail';
import RoleList from './roleList';

export default {
  data() {
    return {
      listData: [],
      keyword: '',
      pageIndex: 1,
      pageSizes: [10, 20, 30],
      pageSize: 10,
      pageTotal: 0,
      sels: [],
      edit : false,
      openType : '',
      userDetailVisible : false,
      roleVisible : false,
      id : '',
      userRoles : [],
      roleIds : [],
      operationPrex : 'system:user'
    };
  },
  computed: {
    params() {
      let param = {
        key: this.keyword,
        pageNum: this.pageIndex,
        pageSize: this.pageSize
      };
      return param;
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
      getUser(this.params).then(res => {
        this.listData = res.data.list;
        this.pageTotal = Number(res.data.total);
        if (this.pageTotal == 0 && this.pageIndex > 1) {
          this.pageIndex--;
          this.getListData();
        }
      });
    },
    //改名页面显示条数
    handleSizeChange(val) {
      this.pageSize = val;
      this.getListData();
    },
    //改变页数
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getListData();
    },
    //勾选复选框给sels赋值
    listSelectionChange(sels) {
      this.sels = sels;
    },
    //删除
    handleDelete(sels) {
      this.$confirm("确认删除选中记录吗？","提示", {type: "warning"}).then(() => {
        let ids = sels.map(item => item.id);
        let para = {
          ids : ids
        };
        deleteUsers(para).then((res) => {
          if(res.code == 200) {
            this.$message({
              type : 'success',
              message : res.message
            });
            this.getListData();
          }
        });
      });
    },
    //点击查看按钮弹出详情页
    handleView(row) {
      this.title = "查看";
      this.edit = true;
      this.openType = "view";
      this.id = row.id;
      this.userDetailVisible = true;
    },
    //点击编辑按钮弹出详情页
    handleUpdate(row) {
      this.title = "编辑";
      this.edit = false;
      this.openType = "update";
      this.id = row.id;
      this.userDetailVisible = true;
    },
    //点击新增按钮弹出详情页
    handleInsert() {
      this.title = "新增";
      this.edit = false;
      this.openType = "insert";
      this.userDetailVisible = true;
    },
    //日期格式化
    changeDate : function(row) {
      let date = row.createTime;
      return this.$moment(date).format('YYYY-MM-DD');
    },
    //状态格式化
    getStatus : function(row) {
      let status = row.status;
      if(status == 1) {
        return '未工作';
      }else if(status == 2) {
        return '已工作';
      }
    },
    //子组件向父组件传值
    setShow : function(data) {
      if(data.sign == '关闭人员信息') {
        this.userDetailVisible = false;
        this.getListData();
      }else if(data.sign == '打开设置角色') {
        this.roleVisible = true;
      }else if(data.sign == '关闭设置角色') {
        if(data.data != undefined) {
          for(let i = 0;i < data.data.length;i++) {
            this.$set(this.userRoles,i,data.data[i].name);
            this.$set(this.roleIds,i,data.data[i].id);
          }
        }
        this.roleVisible = false;
      }
    }
  },
  components : {
    UserDetail,
    RoleList
  }
};
</script>

<style lang="scss" scoped>
</style>
