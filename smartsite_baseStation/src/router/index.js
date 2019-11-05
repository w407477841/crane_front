import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = resolve => require(["@/views/home.vue"], resolve);
const Login = resolve => require(["@/views/login.vue"], resolve);
const BaseStation = resolve => require(["@/views/baseStation.vue"], resolve);


const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        //首页
        {
            path: '/',
            name: 'home',
            component: Home
        },
        //登录
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/baseStation',
            name: 'baseStation',
            component: BaseStation
        }
    ]
});

export default router;