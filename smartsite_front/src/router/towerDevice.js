import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'
export default [{
    path: '/tower',
    component: Layout,
    alwaysShow: true,
    redirect: '/tower/towerhome',
    name: 'tower',
    permission: 'crane:menu',
    meta: {
        title: '塔吊管理',
        icon: 'el-icon-tajifangyang'
    },
    children: [{
            path: '/tower/towerhome',
            component: () =>
                import('@/views/information/master/home/index_td.vue'),
            name: 'towerhome',
            permission: 'crane:home:menu',
            alwaysShow: true,
            meta: {
                title: '塔吊首页',
                icon: 'el-icon-shouye',
                noCache: true
            }
        },
        {
            path: '/mapMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'crane:map:menu',
            meta: {
                title: '地图管理',
                icon: 'el-icon-ditu'
            },
            children: [{
                path: '/craneMap',
                name: 'craneMap',
                permission: 'crane:map:crane:menu',
                meta: {
                    title: '塔吊电子地图'
                },
                component: () =>
                    import('@/views/information/master/craneMap/index.vue')
            }]
        },
        {
            path: '/monitorMain',
            component: AppMain,
            permission: 'crane:real:menu',
            alwaysShow: true,
            meta: {
                title: '实时监控',
                icon: 'el-icon-jiankong'
            },
            children: [{
                    path: '/realTimeMonitoring',
                    name: 'realTimeMonitoring',
                    permission: 'crane:real:tower:menu',
                    meta: {
                        title: '实时监控(塔吊)'
                    },
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/realTimeMonitoring(towerCrane).vue')
                },
                {
                    path: '/realTimeMonitoring/monitorStatus',
                    name: 'monitorStatus',
                    meta: {
                        title: '监控状态',
                        parentPath: '/realTimeMonitoring',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/monitorStatus.vue')
                },
                {
                    path: '/realTimeMonitoring/runData',
                    name: 'runData',
                    meta: {
                        title: '运行数据',
                        parentPath: '/realTimeMonitoring',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/runData.vue')
                },
                {
                    path: '/realTimeMonitoring/operationChart',
                    name: 'operationChart',
                    meta: {
                        title: '运行数据',
                        parentPath: '/realTimeMonitoring',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/operationChart.vue')
                },
                {
                    path: '/realTimeMonitoring/runTime',
                    name: 'runTime',
                    meta: {
                        title: '运行时间',
                        parentPath: '/realTimeMonitoring',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/runTime.vue')
                },
                {
                    path: '/realTimeMonitoring/hoistingData',
                    name: 'hoistingData',
                    meta: {
                        title: '吊重数据',
                        parentPath: '/realTimeMonitoring',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/hoistingData.vue')
                },
                {
                    path: '/realTimeMonitoring/promptingMessage',
                    name: 'promptingMessage',
                    meta: {
                        title: '预警信息',
                        parentPath: '/realTimeMonitoring',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/promptingMessage.vue')
                },
                {
                    path: '/realTimeMonitoring/violationInformation',
                    name: 'violationInformation',
                    meta: {
                        title: '报警信息',
                        parentPath: '/realTimeMonitoring',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/violationInformation.vue')
                },
                {
                    path: '/realTimeMonitoring/warningMessage',
                    name: 'warningMessage',
                    meta: {
                        title: '报警信息',
                        parentPath: '/realTimeMonitoring',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(towerCrane)/warningMessage.vue')
                }
            ]
        },
        {
            path: '/deviceMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'crane:device:menu',
            meta: {
                title: '设备管理',
                icon: 'el-icon-shebei'
            },
            children: [{
                    path: '/crane',
                    name: 'crane',
                    permission: 'crane:device:crane:menu',
                    meta: {
                        title: '塔吊'
                    },
                    component: () =>
                        import('@/views/device/master/crane/index.vue')
                },
                {

                    path: '/crane/video',
                    name: 'video',
                    permission: 'dust:monitor:device:menu',
                    meta: {
                        title: '视频监控预览'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/device/master/crane/video.vue')
                }
            ]
        },
        {
            path: '/infoMain',
            component: AppMain,
            permission: 'crane:infoMain:menu',
            alwaysShow: true,
            //permission: 'crane:infoMain:menu',
            meta: {
                title: '信息管理',
                icon: 'el-icon-xinxi'
            },
            children: [{
                    path: '/craneDataModel',
                    name: 'craneDataModel',
                    permission: 'crane:infoMain:craneDataModel:menu',
                    meta: {
                        title: '塔吊数据模板'
                    },
                    component: () =>
                        import('@/views/information/master/craneDataModel/index.vue')
                },
                {
                    path: '/craneDataModel/craneDataModelDetail',
                    name: 'craneDataModelDetail',
                    meta: {
                        title: '塔吊数据模板详情',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/craneDataModel/details.vue')
                },
                {
                    path: '/targetSetCrane',
                    name: 'targetSetCrane',
                    permission: 'crane:infoMain:targetSetCrane:menu',
                    meta: {
                        title: '塔吊指标设置'
                    },
                    component: () =>
                        import('@/views/information/master/targetSetCrane/index.vue')
                }
            ]
        }
    ]
}, ]