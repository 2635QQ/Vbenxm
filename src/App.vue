<template>
    <div class="app">
<h2>我是App组件</h2>
<Suspense>
    <template v-slot:default>
        <Child/>
    </template>
    <template v-slot:fallback>
        <h2>加载中;;;</h2>
    </template>
</Suspense> 
    </div>
</template>
    
<script lang="ts" setup name="App">
import Child from './Child.vue';
import { Suspense } from 'vue';

 
    
</script>
    
<style scoped>
    .app{
        background-color: #96d686;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: #000;
        width: 400px;
        height: 500px;
    }
    
</style>