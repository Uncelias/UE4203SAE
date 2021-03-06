import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import page404 from '../views/page404.vue'
import Programmation from '../views/Programmation.vue'
import mentionslegales from '../views/mentionslegales.vue'
import thefestival from '../views/thefestival.vue'
import artistes from '../views/artistes.vue'
import styleguide from '../views/styleguide.vue'
import listeartiste from '../views/listeartiste.vue'
import listeartistesynchro from '../views/listeartistesynchro.vue'
import listeartistedit from '../views/listeartistedit.vue'
import listeartistesupr from '../views/listeartistesupr.vue'
import listeartisteadd from '../views/listeartisteadd.vue'



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
      path: '/mentionslegales',
      name: 'mentionslegales',
      component: mentionslegales
    },
    {
      path: '/thefestival',
      name: 'thefestival',
      component: thefestival
    },
    {
      path: '/listeartiste',
      name: 'listeartiste',
      component: listeartiste
    },
    {
      path: '/artistes',
      name: 'artistes',
      component: artistes
    },
    {
      path: '/style-guide',
      name: 'style-guide',
      component: styleguide
    },
    {
      path: '/listeartistesynchro',
      name: 'listeartistesynchro',
      component: listeartistesynchro
    },
    {
      path: '/listeartistedit/:id',
      name: 'listeartistedit',
      component: listeartistedit
    },
    {
      path: '/listeartistesupr/:id',
      name: 'listeartistesupr',
      component: listeartistesupr
    },
    {
      path: '/listeartisteadd',
      name: 'listeartisteadd',
      component: listeartisteadd
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
