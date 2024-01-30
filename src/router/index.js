import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../components/TheHome.vue'
import TheShop from '../components/TheShop.vue'
import TheAbout from '../components/TheAbout.vue'
import TheContact from '../components/TheContact.vue'
import TheCart from '../components/TheCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component : TheHome
    },
    {
      path: '/shop',
      component : TheShop
    },
    {
      path: '/about',
      component : TheAbout
    },
    {
      path: '/contact',
      component : TheContact
    },
    {
      path: '/cart',
      component : TheCart
    }
  ]
})

export default router
