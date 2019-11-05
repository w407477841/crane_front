import Vue from 'vue'
import App from './App.vue'
import router from './router'


import '@/assets/style/common.scss';

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  //NProgress.start()
  if (to.path == "/login") {
    sessionStorage.removeItem("token");
  }
  let token = sessionStorage.getItem("token");
  if (!token && to.path != "/login") {
    next({
      path: "/login"
    });
  } else {
    next();
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')