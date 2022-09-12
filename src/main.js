import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

import './assets/css/tailwind.css'
import './assets/css/fonts.css'
import 'animate.css'

createApp(App).use(VueAxios, axios).use(router).mount('#app')
