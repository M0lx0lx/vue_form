import Vue from 'vue'
import Router from 'vue-router'

import Home from '../demo/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   redirect: '/form_design'
    // },
    {
      path: '/form_design',
      name: 'form_design',
      component: Home
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../demo/Price.vue')
    }
  ]
})