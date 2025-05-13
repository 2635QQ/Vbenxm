//创建一个路由器，并暴露出去
//第一步：引入createRouter
import { createRouter,createWebHistory} from 'vue-router'

//引入路由组件
import Home from '@/pages/Home.vue'
import New from '@/pages/New.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

//第二步：创建路由器
const router = createRouter({
    history:createWebHistory(),//路由起的工作模式
    //配置路由
    routes:[   //一个个的路由规则
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/news',
            component:New,
            children:[
                {
                    name:'newsDetail',
                    path:'detail',
                    component:Detail,
                    // 第一种写法，适合params传参
                    // props:true, //开启props传参

                    // 第二种写法；可以自己决定将什么传给props；适合query传参
                    props(route){
                        console.log('!!!!!',route)
                        return route.query
                    },
                }
            ]
        },
        {
            path:'/about',
            component: About,
        },
        {
            path:'/',
            redirect:'/home' //重定向到home
        }
    ]

})

export default router
//第三步：暴露出去


