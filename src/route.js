import Vue from 'vue'
import VueRouter from "vue-router"
import Page_1 from "./components/Page_1.vue"
import Page_2 from "./components/Page_2.vue"
import Page_3 from "./components/Page_3.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Page_1 },
  { path: '/page2', component: Page_2 },
  { path: '/page3', component: Page_3 }
]

const router = new VueRouter({
  mode: "history",
  routes: routes
})

export default router