import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import axios from 'vue-axios'
import 'vant/lib/index.css'
import './registerServiceWorker'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
