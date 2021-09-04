import { createRouter, createWebHistory } from 'vue-router'
import { DefaultLayout, BlankLayout } from "@/layouts";

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  {
    path: "/",
    name: "index",
    redirect: '/products',
    component: BlankLayout,
    children: [
      {
        path: "/products",
        name: "products",
        redirect: `/products/search`,
        meta: { title: "Products", icon: "question_answer" },
        component: DefaultLayout,
        children: [
          {
            path: "/products/search",
            name: "products-list",
            meta: { title: "Products", icon: "question_answer" },
            component: () => import("@/pages/Home.vue"),
          },
          {
            path: "/products/create",
            name: "product-create",
            meta: { title: "Create product", icon: "question_answer" },
            component: () => import("@/pages/New.vue"),
          },
          {
            path: "/products/:id",
            name: "product-detail",
            meta: { title: "Detail", icon: "question_answer" },
            component: () => import("@/pages/About.vue"),
          },
        ],
      },
    ],
  },
  { path: '/:path(.*)', component: () => import("@/pages/NotFound.vue") },
]


export default createRouter({
  history: createWebHistory(),
  routes,
})
