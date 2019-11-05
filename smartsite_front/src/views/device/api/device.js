import http from '@/axios'
//列表

//萤石云视频
export const getYSCameraListApi = params => {
    return http.get('/device/cameraInfo/getYSCameraInfo', {
        params: params
    }).then(res => res);
};
