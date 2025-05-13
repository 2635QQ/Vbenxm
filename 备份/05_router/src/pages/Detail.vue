<template>
    <ul class="news-list">
        <li>编号：学习{{ id }}</li>
        <li>标题：嘻嘻嘻 {{ title }}</li>
        <li>内容: {{ content }} </li>
       
    </ul>
</template>
<script lang="ts" setup name="Detail">
import { defineProps } from 'vue';

defineProps(['id','title','content'])

</script>

<style scoped >
    .news-list {
        background-color: #f0f0f0;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    .news-list li {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
    }
   
</style>