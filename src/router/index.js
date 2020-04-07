import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import Header from '../views/layouts/Header.vue'
import Footer from '../views/layouts/Footer.vue'
import Shop from '../views/layouts/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Header, footer: Footer}
  },
  {
    path: '/shop',
    name: 'shop',
    components: {default: Shop, header: Header, footer: Footer}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
=======

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
>>>>>>> 8d32a143334501f521d509eb93d5c909fac7ea44
})

export default router
