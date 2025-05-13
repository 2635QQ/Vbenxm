//引入createApp用于创建应用
import { createApp } from 'vue';
//引入App.vue组件
import App from './APP.vue';
//引入路由器
import router from './router';


//createApp(App).mount('#app'); //创建应用并挂载到id为app的DOM元素上

const app = createApp(App); //创建应用

app.use(router); //使用路由器
app.mount('#app'); //挂载应用到id为app的DOM元素上