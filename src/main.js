import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css';
// import 'font-awesome/css/font-awesome.min.css'
import { Icon, ConfigProvider } from 'vant';

// 引入函数组件样式
// import { Toast } from 'vant';
// import 'vant/es/toast/style';
const app = createApp(App);
app.use(Icon);
app.use(router)
app.use(store)
app.use(ConfigProvider)

app.mount('#app')


