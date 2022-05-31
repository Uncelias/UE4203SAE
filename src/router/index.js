import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import page404 from '../views/page404.vue'
import Programmation from '../views/Programmation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:catchAll(.*)',
      name: 'page404',
      component: page404
    },
    {
      path: '/programmation',
      name: 'programmation',
      component: Programmation
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
