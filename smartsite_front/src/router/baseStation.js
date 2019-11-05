import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'
export default [{
    path: '/baseStation',
    component: Layout,
    alwaysShow: true,
    redirect: '/setting',
    name: 'baseStation',
     permission: 'station:menu',
    meta: {
        title: '基站管理',
        icon: "el-icon-setting"
    },
    children: [{
            path: '/setting',
            name: 'setting',
            meta: {
                title: '平面图配置'
            },
            permission: 'station:map:config:menu',
            component: () =>
                import('@/views/baseStation/master/setting/index.vue')
        },
        // {
        //     path: '/setStation',
        //     name: 'setStation',
        //     meta: {
        //         title: '配置基站'
        //     },
        //     component: () =>
        //         import('@/views/baseStation/master/setStation/index.vue')
        // },
        {
            path: '/setStation',
            component: AppMain,
            alwaysShow: true,
            meta: {
                title: '配置基站',
                // icon: 'el-icon-ditu'
            },
            permission: 'station:config:menu',
            children: [{
                    path: '/setStation/stationPreview',
                    name: 'stationPreview',
                     permission: 'station:config:view:menu',
                    meta: {
                        title: '配置基站一览'
                    },
                    
                    component: () =>
                        import('@/views/baseStation/master/setStation/index.vue')
                },
                {
                    path: '/setStation/setContent',
                    name: 'setContent',
                    hidden: true,
                    // permission: 'dust:map:monitor:menu',
                    meta: {
                        title: '配置基站详情'
                    },
                    component: () =>
                        import('@/views/baseStation/master/setStation/setContent.vue')
                }
            ]
        }
    ]
}]