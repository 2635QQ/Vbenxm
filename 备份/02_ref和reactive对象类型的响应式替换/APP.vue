<template>
    <div class="app">
    <Person/>
    </div>
</template>

<script  lang="ts">
import Person  from './components/Person.vue';
export default{
    name:'App', //组件名称
    components:{Person},//注册组件
}
</script>


<style>
.app{
    background-color: #f0f0f0;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    

}

</style>