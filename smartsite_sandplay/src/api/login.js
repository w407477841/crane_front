import http from '@/axios'

export const loginApi = params => {
    return http.post('http://www.jsxywg.cn/admin/login', params).then(res => res);
};