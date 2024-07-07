import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Films from '../views/Films.vue';
import Series from '../views/Series.vue';
import Rating from '../views/Rating.vue';
import Results from '../components/Results.vue';
import Interstellar from '../views/Interstellar.vue';
import Matrix from '../views/Matrix.vue';
import Max from '../views/Max.vue';
import Cloud from '../views/Cloud.vue';
import GOT from '../views/GOT.vue';
import Haus from '../views/Haus.vue';
import Sherlok from '../views/Sherlok.vue';
import Supernatural from '../views/Supernatural.vue';
import Contacts from '../views/Contacts.vue';
import Details from '../views/Details.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import { useUserStore } from '../stores/user'; 

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/films', component: Films, meta: { requiresAuth: true } },
  { path: '/series', component: Series, meta: { requiresAuth: true } },
  { path: '/rating', component: Rating, meta: { requiresAuth: true } },
  { path: '/results', component: Results, meta: { requiresAuth: true } },
  { path: '/interstellar', component: Interstellar, meta: { requiresAuth: true } },
  { path: '/matrix', component: Matrix, meta: { requiresAuth: true } },
  { path: '/max', component: Max, meta: { requiresAuth: true } },
  { path: '/cloud', component: Cloud, meta: { requiresAuth: true } },
  { path: '/got', component: GOT, meta: { requiresAuth: true } },
  { path: '/haus', component: Haus, meta: { requiresAuth: true } },
  { path: '/sherlok', component: Sherlok, meta: { requiresAuth: true } },
  { path: '/supernatural', component: Supernatural, meta: { requiresAuth: true } },
  { path: '/details/:id', component: Details, meta: { requiresAuth: true } },
  { path: '/contacts', component: Contacts, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.matched.some(record => record.meta.requiresAuth) && !userStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
