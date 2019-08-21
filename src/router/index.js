import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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

// router.beforeEach((to, from, next) => {
//   next(() => {
//     console.log('this')
//   })
// })
export default router
