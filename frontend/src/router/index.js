import Index from "../views/Index.vue"
import Dashboard from "../views/Dashboard.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/", component: Index, name: "home" },
  { path: "/dashboard", component: Dashboard, name: "dashboard" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
