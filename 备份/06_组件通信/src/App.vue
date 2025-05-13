<template>
<!-- <Count/>
<br>
<LoveTalk/>
<br> -->
<!-- 
<GrandFather/> -->
<!-- 介绍父子之间的通信
<br>
<Father/>
<br>
<Child/> -->

<!-- 下面是关于父亲和孙子之间的直接通信 ，不需要借助第二个人，
<NewFather/> -->
 
<!-- 下面是关于默认插槽的讲解
<Sfather/> -->

<!-- 这个是作用域插槽的讲解 -->
<Zuo/>

</template>


<script lang="ts" setup name="App">
import Count from './components/Count.vue'
import LoveTalk from './components/LoveTalk.vue';
import Father from './components/Father.vue';
import GrandFather from './components/GrandFather.vue';
import Child from './components/Child.vue';
import child1 from './components/child1.vue';
import child2 from './components/child2.vue';
import NewFather from './lastexample/NewFather.vue';
import Sfather from './slot/Sfather.vue';
import Zuo from './slotzuoyongyu/Zuo.vue';



</script>

<style scoped>

</style>