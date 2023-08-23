import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/p',
      name: 'position',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PositionView.vue')
    },
    {
      path: "/packages/:id",
      name: "packages",
      component: () => import('../views/PackagesView.vue')
    },
    {
      path: '/sticky',
      name: "sticky",
      component: () => import('../views/StickPosition.vue')
    },
    {
      path: '/stacking',
      name: 'stacking',
      component: () => import('../views/StackingPosition.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/CustomersView.vue')
    }

  ]
})

export default router
