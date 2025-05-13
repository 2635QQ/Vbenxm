<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changeBrand">修改汽车的品牌</button>
        <button @click="changePrice"> 修改汽车的价格</button>
        <button @click="changeCar">修改整个汽车</button>
        <h2>当前求和为 ：{{ sum }}</h2>
        <button @click="sumchange"> 点我求和,sum + 1</button>
   
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref } from 'vue'
//数据
let car = reactive({brand:'奔驰', price :100})
let sum = ref(0)


//方法
function changeBrand(){
    car.brand = '宝马'
}
function changePrice(){
    car.price +=10
}
function changeCar(){
    //使用Object.assign()方法修改对象的属性
    //Object.assign(目标对象,源对象1,源对象2,...)
    Object.assign(car,{brand:'法拉利',price:200}) 
    

function sumchange(){
sum.value +=1
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
