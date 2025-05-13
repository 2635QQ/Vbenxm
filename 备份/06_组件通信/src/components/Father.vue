<template>
    <div class="father">
        <h3>父组件</h3>
        <h3> 房产： {{ house }}</h3>
        <button @click="changeToy"> 修改child1的玩具</button>
        <button @click="changeCom"> 修改child2的电脑</button>
        <button @click="getAllChild($refs)"> 获取所有的子组件实例对象</button>
        
        <child1 ref="c1"/>
        <br>
        <child2 ref="c2"/>
    </div>
</template>
    
<script lang="ts" setup name="Father">
    import {ref} from "vue"
    import child1 from "./child1.vue";
    import child2 from "./child2.vue"
import type { RefSymbol } from "@vue/reactivity";
    
    //数据
    let house = ref(2)
    let c1 = ref()
    let c2 = ref()
   
    //方法
    function changeToy(){
        console.log(c1.value)
        c1.value.toy = '扑克牌'

    }
    function changeCom(){
        c2.value.computer = '华为'
    }

    function getAllChild(refs:{[key:string]:any}){
        for(let key in refs){
            console.log(refs[key])
            refs[key].book += 3
        }
    }
    //向外部提供数据
    defineExpose({house})
    
</script>
    
<style scoped>
.father{
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