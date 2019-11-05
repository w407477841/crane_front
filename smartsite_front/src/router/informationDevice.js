import Layout from '@/views/layout'
export default [
    {
        path: '/informationDevice',
        component: Layout,
        alwaysShow: true,
        name: 'informationDevice',
        permission : 'information:menu',
        redirect: '/notice',
        meta: { title: '信息管理',icon:'el-icon-xinxi' },
        children:[
            {
                path: '/notice',
                name: 'notice',
                permission : 'information:notice:menu',
                meta: { title: '通知公告' },
                component: () => import('@/views/information/master/notice/index.vue')
            },
            {
                path: '/message',
                name: 'message',
                permission : 'information:message:menu',
                meta: { title: '短信推送' },
                component: () => import('@/views/information/master/message/index.vue')
            } 
        ]
    }
]