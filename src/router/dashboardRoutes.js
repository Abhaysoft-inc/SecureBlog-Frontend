// src/router/dashboardRoutes.js
import DashboardPage from '../components/DashboardPage.vue';

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
];
