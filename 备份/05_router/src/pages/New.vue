<template>
    <div class="news">
        <h2>新闻</h2>
        <p>这里是新闻内容的导航区。</p>
        <ul>
            <li v-for=" news in newsList " :key="news.id">
                <button @click="showNewsDetail(news)"> 查看新闻</button>
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}`"> {{ news.title }}</RouterLink> -->

                <!-- 第二种写法 -->
                 <!-- <RouterLink
                 :to="{
                    path:'/news/detail',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                 }">
                    {{ news.title }}
                 </RouterLink> -->

                 <!-- 使用params传递参数 -->
                <!-- <RouterLink to='/news/detail/哈哈/你好/嘻嘻'>
                    {{ news.title }}
                </RouterLink> -->

               <!-- <button  @click="showNewsDetail">查看新闻</button> -->

                <!-- 另一种写法 -->
                <RouterLink 
                :to="{
                   // path:'/news/detail',
                   name:'newsDetail',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content,
                    }
                }">
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
    <div class="news-content">
        // 这里是新闻内容的展示区。
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup name="New">
import { reactive } from 'vue';
import { RouterView,RouterLink,useRouter } from 'vue-router';
const newsList = reactive([
    {id:'001',title:'很好的美白产品',content:'这是一款很好的美白产品，效果显著。'},
    {id:'002',title:'如何一夜暴富',content:'这是一篇关于学it的文章'},
    {id:'003',title:'如何快速入门vue3',content:'这是一篇关于学vue3的文章'},
    {id:'004',title:'如何快速入门ts',content:'这是一篇关于学ts的文章'},

])
const router = useRouter()

interface NewsInter {
    id: string;
    title: string;
    content: string;
}
//方法
function showNewsDetail(news:NewsInter) {
    router.push({
        name:'newsDetail',
        query:{
            id:news.id,
            title:news.title,
            content:news.content,
        }
    })
}
</script>

<style scoped >
    .new {
        background-color: #f0f0f0;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    .new h2 {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .new ul {
        list-style-type: none;
        padding: 0;
    }
    .new li {
        background-color: #fff;
        padding: 10px;
        margin: 5px 0;
        border-radius: 5px;
        box-shadow: 0 0 5px;
    }
    

</style>