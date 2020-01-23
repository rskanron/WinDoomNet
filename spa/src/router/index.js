import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import VideoReel from '@/components/VideoReel'
import Music from '@/components/Music'
import Pay from '@/components/Pay'
import Info from '@/components/Info'

Vue.use(VueRouter)

let vueRouter = new VueRouter({
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
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})

vueRouter.afterEach( (to, from) => {
  gtag('config', 'UA-143767169-1', {'page_path': to.path});
  ga('set', 'page', to.path);
  ga('send', 'pageview');
})

export default vueRouter
