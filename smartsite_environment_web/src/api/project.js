//项目首页接口
import http from '@/axios'
import {
    baseDeviceApi,base3
} from '@/axios/base.js';

//	环境pm25等趋势(7小时内的)
export const getTrendListApi = params => {
    //return http.get(`${baseDeviceApi}/project/projectEnvironmentMonitorDetail/trend`, {
    return http.get(`${base3}/ssdevice/project/projectEnvironmentMonitorDetail/trendForScreen`, {
        params: params
    }).then(res => res);
};
//环境监测列表
export const getEnvironmentListApi = params => {
    //ssdevice/device/projectEnvironmentMonitor
    //return http.get(`/environment/environmentInfo/getEnvironmentInfo`, {
    return http.get(`${base3}/ssdevice/device/projectEnvironmentMonitor/getEnvironmentInfoForScreen`, {
        params: params
    }).then(res => res);
};
//环境监测当前状态
export const getEnvironmentListMonitorApi = params => {
    //return http.get(`${base3}/project/projectEnvironmentMonitorDetail/getMonitorData`, {
    return http.get(`${base3}/ssdevice/project/projectEnvironmentMonitorDetail/getMonitorDataForScreen`, {
        params: params
    }).then(res => res);
};
