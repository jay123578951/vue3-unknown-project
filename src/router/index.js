import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/frontdesk/Home.vue'),
    children: [
      {
        path: 'index',
        component: () => import('../views/frontdesk/Index.vue'),
      },
      {
        path: 'watches',
        component: () => import('../views/frontdesk/Watches.vue'),
      },
      {
        path: 'watch/:productId',
        component: () => import('../views/frontdesk/Watch.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/frontdesk/Cart.vue'),
      },
    ],
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
      {
        path: 'coupon',
        component: () => import('../views/backstage/Coupon.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
