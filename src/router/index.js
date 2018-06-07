import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'

import Home from '@/pages/Home'
import Urbex from '@/pages/Urbex'
import Exp from '@/pages/Exp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/urbex',
          component: Urbex,
        },
        {
          path: '/urbex/:id',
          component: Exp
        }
      ]
    }
  ]
})
