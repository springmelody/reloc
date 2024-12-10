import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'map',
      component: () => import('../views/MapPage.vue'),
    },
    {
      path: '/login',
      name: 'signin',
      component: () => import('../views/SignIn.vue'),
    },

    {
      path: '/register',
      name: 'signup',
      component: () => import('../views/SignUp.vue'),
    },
  ],
})

export default router
