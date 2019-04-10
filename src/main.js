import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(element)
// Vue.use(VueAxios,axios)

// Vue.filter('isFinal', (index, length) => {
//   return index < length ? false : true
// })

Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
