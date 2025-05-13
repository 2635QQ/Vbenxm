<template>
    <div class="child">
        <h3>子组件</h3>
        
        <SmallChild />
        
    </div>
</template>
    
<script lang="ts" setup name="Child">
    import {ref} from "vue"
    
import type { RefSymbol } from "@vue/reactivity";
import SmallChild from "./SmallChild.vue";
    
    //数据
  
    
    
</script>
    
<style scoped>
.child{
    background-color: #86b5d6;
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