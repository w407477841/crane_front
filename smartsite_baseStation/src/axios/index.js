/**
 * @fileOverview axios配置
 * @author pangyu
 * @date 2018/08/01
 */

import axios from "axios";
import {
    base
} from './base.js'

axios.defaults.withCredentials = true;

let http = axios.create({
    baseURL: base,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        post: {
            'Content-Type': 'application/json'
        }
    }
});
//取消操作 请求队列

//请求 拦截器
http.interceptors.request.use(
    config => {
        config.headers.Token = sessionStorage.getItem('token');

        return config;
    },
    err => {
        return Promise.reject(err);
    });

//响应 拦截器
http.interceptors.response.use(
    response => {
        if (response.data.code == 401) {
            sessionStorage.removeItem('token');
        }

        return response.data;
    },
    error => {
        if (error.response) {
            //switch (error.response.status) { }
        }
        return Promise.reject(error)
    });

const defaultConfig = {
    removePending: true,
}

export default {
    get: (url, config) => http.get(url, { ...defaultConfig,
        ...config
    }),
    put: (url, data, config) => http.put(url, data, { ...defaultConfig,
        ...config
    }),
    post: (url, data, config) => http.post(url, data, { ...defaultConfig,
        ...config
    }),
    patch: (url, data, config) => http.patch(url, data, { ...defaultConfig,
        ...config
    }),
    delete: (url, data, config) => http.delete(url, { ...defaultConfig,
        ...config
    })
}