import http from '@/axios'
import {
    base3
} from '@/axios/base.js';
export const loginApi = params => {
    return http.post(`${base3}/login`, params, {
        loading: false,
        noError: false,
        hasMsg: false
    }).then(res => res);
};

export const toGroupApi = params => {
    return http.get(`${base3}/toGroup`, {
        params: params,
        loading: false,
        noError: false
    }).then(res => res);
};
export const getUserOperationsApi = params => {
    return http.get(`${base3}/getUserOperations`, {
        params: params,
        loading: false,
        noError: false
    }).then(res => res);
};
export const logoutApi = params => {
    return http.get(`${base3}/logout`, {
        params: params,
        loading: false,
        noError: false
    }).then(res => res);
};
//设备平台登录信息
export const loginEquipmentApi = params => {
    return http.get(`${base3}/project/projectInfo/getShortInfoList`, {
        params: params,
        loading: false,
        noError: false
    }).then(res => res);
};