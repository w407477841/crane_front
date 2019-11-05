import Layout from '@/views/layout'
export default [{
    path: '/device',
    redirect: 'noredirect',
    name: 'device',

    meta: {
        title: '设备管理',
        icon: 'iconfont icon-shengchanguanli'
    },

    alwaysShow: true,
    component: Layout,
    children: [{

            path: '/monitor',
            name: 'monitor',
            meta: {
                title: '扬尘'
            },
            component: () =>
                import('@/views/device/master/monitor/index.vue')
        },
        {
            path: '/projectLift',
            name: 'projectLift',
            meta: {
                title: '升降机'
            },
            component: () =>
                import('@/views/device/master/projectLift/index.vue')
        },
        {
            path: '/projectLift/projectLiftDetail',
            name: 'projectLiftDetail',
            meta: {
                title: '升降机详情',
                tagHidden: true
            },
            hidden: true,
            component: () =>
                import('@/views/device/master/projectLift/details.vue')
        },
        {
            path: '/crane',
            name: 'crane',
            meta: {
                title: '塔吊'
            },
            component: () =>
                import('@/views/device/master/crane/index.vue')
        }

    ]
}]