//引入createApp用于创建应用
import { createApp } from 'vue';

//引入App组件
import App from '@/App.vue';
//引入pinia
import {createPinia} from 'pinia'

//引入emitter
import emitter from './utils/emitter';

const app = createApp(App); //创建应用
//第二步：创建pinia
const pinia = createPinia()
//第三步：安装pinia
app.use(pinia)

app.mount('#app'); //挂载应用到id为app的DOM元素上