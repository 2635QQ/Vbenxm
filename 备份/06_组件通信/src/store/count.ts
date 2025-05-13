import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
    //actions 里面放置的是一个一个方法，用于响应组件中的动作
    actions:{
        increment(value :number ){
            console.log('increa被调用了',value)
            //修改数据 (this是当前的store)
            if(this.sum <10 )
            {
                this.sum += value
            }
        }
    },
    //真正存储数据的地方
    state(){
        return{
            sum:2
        }
    },
    getters:{
        bigSum(state){
            return state.sum *10 ;
        }
    }
})