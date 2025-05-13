<template>
    <div class="person">
    
       姓：<input type="text" v-model ="firstName"><br>
       名：<input type="text" v-model ="lastName"><br>
       全名： <span> {{ fullName }} </span>
       <button @click="changeFullName">将全名修改为 li-si </button>

    </div>
</template>

<script lang="ts" setup name="Person">
import { computed, ref,} from 'vue'
let firstName = ref('zhang')
let lastName = ref('san')
//这样定义的fullName是一个计算属性，依赖于firstName和lastName的值,并且是只读的
// let fullName = computed(()=>{
//     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// })

//这样定义的fullName是一个计算属性，依赖于firstName和lastName的值，并且是可读可写的
// 也就是可以通过fullName来修改firstName和lastName的值
let fullName = computed({
    get(){
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val){
        let names = val.split('-')
        firstName.value = names[0]
        lastName.value = names[1]
        console.log('现在的fullName',val)
    },
})

function changeFullName (){
    fullName.value = 'li-si'
    
}



</script>

<style scoped>
.person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    button{
        margin: 10px;
        padding: 5px 10px;
        background-color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    li{
        list-style: none;
        padding: 5px 0;
        font-size:20px;
    }
}
</style>
