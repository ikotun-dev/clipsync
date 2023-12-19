import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router.js'
import store from '../store/index'


const app = createApp(App);

app.use(router); // Mount the router instance
app.use(store); // Mount the store instance
app.mount('#app');