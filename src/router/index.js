import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import hello from '../components/HelloWorld.vue'
import foota from '../components/footer.vue'
import about from '../views/about.vue'
import gallery from '../views/gallery.vue'
import tnav from '../components/testnav.vue'
import profEd from '../views/profEdu'
import icm from '../views/icm'
import train from '../views/train'
import test from '../views/test'
import overs from '../views/over-seas'
import toefl from '../views/toefl'
import pearson from '../views/pearson'
import itCenter from '../views/it-center'
import career from '../views/career'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },
  {
    path: '/hell',
    name: 'hello',
    component: hello
  },
  {
    path: '/career',
    name: 'career',
    component: career
  },
  {
    path: '/it-center',
    name: 'it-center',
    component: itCenter
  },
  {
    path: '/pearson',
    name: 'pearson',
    component: pearson
  },
  {
    path: '/toefl',
    name: 'toefl',
    component: toefl
  },
  {
    path: '/over',
    name: 'over',
    component: overs
  },
  {
    path: '/icm',
    name: 'icm',
    component: icm
  },
  {
    path: '/train',
    name: 'train',
    component: train
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/prof',
    name: 'prof',
    component: profEd
  },
  {
    path: '/tnav',
    name: 'tnav',
    component: tnav
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
