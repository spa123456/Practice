import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/Home'),
      children: [{
        path: '/homeRecommend',
        name: 'homeRecommend',
        component: () => import('@/components/views/homeRecommend/homeRecommend')
      }]
    },
    {
      path: '/singerDetails',
      name: 'singerDetails',
      component: () => import('@/components/views/singer/SingerDetails')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   next(() => {
//     console.log('this')
//   })
// })
export default router
