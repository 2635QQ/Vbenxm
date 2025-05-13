<template>
    <div class="game">
        <h3>旅游城市</h3>
        <slot :youxi="citys"></slot>
        <!-- <ul>
            <li v-for="c in citys" :key="c.id">{{ c.name }}</li>
        </ul> -->
    </div>
</template>
    
<script lang="ts" setup name="Game">
import { reactive,ref } from 'vue';

let citys = reactive([
    {id:'001',name:'西安'},
    {id:'002',name:'青海'},
    {id:'003',name:'哈尔滨'},
    {id:'004',name:'厦门'},
])

    
</script>
    
<style scoped>
.game{
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
h3{
    background-color: #fff;
    text-align: center;
    font-size: 23px;
    font-weight: 800;
}

</style>