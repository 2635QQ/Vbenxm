import axios from 'axios'
import {defineStore} from 'pinia'
import { nanoid } from 'nanoid'

// export const useTalkStore = defineStore('talk',{
//     actions:{
//         async getAtalk(){
//         //发请求
//         let {data} = await axios.get('http://api.uomg.com/api/rand.qinghua?')
//         console.log(data)
//         //把请求回来的字符串，包装成一个对象
//         let obj = {id:nanoid(),title:data.content}
//         //放到数组中
//         this.talkList.unshift(obj)

//         }
//     },
//     //真正存储数据的地方
//     state(){
//         return{
//         talkList:JSON.parse(localStorage.getItem('talkList') as string ) ||[]
//         }
//     }
// })
import { reactive } from 'vue'
export const useTalkStore = defineStore ('talk',()=>{
    //
    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string ) ||[]
    )

         async function getAtalk(){
         //发请求
         let {data} = await axios.get('http://api.uomg.com/api/rand.qinghua?')
         console.log(data)
         //把请求回来的字符串，包装成一个对象
         let obj = {id:nanoid(),title:data.content}
         //放到数组中
         talkList.unshift(obj)
         }
         return {talkList,getAtalk}
    
     //真正存储数据的地方
})