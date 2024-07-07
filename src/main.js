import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import { useUserStore } from './stores/user';             
import 'primeicons/primeicons.css';   
import '/assets/css/style.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PrimeVue);

const userStore = useUserStore(); 
if (!userStore.isAuthenticated) {
  router.push('/login');
}

app.mount('#app');
