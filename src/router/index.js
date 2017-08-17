import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import head from '@/components/head/head'
import footer from '@/components/footer/footer'
import search from '@/components/search/search'
import takeOut from '@/components/takeOut/takeOut'

Vue.use(Router)

export default new Router({
  routes: [
    // header模块组件注册
    {
      path: '/head',
      name: 'head',
      component: head
    },
    // footer模块组件注册
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    // takeOut模块组件注册
    {
      path: '/',
      name: 'takeOut',
      component: takeOut
    },
    // search模块组件注册
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
