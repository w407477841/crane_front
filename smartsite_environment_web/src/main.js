import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from "vuex";

//三方依赖
import 'normalize.css'
import echarts from 'echarts'
import Moment from "moment";
import '@/assets/css/common.scss';
import VueNumber from 'vue-number-animation'
import 'lodash'

Vue.prototype.$echarts = echarts
Vue.prototype.moment = Moment;
Vue.use(Vuex);
Vue.use(VueNumber);
//Vue.use(VueVideoPlayer,
  /* {
  options: global default options,
  events: global videojs events
} */
//)
// videojs.addLanguage('zh', {
//   Pause: '暂停',
//   // : '暂停',
//   Pause: '暂停',
//   // something...
// })

Vue.config.productionTip = false

window.rootApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')