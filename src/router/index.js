import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from './../components/Welcome.vue'
import About from './../components/About.vue'
import Skills from './../components/Skills.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '*',
    redirect: '/welcome'
  }
]

const router = new VueRouter({
  routes
})

export default router