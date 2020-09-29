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
Vue.use(Meta,
   // optional pluginOptions
   {
    keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
    attribute: "a", // the attribute name vue-meta adds to the tags it observes
   
  }
   );
Vue.use(CoolLightBox)


Vue.use(BootstrapVue)

Vue.use(require("vue-moment"));
Vue.use(VueClipboard)
Vue.use(Sticky)
Vue.use(vuePositionSticky)
Vue.use(VueAlertify, AOS);

Vue.config.productionTip = false

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

new Vue({
  router,
  store,
  vuetify,
  created() {
    AOS.init()
  },

  render: h => h(App)
}).$mount('#app')
