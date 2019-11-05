import Layout from '@/views/layout'
export default [{
    path: '/factory',
    component: Layout,
    alwaysShow: true,
    redirect: '/debugging',
    name: 'factory',
    permission: 'factory:menu',
    meta: {
        title: '出厂调试',
        icon: "el-icon-setting"
    },
    children: [
        {
            path: '/debugging',
            name: 'debugging',
            meta: {
                title: '出厂调试'
            },
            component: () =>
                import('@/views/factoryDebugging/master/debugging/debugging.vue')
        }
    ]
}]