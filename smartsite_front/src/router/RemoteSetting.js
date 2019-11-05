import Layout from '@/views/layout'

export default [{
    path: '/remoteSetting',
    //permission: 'system:menu',
    component: Layout,
    alwaysShow: true,
    name: 'remoteSetting',
    redirect: '/version',
    permission: 'setting:menu',
    meta: {
        title: '远程设置',
        icon: 'el-icon-yckz'
    },
    children: [
        {
            path: '/version',
            name: 'version',
            permission: 'setting:index:menu',
            meta: {
                title: '升级包管理'
            },
            component: () =>
                import('@/views/remoteSetting/master/version/index.vue')
        },
        {
            path: '/logUser',
            name: 'logUser',
            permission: 'logUser:index:menu',
            meta: {
                title: '日志发送用户'
            },
            component: () =>
                import('@/views/remoteSetting/master/logUser/index.vue')
        },
        {
            path: '/logManagement',
            name: 'logManagement',
            permission: 'logManagement:index:menu',
            meta: {
                title: '日志管理'
            },
            component: () =>
                import('@/views/remoteSetting/master/logManagement/index.vue')
        },
        {
            path: '/applicationManage',
            name: 'applicationManage',
            permission: 'remote:application:menu',
            meta: {
                title: '应用管理'
            },
            component: () =>
                import('@/views/remoteSetting/master/application/application.vue')
        }
    ]
}]