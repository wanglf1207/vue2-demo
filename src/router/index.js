import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
import pageQuiButtion from '../pages/pageQuiButton'
import Counter from '../pages/Counter'
import pageQuiList from '../pages/pageQuiList'
import pageQuiNav from '../pages/pageQuiNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 
      'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButtion
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    }
  ]
})
