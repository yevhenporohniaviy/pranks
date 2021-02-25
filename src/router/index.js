import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemCategory from "@/views/ItemCategory";
import ListCategories from "@/views/ListCategories";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/categories',
  },
  {
    path: '/categories',
    component: ListCategories,
    children: [
      {
        path: ':slug',
        name: 'ItemCategory',
        component: ItemCategory,
        props: true,
        meta: {
          dialog: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
