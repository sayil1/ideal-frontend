import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import hello from '../components/HelloWorld.vue'
import foota from '../components/footer.vue'
import about from '../views/about.vue'
import gallery from '../views/gallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },
  {
    path: '/hell',
    name: 'hello',
    component: hello
  },
  {
    path: '/gal',
    name: 'gal',
    component: gallery
  },
  {
    path: '/foot',
    name: 'foot',
    component: foota
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
