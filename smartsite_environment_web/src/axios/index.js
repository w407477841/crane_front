/**
 * @fileOverview axios配置
 * @author pangyu
 * @date 2018/08/01
 */

import axios from "axios";
import {
  base3
} from './base.js'

axios.defaults.withCredentials = true;

let http = axios.create({
  baseURL: base3,
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
let pending = [];
let cancelToken = axios.CancelToken;
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
      pending[p].f('操作取消'); //执行取消操作
      pending.splice(p, 1); //把这条记录从数组中移除
    }
  }
}

//请求 拦截器
http.interceptors.request.use(
  config => {
    config.headers.Token = sessionStorage.getItem('token');
    // removePending(config); //在一个ajax发送前执行一下取消操作
    // config.cancelToken = new cancelToken((c) => {
    //     if (config.removePending) {
    //         pending.push({
    //             u: config.url + '&' + config.method,
    //             f: c
    //         });
    //     }
    // });

    return config;
  },
  err => {
    return Promise.reject(err);
  });

//响应 拦截器
http.interceptors.response.use(
  response => {
    // removePending(response.config); //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    if (response.data.code == 401) {
      sessionStorage.removeItem('token');
      rootApp.$router.push('/login');
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
