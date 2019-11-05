import Layout from '@/views/layout'
export default [
    {
        path: '/information',
        redirect:'noredirect',
        name:'information',
        meta: { title: '信息管理', icon: 'iconfont icon-shengchanguanli' },
        alwaysShow: true,
        component: Layout,
        children: [
            {
                path: '/environment',
                name: 'environment',
                meta: { title: '扬尘指标设置' },
                component: () => import('@/views/information/master/environment/index.vue')
            },
            {
                path: '/environment/environmentDetail',
                name: 'environmentDetail',
                meta: { title: '扬尘指标设置详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/environment/details.vue')
            },
            {
                path: '/dust',
                name: 'dust',
                meta: { title: '实时监控(扬尘)'},
                component: () => import('@/views/information/master/dust/index.vue')
            },
            {
                path: '/dust/monitorStatus',
                name: 'monitorStatus',
                meta: { title: '监控状态(扬尘)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/dust/monitorStatus.vue')
            },
            {
                path: '/dust/operationData',
                name: 'operationData',
                meta: { title: '运行数据(扬尘)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/dust/operationData.vue')
            },
            {
                path: '/dust/warningMessage',
                name: 'warningMessage',
                meta: { title: '报警信息(扬尘)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/dust/warningMessage.vue')
            },

            {

                path: '/notice',
                name: 'notice',
                meta: { title: '通知公告' },
                component: () => import('@/views/information/master/notice/index.vue')
            },{
                path: '/realTimeMonitoring',
                name: 'realTimeMonitoring',
                permission : 'information:realTower:menu',
                meta: { title: '实时监控(塔吊)' },
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/realTimeMonitoring(towerCrane).vue')
            },
            {
                path: '/realTimeMonitoring/monitorStatus',
                name: 'monitorStatus',
                meta: { title: '监控状态',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/monitorStatus.vue')
            },
            {
                path: '/realTimeMonitoring/runData',
                name: 'runData',
                meta: { title: '运行数据',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/runData.vue')
            },
            {
                path: '/realTimeMonitoring/runTime',
                name: 'runTime',
                meta: { title: '运行时间',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/runTime.vue')
            },
            {
                path: '/realTimeMonitoring/hoistingData',
                name: 'hoistingData',
                meta: { title: '吊重数据',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/hoistingData.vue')
            },
            {
                path: '/realTimeMonitoring/promptingMessage',
                name: 'promptingMessage',
                meta: { title: '预警信息',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/promptingMessage.vue')
            },
            {
                path: '/realTimeMonitoring/promptingMessage/promptingMessageDetail',
                name: 'promptingMessageDetail',
                meta: { title: '信息详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/promptingMessageDetail.vue')
            },
            {
                path: '/realTimeMonitoring/promptingMessage/promptingMessageAlarm',
                name: 'promptingMessageAlarm',
                meta: { title: '短信提醒',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/promptingMessageAlarm.vue')
            },
            {
                path: '/realTimeMonitoring/violationInformation',
                name: 'violationInformation',
                meta: { title: '报警信息',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/violationInformation.vue')
            },
            {
                path: '/realTimeMonitoring/violationInformation/violationInformationDetail',
                name: 'violationInformationDetail',
                meta: { title: '信息详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/violationInformationDetail.vue')
            },
            {
                path: '/realTimeMonitoring/violationInformation/violationInformationAlarm',
                name: 'violationInformationAlarm',
                meta: { title: '信息详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/violationInformationAlarm.vue')
            },
            {
                path: '/realTimeMonitoring/warningMessage',
                name: 'warningMessage',
                meta: { title: '报警信息',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/warningMessage.vue')
            },
            {
                path: '/realTimeMonitoring/warningMessage/warningMessageDetail',
                name: 'warningMessageDetail',
                meta: { title: '信息详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/warningMessageDetail.vue')
            },
            {
                path: '/realTimeMonitoring/warningMessage/warningMessageAlarm',
                name: 'warningMessageAlarm',
                meta: { title: '信息详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(towerCrane)/warningMessageAlarm.vue')
            },
            {
                path: '/message',
                name: 'message',
                meta: { title: '短信推送' },
                
                component: () => import('@/views/information/master/message/index.vue')

            },
            {
                path: '/targetSetCrane',
                name: 'targetSetCrane',
                meta: { title: '塔吊指标设置' },
                component: () => import('@/views/information/master/targetSetCrane/index.vue')
            },
            {
                path: '/targetSetCrane/targetSetCraneDetail',
                name: 'targetSetCraneDetail',
                meta: { title: '塔吊指标设置详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/targetSetCrane/details.vue')
            },
            {
                path: '/realTimeLift',
                name: 'realTimeLift',
                meta: { title: '实时监控(升降机)' },
                component: () => import('@/views/information/master/realTimeMonitoring(lift)/realTimeMonitoring(lift).vue')
            },
            {
                path: '/realTimeLift/monitorStatus',
                name: 'monitorStatus',
                meta: { title: '监控状态(升降机)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(lift)/monitorStatus.vue')
            },
            {
                path: '/realTimeLift/operationData',
                name: 'operationData',
                meta: { title: '运行数据(升降机)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(lift)/operationData.vue')
            },
            {
                path: '/realTimeLift/runningTime',
                name: 'runningTime',
                meta: { title: '运行时间(升降机)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(lift)/runningTime.vue')
            },
            {
                path: '/realTimeLift/workRecord',
                name: 'workRecord',
                meta: { title: '工作记录',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(lift)/workRecord.vue')
            },
            {
                path: '/realTimeLift/earlyWarningInfo',
                name: 'earlyWarningInfo',
                meta: { title: '预警信息(升降机)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(lift)/earlyWarningInfo.vue')
            },
            {
                path: '/realTimeLift/warningMessage',
                name: 'warningMessage',
                meta: { title: '报警信息(升降机)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(lift)/warningMessage.vue')
            },
            {
                path: '/realTimeLift/illegalInfo',
                name: 'illegalInfo',
                meta: { title: '违章信息(升降机)',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/realTimeMonitoring(lift)/illegalInfo.vue')
            },
            {
                path: '/targetSetLift',
                name: 'targetSetLift',
                meta: { title: '升降机指标设置' },
                component: () => import('@/views/information/master/targetSetLift/index.vue')
            },
            {
                path: '/targetSetLift/targetSetLiftDetail',
                name: 'targetSetLiftDetail',
                meta: { title: '升降机指标设置详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/targetSetLift/details.vue')
            },
            {
                path: '/liftDataModel',
                name: 'liftDataModel',
                meta: { title: '升降机数据模板' },
                component: () => import('@/views/information/master/liftDataModel/index.vue')
            },
            {
                path: '/liftDataModel/liftDataModelDetail',
                name: 'liftDataModelDetail',
                meta: { title: '升降机数据模板详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/liftDataModel/details.vue')
            },

            {
                path: '/craneDataModel',
                name: 'craneDataModel',
                meta: { title: '塔吊数据模板' },
                component: () => import('@/views/information/master/craneDataModel/index.vue')
            },
            {
                path: '/craneDataModel/craneDataModelDetail',
                name: 'craneDataModelDetail',
                meta: { title: '塔吊数据模板详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/craneDataModel/details.vue')
            },
            {
                path: '/monitorDataModel',
                name: 'monitorDataModel',
                meta: { title: '扬尘数据模板' },
                component: () => import('@/views/information/master/monitorDataModel/index.vue')
            },
            {
                path: '/monitorDataModel/monitorDataModelDetail',
                name: 'monitorDataModelDetail',
                meta: { title: '扬尘数据模板详情',tagHidden: true },
                hidden:true,
                component: () => import('@/views/information/master/monitorDataModel/details.vue')
            },
            {
                path: '/craneMap',
                name: 'craneMap',
                meta: { title: '塔吊电子地图' },
                component: () => import('@/views/information/master/craneMap/index.vue')
            },
            // {
            //     path: '/monitorMap',
            //     name: 'monitorMap',
            //     meta: { title: '扬尘电子地图' },
            //     component: () => import('@/views/information/master/monitorMap/map.vue')
            // },
            {
                path: '/projectLiftMap',
                name: 'projectLiftMap',
                meta: { title: '升降机电子地图' },
                component: () => import('@/views/information/master/projectLiftMap/index.vue')
            },

            {
                path: '/monitorMap',
                name: 'monitorMap',
                meta: { title: '扬尘电子地图' },
                component: () => import('@/views/information/master/monitorMap/map.vue')
            },
            {
                path: '/targetSetElectric',
                name: 'targetSetElectric',
                meta: { title: '电表指标设置' },
                component: () => import('@/views/information/master/targetSetElectric/index.vue')
            },
        ]
    }
]