import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/next',
    component: () => import('../pages/NextPage.vue'),
  },
  {
    path: '/start',
    component: () => import('../pages/Start.vue'),
  },
  {
    path: '/detail',
    component: () => import('../pages/Detail.vue'),
  },
  {
    path: '/finish',
    component: () => import('../pages/Finish.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 