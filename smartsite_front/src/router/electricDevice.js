import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'
export default [{
    path: '/electric',
    component: Layout,
    alwaysShow: true,
    redirect: '/hydropower/hydropowerhome',
    name: 'electric',
    permission: 'electric:menu',
    meta: {
        title: '水电管理',
        icon: "el-icon-shuidianguanli"
    },
    children: [
        {
            path: '/hydropower/hydropowerhome',
            component: () =>
                import('@/views/hydropower/index'),
            name: 'hydropowerhome',
            permission: 'hydropower:home:menu',
            alwaysShow: true,
            meta: {
                title: '水电首页',
                icon: 'el-icon-shouye',
                noCache: true
            }
        },
        {
            path: '/mapMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'electric:map:menu',
            meta: {
                title: '地图管理',
                icon: 'el-icon-ditu'
            },
            children: [
                {
                    path: '/electric/electricMap',
                    name: 'electricMap',
                    permission: 'electric:map:device:menu',
                    meta: {
                        title: '电表电子地图'
                    },
                    component: () =>
                        import('@/views/information/master/electricMap/map.vue')
                },
                {
                    path: '/electric/waterMap',
                    name: 'watercMap',
                    permission: 'electric:map:water:menu',
                    meta: {
                        title: '水表电子地图'
                    },
                    component: () =>
                        import('@/views/information/master/waterMap/map.vue')
                }
            ]
        },
        {
            path: '/monitorMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'electric:oftenDevice:menu',
            meta: {
                title: '实时监控',
                icon: 'el-icon-jiankong'
            },
            children: [{
                    path: '/electric/electricDevice',
                    name: 'electricDevice',
                    permission: 'electric:electricDevice:menu',
                    meta: {
                        title: '实时监控(电表)'
                    },
                    component: () =>
                        import('@/views/information/master/electric/index.vue')
                },
                {
                    path: '/electric/electricDevice/deviceStatus',
                    name: 'deviceStatus',
                    permission: 'electric:deviceStatus:menu',
                    meta: {
                        title: '监控状态',
                        tagHidden: true,
                        //父路由path
                        parentPath:'/electric/electricDevice'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/electric/deviceStatus.vue')
                },
                {
                    path: '/electric/electricDevice/operationData',
                    name: 'operationData',
                    permission: 'electric:operationData:menu',
                    meta: {
                        title: '运行数据',
                        tagHidden: true,
                        //父路由path
                        parentPath:'/electric/electricDevice'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/electric/operationData.vue')
                },
                {
                    path: '/electric/electricDevice/warningMessage',
                    name: 'warningMessage',
                    permission: 'electric:warningMessage:menu',
                    meta: {
                        title: '报警信息',
                        tagHidden: true,
                        //父路由path
                        parentPath:'/electric/electricDevice'
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/electric/warningMessage.vue')
                },
                {
                    path: '/realTimeMonitoringWater',
                    permission: 'electric:oftenDevice:water:menu',
                    name: 'realTimeMonitoringWater',
                    meta: {
                        title: '实时监控(水表)'
                    },
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(waterMeter)/realTimeMonitoring(waterMeter).vue')
                },
                {
                    path: '/realTimeMonitoringWater/monitorStatus',
                    name: 'monitorStatus',
                    meta: {
                        title: '监控状态',
                        parentPath:'/realTimeMonitoringWater',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(waterMeter)/monitorStatus.vue')
                },
                {
                    path: '/realTimeMonitoringWater/runData',
                    name: 'runData',
                    meta: {
                        title: '运行数据',
                        parentPath:'/realTimeMonitoringWater',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(waterMeter)/runData.vue')
                },
                {
                    path: '/realTimeMonitoringWater/warningMessage',
                    name: 'warningMessage',
                    meta: {
                        title: '报警信息',
                        parentPath:'/realTimeMonitoringWater',
                        tagHidden: true
                    },
                    hidden: true,
                    component: () =>
                        import('@/views/information/master/realTimeMonitoring(waterMeter)/warningMessage.vue')
                }
            ]
        },
        {
            path: '/deviceMain',
            component: AppMain,
            alwaysShow: true,
            permission: 'electric:device:menu',
            meta: {
                title: '设备管理',
                icon: 'el-icon-shebei'
            },
            children: [{

                path: '/electricmeter',
                name: 'electricmeter',
                permission: 'electric:device:device:menu',
                meta: {
                    title: '电表监控'
                },
                component: () =>
                    import('@/views/device/master/electric/index.vue')
            },
            {
                path: '/equipment/water',
                permission: 'electric:device:water:menu',
                name: 'realTimeMonitoringWater',
                meta: {
                    title: '水表'
                },
                component: () =>
                    import('@/views/device/master/water/index.vue')
            } ]
        },
        {
            path: '/infoMain',
            component: AppMain,
            permission: 'electric:infoMain:menu',
            alwaysShow: true,
            meta: {
                title: '信息管理',
                icon: 'el-icon-xinxi'
            },
            children: [
                {
                    path: '/electric/targetSetElectric',
                    name: 'targetSetElectric',
                    permission: 'electric:infoMain:targetSet:menu',
                    meta: {
                        title: '电表指标设置'
                    },
                    component: () =>
                        import('@/views/information/master/targetSetElectric/index.vue')
                },
                {
                    path: '/electric/targetSetWater',
                    name: 'targetSetWater',
                    permission: 'electric:infoMain:targetSetWater:menu',
                    meta: {
                        title: '水表指标设置'
                    },
                    component: () =>
                        import('@/views/information/master/targetSetWater/index.vue')
                }
            ]
        }
    ]
}, ]