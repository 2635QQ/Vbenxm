<template>
    <div class="smallchild">
        <h3>孙组件</h3>
        <h4>这是从祖父组件获得的钱： {{ money }}万元</h4>
        <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
        <button @click="updateMoney(3)">花爷爷的钱</button>
    </div>
</template>
    
<script lang="ts" setup name="SmallChild">
    import {ref,inject} from "vue"
    
    //数据
    let {money,updateMoney} = inject('qian',{money:0,updateMoney:(x:number)=>{}})
    let car = inject ('che',{brand:'未知',price:0})
    
</script>
    
<style scoped>
.smallchild{
    background-color: #d686cb;
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