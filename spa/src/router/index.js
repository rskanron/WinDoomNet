import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VideoReel from '@/components/VideoReel'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})
