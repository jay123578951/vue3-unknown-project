import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/frontdesk/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backstage/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/backstage/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backstage/Products.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
