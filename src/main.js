import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMeta from 'vue-meta'
import VueClipboard from 'vue-clipboard2'


Vue.use(BootstrapVue)
Vue.use(VueMeta, {
  keyName: 'head'
});

Vue.use(require("vue-moment"));
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
