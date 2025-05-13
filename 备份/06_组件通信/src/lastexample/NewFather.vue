<template>
    <div class="newfather">
        <h3>父组件</h3>
        <h4>银子：{{ money }}万元</h4>
        <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
        
        <Child ref="c1"/>
        
    </div>
</template>
    
<script lang="ts" setup name="NewFather">
    import {reactive, ref,provide} from "vue"
import Child from "./Child.vue";
    
    //数据
    let money = ref(100)
    let car = reactive({
        brand:'奔驰',
        price:100
    })
  
    function updateMoney(value:number){
        money.value -= value 
    }

    //向后代提供数据
    provide('qian',{money,updateMoney})
    provide('che',car)
    
    
</script>
    
<style scoped>
.newfather{
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