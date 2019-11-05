import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout';
import informationDevice from './informationDevice';
import device from './device';
import system from './system';
import dustDevice from './dustDevice';
import project from './project';
import towerDevice from './towerDevice';
import liftDevice from './liftDevice';
import hydropower from './hydropower';
import waterDevice from './waterDevice';
import electricDevice from './electricDevice';
import remoteSetting from './RemoteSetting';
import helmet from './helmet';
import debugging from './debugging';
import baseStation from './baseStation';
import inventory from './inventory';



Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/dust'
        },
        ...inventory,
        ...dustDevice,
        ...towerDevice,
        ...liftDevice,
        ...helmet,
        // ...waterDevice,
        ...electricDevice,
        ...project,
        ...informationDevice,
        {
            path: '/login',
            component: () =>
                import('@/views/login/index'),
            hidden: true
        },
        // ...information,
        // ...device,
        // ...hydropower,
        ...system,
        ...remoteSetting,
        ...debugging,
        ...baseStation
    ]
})
