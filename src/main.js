import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'; // Import the router configuration

const app = createApp(App);
app.use(router);
app.mount('#app');
