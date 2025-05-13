<template>
    <div class="zuo">
        <h3>父组件</h3>
    <div class="content">
        <Game>
            <template v-slot="params">
            
            <ul>
            <li v-for="c in params.youxi" :key="c.id">{{ c.name }}</li>
            </ul>

            </template>
        </Game>

        <Game>
            <template v-slot="params">
                <ol>    
            <li v-for="c in params.youxi" :key="c.id">{{ c.name }}</li>
                </ol>
            </template>

        </Game>
        <Game>
            <template v-slot="{youxi}">
                <h2 v-for="y in youxi" :key="y.id">{{ y.name }}</h2>
            </template>
        </Game>

    </div>
        
    </div>
</template>
    
<script lang="ts" setup name="Zuo">
import { reactive,ref } from 'vue';
import Game from './Game.vue';


    
</script>
    
<style scoped>
.zuo{
    background-color: #bbd686;
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
.content{
    display: flex;
    justify-content: space-evenly;

}

</style>