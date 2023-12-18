import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router.js'



const app = createApp(App);

app.use(router); // Mount the router instance

app.mount('#app');