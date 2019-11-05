import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'

export default [{
    path: '/helmet',
    component: Layout,
    alwaysShow: true,
    redirect: '/helmet/helmetManage',
    name: 'helmet',
    permission: 'helmet:menu',
    meta: {
        title: '安全帽管理',
        icon: "el-icon-anquanmao"
    },
    children: [
        /*{
            path: '/helmet/helmetHome',
            component: () =>
                import('@/views/information/master/home/index.vue'),
            name: 'helmetHome',
            permission: 'helmet:home:menu',
            alwaysShow: true,
            meta: {
                title: '安全帽首页',
                icon: 'el-icon-shouye',
                noCache: true
            }
        },
        {
            path: '/mapMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'helmet:map:menu',
            meta: {
                title: '地图管理',
                icon: 'el-icon-ditu'
            },
            children: [{
                path: '/helmetMap',
                name: 'helmetMap',
                permission: 'helmet:map:helmetMap:menu',
                meta: {
                    title: '安全帽电子地图'
                },
                component: () =>
                    import('@/views/information/master/monitorMap/map.vue')
            }]
        },*/
        {
            path: '/helmet/helmetManage',
            component: AppMain,
            alwaysShow: true,
            permission: 'helmet:device:manage',
            meta: {
                title: '设备管理',
                icon: 'el-icon-shebei'
            },
            children: [/*{
                    path: '/helmet/helmetStock',
                    name: 'helmetStock',
                    permission: 'helmet:device:stock',
                    meta: {
                        title: '安全帽入库'
                    },
                    component: () =>
                        import('@/views/device/master/helmet/stockIndex.vue')
                },*/
                {
                    path: '/helmet/helmetManage',
                    name: 'helmetManage',
                    //permission: 'helmet:device:manage:menu',
                    meta: {
                        title: '安全帽管理'
                    },
                    component: () =>
                        import('@/views/device/master/helmet/helmetIndex.vue')
                },
            ]
        },
        {
            path: '/helmet/info',
            component: AppMain,
            alwaysShow: true,
            permission: 'helmet:info:manage',
            meta: {
                title: '信息管理',
                icon: 'el-icon-shebei'
            },
            children: [{
                    path: '/helmetRealTime',
                    name: 'helmetRealTime',
                    permission: 'helmet:device:manage:menu',
                    meta: {
                        title: '实时监控'
                    },
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(helmet)/index.vue')
                },
                {
                    path: '/helmetRealTime/monitorStatus',
                    name: 'monitorStatus',
                    meta: {
                        title: '监控状态',
                        parentPath: '/helmetRealTime',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(helmet)/monitorStatus.vue')
                }, {
                    path: '/helmetRealTime/runData',
                    name: 'runData',
                    meta: {
                        title: '运行数据',
                        parentPath: '/helmetRealTime',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(helmet)/runData.vue')
                }, {
                    path: '/helmetRealTime/promptingMessage',
                    name: 'promptingMessage',
                    meta: {
                        title: '运行数据',
                        parentPath: '/helmetRealTime',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(helmet)/promptingMessage.vue')
                }
            ]
        },
    ]
}, ]
