import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('./views/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue'),
      },
      {
        path: '/post/:id',
        name: 'Post',
        component: () => import('./views/Post.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
