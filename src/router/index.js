import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Aligners from '../views/Aligners.vue'
import Braces from '../views/Braces.vue'
import Childs from '../views/Childs.vue'
import Preparation from '../views/Preparation.vue'
import Smiles from '../views/Smiles.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/examples/0',
      name: 'Aligners',
      component: Aligners,
      meta: {
        layout: 'default-layout',
      },
    },
    {
      path: '/examples/1',
      name: 'Braces',
      component: Braces,
    },
    {
      path: '/examples/2',
      name: 'Childs',
      component: Childs,
    },
    {
      path: '/examples/3',
      name: 'Preparation',
      component: Preparation,
    },
    {
      path: '/examples/4',
      name: 'Smiles',
      component: Smiles,
    },
  ],
})

export default router
