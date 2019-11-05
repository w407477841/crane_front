import {
    base
} from '@/axios/base.js';

import http from '@/axios'

export const getFundListApi = params => {
    return http.get(`${base}/project/projectGovInfo/getProjectInfo`, {
        params: params
    }).then(res => res);
};