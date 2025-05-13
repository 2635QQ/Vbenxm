<template>
    <div class="child2">
        <h3>子组件2</h3>
        <h3>电脑：{{ computer }}</h3>
        <h3>书籍：{{ book }} </h3>
    </div>
</template>
    
<script lang="ts" setup name="Child2">
    import {ref} from "vue"

    //数据
    let computer = ref('联想')
    let book = ref(5)
    
     //把数据交给外部
     defineExpose({computer,book})
   
    
</script>
    
<style scoped>
.child2{
    background-color: #d686c1;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: #000;
}  


</style>