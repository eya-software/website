import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movement',
    name: 'Movement',
    component: () => import(/* webpackChunkName: "movement" */ '../views/Movement.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import(/* webpackChunkName: "join" */ '../views/Join.vue')
  },
  {
    path: '/initiatives/covid19',
    name: 'Covid19',
    component: () => import(/* webpackChunkName: "covid19" */ '../views/Covid19.vue')
  },
  {
    path: '/initiatives/education',
    name: 'Education',
    component: () => import(/* webpackChunkName: "education" */ '../views/Education.vue')
  },
  {
    path: '/leadership',
    name: 'Leadership',
    component: () => import(/* webpackChunkName: "leadership" */ '../views/Leadership.vue')
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import(/* webpackChunkName: "partners" */ '../views/Partners.vue')
  },
  {
    path: '/chapters',
    name: 'Chapters',
    component: () => import(/* webpackChunkName: "chapters" */ '../views/Chapters.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
