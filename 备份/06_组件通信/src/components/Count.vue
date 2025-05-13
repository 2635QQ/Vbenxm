<template>
    <div class="count">
        <h2>这是计数组件,当前求和为： {{ sum }} ,放大倍数后 ：{{ bigSum }}</h2>
        <select v-model.number="n"> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button @click="add"> 加 </button>
        <button @click="minus"> 减 </button>
    </div>
    <div class="child1">
        <h3>子组件1</h3>
        <button @click="emitter.emit('send-toy',toy)"> 玩具送给弟弟</button>

    </div>
</template>
    
<script lang="ts" setup name="Count">
    import {ref} from 'vue'
    import {useCountStore} from '@/store/count'
    import { storeToRefs } from 'pinia'
import emitter from '@/utils/emitter'
//玩具数据
let toy = ref('奥特曼玩具大礼包')


    const countStore = useCountStore()

    //数据;直接将其countStore中的数据拿出来，并变为响应式的数据；之前是使用torefs，但是这里使用storeToRefs;
    const { sum ,bigSum} = storeToRefs(countStore)
   
    let n= ref(1) //选择的数字
    
    //方法

     function add(){
        //第一种修改方式
        //countStore.sum += n.value

        // //第二种修改方式
        // countStore.$patch({
        //     sum:999,  
        // })
        countStore.increment(n.value) 
     }
     function minus(){

        countStore.sum -= n.value
     }

    
</script>
    
<style scoped>
        .count {
            background-color: #7bc0e9;
            box-shadow: 0 0 10px;
            border-radius: 10px;
            padding: 20px;
        }
        select {
            background-color: #fff;
            color: #000;
            font-size: 20px;
            padding: 10px 20px;
            border-radius: 5px;
            box-shadow: 0 0 5px;
            margin-right: 10px;
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