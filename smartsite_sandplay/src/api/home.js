import {
    base
} from '@/axios/base.js';

import http from '@/axios'

export const getFundListApi = params => {
    return http.get(`${base}/project/projectGovInfo/getProjectInfo`, {
        params: params
    }).then(res => res);
};

//获取串口列表
export const getComTrans = params => {
    return http.get(`${base}/comTrans/getCom`, {
        params: params
    }).then(res => res);
};
//选择串口
export const chooseCom = params => {
    return http.get(`${base}/comTrans/openCom`, {
        params: params
    }).then(res => res);
};
//小升降机
export const lift1 = params => {
    //return http.get(`${base}/sandplay/action?index=0&type=lift&sendType=1`, {
    return http.get(`${base}/sandplay/action?index=0&type=lift`, {
        params: params
    }).then(res => res);
};
//大左
export const lift2 = params => {
    //return http.get(`${base}/sandplay/action?index=1&type=lift&sendType=1`, {
    return http.get(`${base}/sandplay/action?index=1&type=lift`, {
        params: params
    }).then(res => res);
};
//大右
export const lift3 = params => {
    //return http.get(`${base}/sandplay/action?index=2&type=lift&sendType=1`, {
    return http.get(`${base}/sandplay/action?index=2&type=lift`, {
        params: params
    }).then(res => res);
};
//塔基
export const crane = params => {
    //return http.get(`${base}/sandplay/action?index=0&type=crane&sendType=1`, {
    return http.get(`${base}/sandplay/action?index=0&type=crane`, {
        params: params
    }).then(res => res);
};
//路灯
export const lamp = params => {
    //return http.get(`${base}/sandplay/action?index=0&type=lamp&sendType=1`, {
    return http.get(`${base}/sandplay/action?index=0&type=lamp`, {
        params: params
    }).then(res => res);
};
//小车
export const weight = params => {
    // return http.get(`${base}/sandplay/action?index=0&type=weight&sendType=1`, {
    return http.get(`${base}/sandplay/action?index=0&type=weight`, {
        params: params
    }).then(res => res);
};
//喷淋
export const spray = params => {
    //return http.get(`${base}/sandplay/action?index=0&type=spray&sendType=1`, {
    return http.get(`${base}/sandplay/action?index=0&type=spray`, {
        params: params
    }).then(res => res);
};
//所有
export const allOpen = params => {
    //return http.get(`${base}/sandplay/allOpen?sendType=1`, {
    return http.get(`${base}/sandplay/allOpen`, {
        params: params
    }).then(res => res);
};
//设备在线情况
export const getStatus = params => {
    //return http.get(`${base}/sandplay/allOpen?sendType=1`, {
    return http.get(`${base}/sandplay/getStatus`, {
        params: params
    }).then(res => res);
};