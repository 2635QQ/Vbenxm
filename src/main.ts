//引入createApp用于创建应用
import { createApp } from 'vue';
import  Hello from "./Hello.vue"

//引入App组件
import App from '@/APP.vue';
//创建应用
const app = createApp(App); 

app.component('Hello',Hello)

app.mount('#app'); //挂载应用到id为app的DOM元素上