import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import './assets/reset.css';
import router from './router/index';
import store from './store/index';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import { Toast } from 'vant';
import './mock/index.js';
const app=createApp(App);
app.use(router).use(store).use(Toast);
app.mount('#app')
