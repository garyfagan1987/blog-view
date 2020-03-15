import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article/*',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/category/*',
    name: 'Category',
    component: () => import('../views/Category.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
