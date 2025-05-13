<template>
    <div class="outer">

        <h2>这是APP父亲组件</h2>
        <img src="https://www.atguigu.com/images/index_new/logo.png">
        <br>
        <Model/>
    </div>
</template>
    
<script lang="ts" setup name="App">
import Model from './Model.vue';

    
    
</script>
    
<style scoped>
    .outer{
        background-color: #96d686;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: #000;
        width: 400px;
        height: 500px;
    }
    img{
        width: 200;
    }
</style>