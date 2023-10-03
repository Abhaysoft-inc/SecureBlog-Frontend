// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import { isAuthenticated } from '../auth';
import dashboardRoutes from './dashboardRoutes';
import authRoutes from './authRoutes';
import blogRoutes from './blogRoutes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...dashboardRoutes,
    ...authRoutes,
    ...blogRoutes,
    // ... other routes if needed
  ],
  linkExactActiveClass: 'active', // Set the active class
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isAuthenticated()) {
//       next('/login'); // Redirect to login page if not authenticated
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });


// In your Vue Router configuration


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      // If the token is not present, redirect to the login page
      next('/login');
    } else {
      // User is authenticated, proceed to the route
      next();
    }
  } else {
    // No authentication required, proceed to the route
    next();
  }
});


export default router;
