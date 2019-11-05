import Layout from '@/views/layout'
export default [
    {
        path: '/project',
        component: Layout,
        alwaysShow: true,
        name: 'project',
        permission : 'project:menu',
        redirect: '/projectinfo',
        meta: { title: '工程管理',icon:'el-icon-gongcheng-' },
        children:[
            {
                path: '/user',
                name: 'user',
                permission : 'project:user:menu',
                meta: { title: '人员信息' },
                component: () => import('@/views/baseInfo/user/user.vue')
            },
            {
                path: '/deviceType',
                name: 'deviceType',
                permission : 'project:deviceType:menu',
                meta: { title: '设备类型' },
                component: () => import('@/views/baseInfo/deviceType/deviceType.vue')
            },
            {
                path: '/projectinfo',
                name: 'projectinfo',
                permission : 'project:info:menu',
                meta: { title: '工程信息' },
                component: () => import('@/views/projectManagement/project/project.vue')
            }
        ]
    }
]