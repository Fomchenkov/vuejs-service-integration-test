import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import LoginForm from './components/LoginForm.vue';

const routes = [
  {
    path: '/login', 
    component: LoginForm,
    name: 'login',
    meta: {
        requiresGuest: true 
    }
  },
  { 
    path: '/dashboard', 
    component: Dashboard,
    name: 'dashboard',
    meta: { 
        requiresAuth: true 
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.path === '/' && localStorage.getItem('token')) {
        next('/dashboard');
    }
    else if (to.path === '/' && !localStorage.getItem('token')) {
        next('/login');
    }
    else if (to.meta.requiresGuest && localStorage.getItem('token')) {
        next('/dashboard');
    }
    else if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        next('/login');
    } else {
        next();
    }
});

export default router;
