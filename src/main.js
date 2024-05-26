import { createApp } from 'vue'
import App from './App.vue'
import Store from './modules/store.js'
import Router from './router.js';

const app = createApp(App);
app.use(Store);
app.use(Router);
app.mount('#app')
