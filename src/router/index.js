import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import hello from '../components/HelloWorld.vue'
import foota from '../components/footer.vue'
import about from '../views/about.vue'
import gallery from '../views/gallery.vue'
import tnav from '../components/testnav.vue'
import nav from "../components/nav.vue"
import profEd from '../views/profEdu'
import icm from '../views/icm'
import train from '../views/train'
import test from '../views/test'
import overs from '../views/over-seas'
import toefl from '../views/toefl'
import pearson from '../views/pearson'
import itCenter from '../views/it-center'
import career from '../views/career'
import contact from '../views/contactUs';
import adminLogin from '../views/adminViews/adminLogin'
import adminIndex from '../views/adminViews/adminIndex'
import events from '../views/events'
import event from '../views/event'
import adminNews from '../views/adminViews/adminNews.vue'
import books from '../views/books.vue'
import Adbooks from '../views/adminViews/books.vue'
import capacity from '../views/capacity.vue'
import sport from '../views/sport.vue'
import testt from '../components/newNav.vue'
import digital from '../views/digital.vue'
import Addiy from '../views/adminViews/diy.vue'
import Adweb from '../views/adminViews/webinar.vue'
import Adcontest from '../views/adminViews/contest.vue'
import diy from '../views/diy.vue'
import web from '../views/webinar.vue'
import contest from '../views/contest.vue'

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
    path: '/testt',
    name: 'testt',
    component: testt
  },
  {
    path: '/contest',
    name: 'contest',
    component: contest
  },
  {
    path: '/web',
    name: 'web',
    component: web
  },
  {
    path: '/diy',
    name: 'diy',
    component: diy
  },
  {
    path: '/adminNews',
    name: 'adminNews',
    component: adminNews
  },
  {
    path: '/Addiy',
    name: 'Addiy',
    component: Addiy
  },
  {
    path: '/Adweb',
    name: 'Adweb',
    component: Adweb
  },
  {
    path: '/Adcontest',
    name: 'Adcontest',
    component: Adcontest
  },
  {
    path: '/books',
    name: 'books',
    component: books
  },
  {
    path: '/AdminBooks',
    name: 'Adbooks',
    component: Adbooks
  },
  {
    path: '/digital',
    name: 'digital',
    component: digital
  },
  {
    path: '/capacity',
    name: 'capacity',
    component: capacity
  },
  {
    path: '/sport',
    name: 'sport',
    component: sport
  },
  {
    path: '/events',
    name: 'events',
    component: events
  },
  {
    path: '/event',
    name: 'event',
    component: event
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminLogin
  },
  {
    path: '/adminIndex',
    name: 'adminIndex',
    component: adminIndex
  },
  {
    path: '/cont',
    name: 'contact',
    component: contact
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
    path: '/nav',
    name: 'nav',
    component: nav
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
