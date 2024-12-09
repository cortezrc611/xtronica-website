import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // Import the router
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// Create the app instance
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
// Register the router plugin before mounting the app
app.use(router);

// Mount the app to the DOM
app.mount('#app');

