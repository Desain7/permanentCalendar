import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css';
import { Icon, ConfigProvider } from 'vant';


const app = createApp(App);
app.use(Icon);
app.use(router)
app.use(store)
app.use(ConfigProvider)

app.mount('#app')


