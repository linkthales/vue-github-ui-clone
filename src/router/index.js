import Vue from 'vue';
import VueRouter from 'vue-router';
import Repo from '../views/Repo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/repo',
    name: 'Repo',
    component: Repo,
  },
  {
    path: '/',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
