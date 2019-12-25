import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from '@/plugins/vuetify' // path to vuetify export
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify:Vuetify,
  vuetify,
  render: h => h(App)
}).$mount('#app')
