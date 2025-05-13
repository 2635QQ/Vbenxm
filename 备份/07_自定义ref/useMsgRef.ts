import {customRef} from 'vue'
export default function (initValue:string,delay:number){
    let timer:number
    //使用Vue提供的customRef定义响应式数据
//track(跟踪)、 trigger(触发)
//let initValue = '天气很好'
let msg1 = customRef((track,trigger)=>{
    return {
        //get调用时间----msg1被读取时候
        get(){
            track() //告诉Vue数据msg1很重要，你要对msg进行持续关注，一旦msg变化就去更新
            return initValue
        },
        //set调用时间----msg1被修改时候
        set(value){
            clearTimeout(timer)
            timer = setTimeout(()=>{
                initValue = value
                trigger() //通知Vue一下数据msg1变化了
            },delay);
        }
    }
})
return {msg1}
}
