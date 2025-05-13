<template>
   
<div class="app">
    <h2> VUE路由测试</h2>
    <!-- 导航区 -->
<div class="navigate"> 
    <RouterLink replace to="/home"  active-class="dianliang"> 首页 </RouterLink>
    <RouterLink replace to="/news"  active-class="dianliang"> 新闻 </RouterLink>
    <RouterLink replace to="/about" active-class="dianliang"> 关于 </RouterLink>
</div>
<div class="content">
     <!-- 展示区 -->
      此处是根据用户选择，展示内容的区域
        <RouterView></RouterView>

</div>
</div>
  
</template>

<script  lang="ts" setup name="App">
import { RouterView ,RouterLink} from 'vue-router';

</script>


<style scoped>
.app{
    background-color: #f0f0f0;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;

}
.navigate{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    a{
        text-decoration: none;
        color: #000;
        font-size: 20px;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 5px;
    }
}

.content{
    background-color: #fff;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    font-size: 20px;
    color: #000;
}
.navigate a:hover{
    background-color: #f0f0f0;
    color: #000;
    box-shadow: 0 0 10px;
}
.navigate a:active{
    background-color: #93ce44;
    color: #fff;
    box-shadow: 0 0 10px;
}
.navigate a:visited{
    background-color: #000;
    color: #fff;
    box-shadow: 0 0 10px;
}
.navigate a.dianliang{
    background-color: #93ce44;
    color: #fff;
    box-shadow: 0 0 10px;
}


</style>