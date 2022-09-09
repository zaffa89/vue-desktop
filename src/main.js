import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios';

//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/sphere/';
axios.defaults.timeout = 5000;

const axiosRequest = axios.create();

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from '@/routes';

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createMemoryHistory(),
    routes, // short for `routes: routes`
  })
  


const ElectronApp = createApp(App);

ElectronApp.config.globalProperties.$axios = { ...axiosRequest }
ElectronApp.use(router)

ElectronApp.mount('#app')