import Layout from '@/views/layout'
import {
    AppMain
} from '@/views/layout/components'
export default [{
    path: '/hydropower',
    component: Layout,
    alwaysShow: true,
    redirect: '/hydropower/hydropowerhome',
    name: 'hydropower',
    // permission: 'hydropower:menu',
    meta: {
        title: '水电管理',
        icon: "el-icon-shachenbao"
    },
    children: [
        {
            path: '/hydropower/hydropowerhome',
            component: () =>
                import('@/views/hydropower/index'),
            name: 'hydropowerhome',
            meta: {
                title: '水电首页',
                icon: 'el-icon-shouye',
                noCache: true
            }
        }
    ]
}, ]