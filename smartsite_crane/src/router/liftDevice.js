import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'
export default [{
    path: '/lift',
    component: Layout,
    alwaysShow: true,
    permission: 'lift:menu',
    redirect: '/lift/lifthome',
    name: 'lift',
    meta: {
        title: '升降机管理',
        icon: 'el-icon-shigongshengjiangji'
    },
    children: [{
            path: '/lift/lifthome',
            component: () =>
                import('@/views/information/master/home/index_sjj.vue'),
            name: 'lifthome',
            permission: 'lift:home:menu',
            alwaysShow: true,
            meta: {
                title: '升降机首页',
                icon: 'el-icon-shouye',
                noCache: true
            }
        },
        {
            path: '/mapMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'lift:mapMain:menu',
            meta: {
                title: '地图管理',
                icon: 'el-icon-ditu'
            },
            children: [{
                path: '/projectLiftMap',
                name: 'projectLiftMap',
                permission: 'lift:mapMain:projectLiftMap:menu',
                meta: {
                    title: '升降机电子地图'
                },
                component: () =>
                    import('@/views/information/master/projectLiftMap/index.vue')
            }]
        },
        {
            path: '/monitorMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'lift:monitorMain:menu',
            meta: {
                title: '实时监控',
                icon: 'el-icon-jiankong'
            },
            children: [{
                    path: '/realTimeLift',
                    name: 'realTimeLift',
                    permission: 'lift:monitorMain:realTimeLift:menu',
                    meta: {
                        title: '实时监控(升降机)'
                    },
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/realTimeMonitoring(lift).vue')
                },
                {
                    path: '/realTimeLift/monitorStatus',
                    name: 'monitorStatus',
                    meta: {
                        title: '监控状态(升降机)',
                        //父路由path
                        parentPath: '/realTimeLift',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/monitorStatus.vue')
                },
                {
                    path: '/realTimeLift/operationData',
                    name: 'operationData',
                    meta: {
                        title: '运行数据(升降机)',
                        parentPath: '/realTimeLift',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/operationData.vue')
                },
                {
                    path: '/realTimeLift/operationChart',
                    name: 'operationData',
                    meta: {
                        title: '运行数据(升降机)',
                        parentPath: '/realTimeLift',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/operationChart.vue')
                },
                {
                    path: '/realTimeLift/runningTime',
                    name: 'runningTime',
                    meta: {
                        title: '运行时间(升降机)',
                        parentPath: '/realTimeLift',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/runningTime.vue')
                },
                {
                    path: '/realTimeLift/workRecord',
                    name: 'workRecord',
                    meta: {
                        title: '工作记录',
                        parentPath: '/realTimeLift',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/workRecord.vue')
                },
                {
                    path: '/realTimeLift/earlyWarningInfo',
                    name: 'earlyWarningInfo',
                    meta: {
                        title: '预警信息(升降机)',
                        parentPath: '/realTimeLift',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/earlyWarningInfo.vue')
                },
                {
                    path: '/realTimeLift/warningMessage',
                    name: 'warningMessage',
                    meta: {
                        title: '报警信息(升降机)',
                        parentPath: '/realTimeLift',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/warningMessage.vue')
                },
                {
                    path: '/realTimeLift/illegalInfo',
                    name: 'illegalInfo',
                    meta: {
                        title: '违章信息(升降机)',
                        parentPath: '/realTimeLift',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(lift)/illegalInfo.vue')
                }
            ]
        },
        {
            path: '/deviceMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'lift:deviceMain:menu',
            meta: {
                title: '设备管理',
                icon: 'el-icon-shebei'
            },
            children: [{
                    path: '/projectLift',
                    name: 'projectLift',
                    permission: 'lift:deviceMain:projectLift:menu',
                    meta: {
                        title: '升降机'
                    },
                    component: () =>
                        import('@/views/device/master/projectLift/index.vue')
                },
                {

                    path: '/projectLift/video',
                    name: 'video',
                    // permission: 'dust:monitor:device:menu',
                    meta: {
                        title: '视频监控预览'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/device/master/projectLift/video.vue')
                }
            ]
        },
        {
            path: '/infoMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'lift:infoMain:menu',
            meta: {
                title: '信息管理',
                icon: 'el-icon-xinxi'
            },
            children: [{
                    path: '/liftDataModel',
                    name: 'liftDataModel',
                    permission: 'lift:infoMain:liftDataModel:menu',
                    meta: {
                        title: '升降机数据模板'
                    },
                    component: () =>
                        import('@/views/information/master/liftDataModel/index.vue')
                },
                {
                    path: '/liftDataModel/liftDataModelDetail',
                    name: 'liftDataModelDetail',
                    meta: {
                        title: '升降机数据模板详情',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/liftDataModel/details.vue')
                },
                {
                    path: '/targetSetLift',
                    name: 'targetSetLift',
                    permission: 'lift:infoMain:targetSetLift:menu',
                    meta: {
                        title: '升降机指标设置'
                    },
                    component: () =>
                        import('@/views/information/master/targetSetLift/index.vue')
                }
            ]
        }
    ]
}, ]