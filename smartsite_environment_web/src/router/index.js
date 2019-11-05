import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const environment = resolve => require(["@/views/project/environment.vue"], resolve);
// import Home from '@/views/home.vue'
// import Project from '@/views/project.vue'
// import ProjectIndex from '@/views/project/index.vue'
// import ProjectRealName from '@/views/project/realName.vue'
// import ProjectEnvironment from '@/views/project/environment.vue'
// import Intro from '@/views/project/intro.vue'
// import Monitor from '@/views/project/monitor.vue'
// import Login from '@/views/login/Login.vue'
// import SecurityRisk from '@/views/project/securityRisk.vue'
// import QulityRisk from '@/views/project/qulityRisk.vue'
// import SchedulePage from '@/views/project/schedulePage.vue'
const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        //集团首页
        {
            path: '/',
            name: 'environment',
            component: environment
        }
    ]
});
export default router;