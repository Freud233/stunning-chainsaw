import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/src/assets/style/tailwind.css'
import '/src/assets/style/base.css'
createApp(App).use(router).mount('#app');
