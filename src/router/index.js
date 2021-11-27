import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {

    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue')
  },
  {
    path: '/farm',
    name: 'Farm',
    component: () => import('../views/Farm.vue')
  },
  {
    path: '/pig',
    name: 'Pig',
    component: () => import('../views/Pig.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
    

  },
  {
    path: '/lb',
    name: 'lb',
    component: () => import('../views/Lobby.vue')
    

  },
  {
    path: '/updatedata',
    name: 'updatedata',
    component: () => import('../views/updatedata.vue')
    

  },
  {
    path: '/data',
    name: 'data',
    component: () => import('../views/data.vue')
    

  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
