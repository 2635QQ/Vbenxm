<template>
    <button @click="isShow = true">展示弹窗</button>
    <br>
    <teleport to="body">
        <div class="model" v-show="isShow">
        <h2>我是弹窗的标题</h2>
        <h3>我是弹窗的内容</h3>
        <button @click="isShow = false">关闭弹窗</button>
    </div>
    </teleport>
    
</template>
    
<script lang="ts" setup name="Model">
import {ref} from 'vue'
let isShow = ref(false)
    
    
</script>
    
<style scoped>
.model{ 
    background-color: #d2d686;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    font-size: 20px;
    color: #000;
    text-align: center;
    position:fixed;
    left:50%;
    top:20px;
    margin-left:-100px;


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