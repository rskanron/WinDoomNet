import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VideoReel from '@/components/VideoReel'
import Pay from '@/components/Pay'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active-nav',
  routes: [
    {
      path: '/',
      name: 'WinDoomFest',
      component: Home
    },
    {
      path: '/videos',
      name: 'Videos',
      component: VideoReel
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    }
  ]
})
