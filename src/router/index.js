import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/pages/Root'
import Home from '@/components/pages/Home'
import Settings from '@/components/pages/Settings'
import Setup from '@/components/pages/Setup'
import Movement from '@/components/pages/Movement'
import Light from '@/components/pages/Light'
import Manual from '@/components/pages/Manual'
import Auto from '@/components/pages/Auto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/auto',
      name: 'Auto',
      component: Auto,
      meta: { requiresAuth: true }
    },
    {
      path: '/manual',
      name: 'Manual',
      redirect: 'manual/settings',
      component: Manual,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'settings',
          name: 'Settings',
          components: {
            a: Settings
          },
          meta: { requiresAuth: true }
        },
        {
          path: 'setup',
          name: 'Setup',
          components: {
            a: Setup
          },
          meta: { requiresAuth: true }
        },
        {
          path: 'movement',
          name: 'Movement',
          components: {
            a: Movement
          },
          meta: { requiresAuth: true }
        },
        {
          path: 'light',
          name: 'Light',
          components: {
            a: Light
          },
          meta: { requiresAuth: true }
        }
      ]
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
