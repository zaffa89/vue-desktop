import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios';

//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/sphere/';
axios.defaults.timeout = 5000;

const axiosRequest = axios.create();

import { createPinia } from 'pinia'
const pinia = createPinia()


const ElectronApp = createApp(App);

ElectronApp.config.globalProperties.$axios = { ...axiosRequest }
ElectronApp.use(pinia);

ElectronApp.mount('#app')