<template>
    <div class="child">
        <h3>孙组件</h3>
        <h4>a:{{ a }} 和 b:{{ b }}</h4>
        <h4>c:{{ c }} 和 d:{{ d }}</h4>
        <h4>x:{{ x }} 和 y:{{ y }}</h4>
    <button @click="updateA(5)"> 点击可以更新祖先的数据a </button>
    </div>
</template>
    
<script lang="ts" setup name="Child">
    import {ref} from "vue"
    defineProps(['a','b','c','d','x','y','updateA'])

    
</script>
    
<style scoped>
.child{
    background-color: #d686aa;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: #000;
}  

</style>