import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'
export default [{
    path: '/water',
    component: Layout,
    alwaysShow: true,
    redirect: '/waterMap',
    permission: 'water:menu',
    name: 'water',
    meta: {
        title: '水电管理',
        icon: 'el-icon-shuidianguanli'
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
            path: '/monitorMain',
            component: AppMain,
            permission: 'water:monitor:menu',
            alwaysShow: true,
            meta: {
                title: '实时监控',
                icon: 'el-icon-jiankong'
            },
            children: [
                {
                    path: '/realTimeMonitoringWater',
                    permission: 'water:monitor:water:menu',
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
            path: '/equipment',
            component: AppMain,
            permission: 'water:equipment:menu',
            alwaysShow: true,
            meta: {
                title: '设备管理',
                icon: 'el-icon-jiankong'
            },
            children: [
                {
                    path: '/equipment/water',
                    permission: 'water:equipment:water:menu',
                    name: 'realTimeMonitoringWater',
                    meta: {
                        title: '水表'
                    },
                    component: () =>
                        import('@/views/device/master/water/index.vue')
                }
            ]
        }
    ]
}, ]