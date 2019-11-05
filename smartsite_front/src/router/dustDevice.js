import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'
export default [{
    path: '/dust',
    component: Layout,
    alwaysShow: true,
    redirect: '/dust/dusthome',
    name: 'dust',
    permission: 'dust:menu',
    meta: {
        title: '扬尘管理',
        icon: "el-icon-shachenbao"
    },
    children: [

        {
            path: '/dust/dusthome',
            component: () =>
                import('@/views/information/master/home/index.vue'),
            name: 'dusthome',
            permission: 'dust:home:menu',
            alwaysShow: true,
            meta: {
                title: '扬尘首页',
                icon: 'el-icon-shouye',
                noCache: true
            }
        },
        {
            path: '/mapMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'dust:map:menu',
            meta: {
                title: '地图管理',
                icon: 'el-icon-ditu'
            },
            children: [{
                path: '/dust/monitorMap',
                name: 'monitorMap',
                permission: 'dust:map:monitor:menu',
                meta: {
                    title: '扬尘电子地图'
                },
                component: () =>
                    import('@/views/information/master/monitorMap/map.vue')
            }]
        },
        {
            path: '/monitorMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'dust:oftenMonitor:menu',
            meta: {
                title: '实时监控',
                icon: 'el-icon-jiankong'
            },
            children: [{
                    path: '/dust/dustMonitor',
                    name: 'dustMonitor',
                    permission: 'dust:dustMonitor:menu',
                    meta: {
                        title: '实时监控(扬尘)'
                    },
                    component: () =>
                        import('@/views/information/master/dust/index.vue')
                },
                {
                    path: '/dust/dustMonitor/monitorStatus',
                    name: 'monitorStatus',
                    permission: 'dust:monitorStatus:menu',
                    meta: {
                        title: '监控状态',
                        tagHidden: true,
                        //父路由path
                        parentPath: '/dust/dustMonitor'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/dust/monitorStatus.vue')
                },
                {
                    path: '/dust/dustMonitor/operationData',
                    name: 'operationData',
                    permission: 'dust:operationData:menu',
                    meta: {
                        title: '运行数据',
                        tagHidden: true,
                        //父路由path
                        parentPath: '/dust/dustMonitor'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/dust/operationData.vue')
                },
                {
                    path: '/dust/dustMonitor/operationChart',
                    name: 'operationData',
                    permission: 'dust:operationData:menu',
                    meta: {
                        title: '运行数据',
                        tagHidden: true,
                        //父路由path
                        parentPath: '/dust/dustMonitor'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/dust/operationChart.vue')
                },
                {
                    path: '/dust/dustMonitor/warningMessage',
                    name: 'warningMessage',
                    permission: 'dust:warningMessage:menu',
                    meta: {
                        title: '报警信息',
                        tagHidden: true,
                        //父路由path
                        parentPath: '/dust/dustMonitor'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/dust/warningMessage.vue')
                }
            ]
        },
        {
            path: '/deviceMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'dust:monitor:menu',
            meta: {
                title: '设备管理',
                icon: 'el-icon-shebei'
            },
            children: [{

                    path: '/monitor',
                    name: 'monitor',
                    permission: 'dust:monitor:device:menu',
                    meta: {
                        title: '扬尘'
                    },
                    component: () =>
                        import('@/views/device/master/monitor/index.vue')
                },
                {
                    path: "/spray",
                    name: "spray",
                    permission: 'dust:spray:device:menu',
                    meta: {
                        title: '喷淋'
                    },
                    component: () => import('@/views/device/master/spray/index.vue')
                },
                {

                    path: '/monitor/video',
                    name: 'video',
                    // permission: 'dust:monitor:device:menu',
                    meta: {
                        title: '视频监控预览'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/device/master/monitor/video.vue')
                }
            ]
        },
        {
            path: '/infoMain',
            component: AppMain,
            permission: 'dust:infoMain:menu',
            alwaysShow: true,
            meta: {
                title: '信息管理',
                icon: 'el-icon-xinxi'
            },
            children: [{
                    path: '/monitorDataModel',
                    permission: 'dust:infoMain:data:menu',
                    name: 'monitorDataModel',
                    meta: {
                        title: '扬尘数据模板'
                    },
                    component: () =>
                        import('@/views/information/master/monitorDataModel/index.vue')
                },
                {
                    path: '/monitorDataModel/monitorDataModelDetail',
                    name: 'monitorDataModelDetail',
                    meta: {
                        title: '扬尘数据模板详情',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/monitorDataModel/details.vue')
                },
                {
                    path: '/dust/environment',
                    name: 'environment',
                    permission: 'dust:infoMain:targetSet:menu',
                    meta: {
                        title: '扬尘指标设置'
                    },
                    component: () =>
                        import('@/views/information/master/environment/index.vue')
                }
                // {
                //     path: '/dust/notice',
                //     name: 'notice',
                //     meta: { title: '通知公告' },
                //     component: () => import('@/views/information/master/notice/index.vue')
                // },
                // {
                //     path: '/dust/message',
                //     name: 'message',
                //     meta: { title: '短信推送' },
                //     component: () => import('@/views/information/master/message/index.vue')
                // }
            ]
        }
    ]
}, ]
