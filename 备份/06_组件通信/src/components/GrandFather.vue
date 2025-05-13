<template>
    <div class="grandfather">
        <h3>祖组件</h3>
        <h4> a: {{ a }}</h4>
        <h4> b: {{ b }}</h4>
        <h4> c: {{ c }}</h4>
        <h4> d: {{ d }}</h4>
        <Father :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
    </div>
</template>
    
<script lang="ts" setup name="GrandFather">
    import {ref} from "vue"
    import Father from "./Father.vue";
     //数据
     let a = ref(1)
    let b = ref(2)
    let c = ref(3)
    let d = ref(4)

    //定义一个方法，将其传过去
    function updateA(value:number){
        a.value += value
    }
    
    
</script>
    
<style scoped>
.grandfather{
    background-color: #86d3d6;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: #000;
}  

</style>