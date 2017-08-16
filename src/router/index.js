import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import head from '@/components/head/head'
import search from '@/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'head',
      component: head
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
