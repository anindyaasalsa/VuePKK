import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
})

export default router
