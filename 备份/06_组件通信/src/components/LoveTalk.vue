<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句诗句</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
           
        </ul>
    </div>
    <div class="child2">
        <h3>子组件2</h3>
        <h4>哥哥给的玩具：{{ toy }}</h4>

    </div>
</template>
    
<script lang="ts" setup name="LoveTalk">
import { useTalkStore } from '@/store/LoveTalk' 
import { storeToRefs } from 'pinia'
import emitter from '@/utils/emitter'
import {ref,onUnmounted} from 'vue'

const talkStore = useTalkStore()
const {talkList} = storeToRefs(talkStore)
talkStore.$subscribe((mutate,state)=>{
    console.log('talkStore里面保存的数据发生了变化',mutate,state)
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
})
//数据
let toy = ref('')

    //获取诗句
  function getLoveTalk(){
    //发请求
        talkStore.getAtalk()
    }
    //给emitter绑定send-toy事件
    emitter.on('send-toy',(value:any)=>{
        console.log('send-toy',value)
     toy.value  = value 
    })

    //在接受数据方，加入数据解绑
    onUnmounted(()=>{
        emitter.off('send-toy')
    })
    
</script>
    
<style scoped>
    .talk {
        background-color: #bcd763;
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