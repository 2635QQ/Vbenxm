<template>
    <div class="home">
        <h2>首页</h2>
        <p>欢迎来到首页！</p>
        <ul>
            <li>功能1</li>
            <li>功能2</li>
            <li>功能3</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
//push 是路由跳转，并且这里设置了时间，等待3000秒后跳转到/news
onMounted(()=>{
    setTimeout(()=>{
        router.push('/news')
    },3000)
})

</script>

<style scoped >
    .home {
        background-color: #f0f0f0;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    .home h2 {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .home ul {
        list-style-type: none;
        padding: 0;
    }
    .home li {
        background-color: #fff;
        padding: 10px;
        margin: 5px 0;
        border-radius: 5px;
        box-shadow: 0 0 5px;
    }

</style>