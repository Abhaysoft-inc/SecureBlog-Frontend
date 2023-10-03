// src/router/authRoutes.js
import LoginPage from '../components/LoginPage.vue';
import SignupPage from '../components/SignupPage.vue';
import HomePage from '../views/HomePage.vue';
export default [
  {
    path:'/',
    name:'SecureBlog Homepage',
    component:HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage,
  },

];
