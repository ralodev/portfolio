import ComponentsView from '@/views/ComponentsView.vue'
import CreditsView from '@/views/CreditsView.vue'
import LandingView from '@/views/LandingView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/credits',
      name: 'credits',
      component: CreditsView
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // if coming from SGIP page, scroll to project section
    if (from.name === 'SGIP' && savedPosition) {
      return {
        el: '#projects',
        behavior: 'smooth'
      }
    }
    // if link has anchor, scroll to anchor
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // else scroll to top
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})
export default router
