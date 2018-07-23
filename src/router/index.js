import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Main from '@/pages/main/index.vue'
import Community from '@/pages/community/index.vue'
import About from '@/pages/about/index.vue'
import Join from '@/pages/join/index.vue'
import Cooperation from '@/pages/cooperation/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: { name: 'main' },
      children: [
        {
          path: '',
          name: 'main',
          component: Main
        },
        {
          path: 'community',
          name: 'community',
          component: Community
        },
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: 'join',
          name: 'join',
          component: Join
        },
        {
          path: 'cooperation',
          name: 'cooperation',
          component: Cooperation
        }
      ]
    }
  ]
})
