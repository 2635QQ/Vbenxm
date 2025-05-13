<template>
    <div class="child1">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>书籍：{{ book }} 本</h4>
        <button @click="minusHouse($parent)"> 让父组件的房产减少一套</button>
        
    </div>
</template>
    
<script lang="ts" setup name="Child1">
    import {ref} from "vue"
    
    //数据
    let toy = ref('玩具汽车')
    let book = ref(3)
    //把数据交给外部
    defineExpose({toy,book})
    //修改父亲的房产
    function minusHouse(parent:any){
        console.log(parent)
        parent.house -=1
    }
    
   

    
</script>
    
<style scoped>
.child1{
    background-color: #86cfd6;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: #000;
}  
button{
    background-color: #fff;
            color: #000;
            font-size: 20px;
            padding: 10px 20px;
            border-radius: 5px;
            box-shadow: 0 0 5px;
            margin-right: 10px;
}


</style>