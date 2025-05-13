<template>
    <div class="child">
<h2>我是child组件</h2>
<h2>当前求和为：{{ sum }}</h2>
        
    </div>
</template>
    
<script lang="ts" setup name="Child">
import axios from 'axios';
import {ref} from 'vue'
let sum = ref(0)
// let {data:{content}} = await axios.get(' https://api.uomg.com/api/rand.qinghua?format=json')
// console.log(content)


</script>
    
<style scoped>
    .child{
        background-color: #9386d6;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: #000;
        
    }
    
</style>