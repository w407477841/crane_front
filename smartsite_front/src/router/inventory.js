import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'

export default [{
    path: '/inventory',
    component: Layout,
    alwaysShow: true,
    redirect: '/inventory/inventoryManage',
    name: 'inventory',
    permission: 'inventory:menu',
    meta: {
        title: '库存管理',
        icon: "el-icon-shebei"
    },
    children: [
        {
            path: '/inventory/inventoryManage',
            alwaysShow: true,
            permission: 'inventory:inventory:manage',
            meta: {
                title: '库存管理',
                //icon: 'el-icon-shebei'
            },
            component: () =>
                import('@/views/inventory/master/stockIndex.vue'),
        },

    ]
}, ]
