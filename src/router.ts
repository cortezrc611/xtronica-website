import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import homepage from './components/webpages/homepage/homepage.vue'; // Your homepage component

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: homepage }, // Home page route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // Handle scroll behavior
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
