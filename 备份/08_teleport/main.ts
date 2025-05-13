//引入createApp用于创建应用
import { createApp } from 'vue';

//引入App组件
import App from '@/APP.vue';

const app = createApp(App); //创建应用

app.mount('#app'); //挂载应用到id为app的DOM元素上