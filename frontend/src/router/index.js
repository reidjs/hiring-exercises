import Index from "../views/Index.vue"
import Dashboard from "../views/Dashboard.vue"
import { createRouter, createWebHistory } from "vue-router"
import store from '../store'
const routes = [
  { path: "/", component: Index, name: "home" },
  { path: "/dashboard", component: Dashboard, name: "dashboard", beforeEnter(to, from, next) {
    const signedIn = store.getters['auth/signedIn']
    if (signedIn) {
      next()
    } else {
      next({
        name: 'home',
        path: '/'
      })
    }
  } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
