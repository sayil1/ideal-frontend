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

import VueClipboard from 'vue-clipboard2'
import Sticky from 'vue-sticky-directive'
import vuePositionSticky from 'vue-position-sticky'
import VueAlertify from 'vue-alertify';
import AOS from 'aos'
import 'aos/dist/aos.css'

import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import Meta from "vue-meta";
Vue.use(Meta);
Vue.use(CoolLightBox)


Vue.use(BootstrapVue)

Vue.use(require("vue-moment"));
Vue.use(VueClipboard)
Vue.use(Sticky)
Vue.use(vuePositionSticky)
Vue.use(VueAlertify, AOS);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    AOS.init()
  },

  render: h => h(App)
}).$mount('#app')
