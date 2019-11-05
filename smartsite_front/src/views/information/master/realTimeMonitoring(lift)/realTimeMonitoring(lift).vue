<template>
    <div class="app-container list-container">
        <div class="container-box condition-box">
            <div class="conditionBar">
                <el-form :inline="true" class="condition-form">
                    <el-form-item>
                         <el-select v-model="projectId" placeholder="工程名称" :clearable="true" :filterable="true" size="mini">
                <el-option v-for="item in projectList" :label="item.label" :value="item.value" :key="item.value"></el-option>
            </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="isOnline" placeholder="状态" size="mini" clearable>
                            <el-option v-for="item in statusList" :label="item.label" :value="item.value" :key="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item> 
          <el-input  size="mini"  class="toolbar-search"  v-model="deviceNo" filterable  clearable   placeholder="设备编号" />
          </el-form-item>
                    <el-form-item>
                        <el-button class="searchBtn" type="primary" size="mini" icon="el-icon-search" @click="handleSearch">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <div class="container-box list-box">
            <div class="table-box">
                <el-table size="small" :data="listData" style="width: 100%" height="100%" highlight-current-row
                          @selection-change="listSelectionChange" header-row-class-name="xyTableHeader">
                    <el-table-column type="selection" :width="selectionWidth"></el-table-column>
                    <el-table-column type="index" :width="indexWidth"></el-table-column>
                    <el-table-column label="设备编号" prop="deviceNo"></el-table-column>
                    <el-table-column label="制造厂家" prop="manufactor"></el-table-column>
                    <el-table-column label="状态" prop="isOnline"></el-table-column>
                    <el-table-column label="工程名称" prop="projectName" show-overflow-tooltip></el-table-column>
                    <el-table-column label="操作" width="700" align="center" fixed="right">
                        <template slot-scope="scope">
                            <liftButton @monitorStatus="monitorStatus" @operationData="operationData" 
                            @runningTime="runningTime" @workRecord="workRecord" 
                            @earlyWarningInfo="earlyWarningInfo" 
                            @warningInfo="warningInfo"  @illegalInfo="illegalInfo"   
                            
                            
                             :row="scope.row" ></liftButton>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination-box">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                               :current-page="pageIndex" :page-sizes="pageSizes" :page-size="pageSize"
                               :total="pageTotal" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {realTimeMonitoring} from "@/views/information/api/lift.js";
    import {selectProjectInfo} from '@/views/api/equipmentApi.js';
    import liftButton from "./liftButton";
    export default {
        components: {liftButton},
        data() {
            return {
                listData: [],
                isDangerous: "",
                keyword: "",
                deviceNo:"",
                isOnline: null,
                projectId: null,
                pageIndex: 1,
                pageSizes: [10, 20, 30],
                pageSize: 10,
                pageTotal: 0,
                sels: [],
                visible: false,
                detailsType: null,
                projectList : [],
                statusList : [
                    
                    {label : "离线",value : 0},
                    {label : "在线",value : 1}
                ],
                detailsId: null
            };
        },
        computed: {
          
            params() {
              
                let param = {
                    
                    pageNum: this.pageIndex,
                    pageSize: this.pageSize,
                    body:{
                     projectId:this.projectId ,
                     isOnline:this.isOnline,
                     deviceNo:this.deviceNo  
                    }
                };
                return param;
            }
        },
        mounted() {
            this.getListData();
            this.getProject();
        },
        methods: {
            handleSearch() {
                this.pageIndex = 1;
                this.getListData();
            },
            getListData() {
                realTimeMonitoring(this.params).then(res => {
                    this.listData = res.data.list;
                    this.pageTotal = res.data.total;
                });
            },
            handleSizeChange(val) {
                this.pageSize = val;
               this.getListData();
            },
            handleCurrentChange(val) {
                this.pageIndex = val;
                this.getListData();
            },
            listSelectionChange(sels) {
                this.sels = sels;
            },
            //监控状态
            monitorStatus(sels){
                this.$router.push({
                    path: this.$route.path+'/monitorStatus',
                    query: { row: sels}
                });
            },
            //运行数据
            operationData(sels){
                sessionStorage.removeItem("liftProjectName");
                sessionStorage.setItem("liftProjectName",sels.projectName);
                sessionStorage.removeItem("liftDeviceNo");
                sessionStorage.setItem("liftDeviceNo",sels.deviceNo);
                sessionStorage.removeItem("liftIsOnline");
                sessionStorage.setItem("liftIsOnline",sels.isOnline);
                console.log("插入数据",sels)
                console.log("插入数据",sessionStorage.getItem("liftInfo"))
                this.$router.push({
                    path: this.$route.path+'/operationData',
                    query: { row: sels}
                });
                 
                 
            },
            runningTime(sels){
                this.$router.push({
                    path: this.$route.path+'/runningTime',
                    query: { row: sels}
                });
            },
            workRecord(sels){
                this.$router.push({
                    path: this.$route.path+'/workRecord',
                    query: { row: sels}
                });
            }, 
            //预警信息
            earlyWarningInfo(sels){
                this.$router.push({
                    path: this.$route.path+'/earlyWarningInfo',
                    query: { row: sels}
                });
            },
                 //预警信息
            warningInfo(sels){
                this.$router.push({
                    path: this.$route.path+'/warningMessage',
                    query: { row: sels}
                });
            },
                 //预警信息
            illegalInfo(sels){
                this.$router.push({
                    path: this.$route.path+'/illegalInfo',
                    query: { row: sels}
                });
            },
                //获取项目
    getProject : function() {
      let para = {};
      selectProjectInfo(para).then((res) => {
        this.projectList = res.data;
      });
    }
        }
    };
</script>
