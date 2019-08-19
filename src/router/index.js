import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/HelloWorld'),
      children: []
    },
    {
      path: '/singerDetails',
      name: 'singerDetails',
      component: () => import('@/components/views/SingerDetails')
    }
  ]
})
