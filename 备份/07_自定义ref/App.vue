<template>
    <div class="app">
       <h2>{{ msg }},这是自定义调用的：{{ msg1 }}</h2>
         <input type="text" v-model="msg1">
    </div>
</template>

<script lang="ts" setup name="App">
import {ref,customRef} from 'vue'
import useMsgRef from './useMsgRef';

//使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新

let msg = ref('你好')

//使用useMsgRef来定义一个响应式数据且有延迟效果
let {msg1} = useMsgRef('北京你好',2000)

</script>

<style scoped>
.app{
    background-color: #86d68a;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    font-size: 20px;
    color: #000;
    
}
button {
         background-color: #fff;
         color: #000;
         font-size: 20px;
         padding: 10px 20px;
         border-radius: 5px;
         box-shadow: 0 0 5px;
         margin-right: 10px;
}

</style>