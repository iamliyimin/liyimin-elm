import Vue from 'vue'
import Router from 'vue-router'
import Father from '@/components/Father/Father'
import search from '@/components/search/search'
import takeOut from '@/components/takeOut/takeOut'

Vue.use(Router)

export default new Router({
  routes: [
    // 所有组件的父组件注册
    {
      path: '/Father',
      name: 'Father',
      component: Father,
      children: [
        // takeOut模块组件注册
        { path: '/takeOut', name: 'takeOut', component: takeOut },
        // search模块组件注册
        { path: '/search', name: 'search', component: search },
        // 重定向到外卖模块
        {path: '*', redirect: '/takeOut'}
      ]
    },
    // 重定向到外卖模块
    {path: '*', redirect: '/Father/takeOut'}
  ]
})
