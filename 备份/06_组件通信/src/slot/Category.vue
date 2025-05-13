<template>
    <div class="category">
        <h2>{{title}}</h2>
      
        <slot>默认内容</slot>
        <!-- <slot name="s1"></slot> -->
        <!-- <slot name="s2"></slot> -->
        
    </div>
</template>
    
<script lang="ts" setup name="Category">
    defineProps(['title'])
    
</script>
    
<style scoped>
    .category{
    background-color: #86d68a;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    font-size: 20px;
    color: #000;
    width:200px;
    height:300px;
    
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
h2{
    background-color: #fff;
    text-align: center;
    font-size: 23px;
    font-weight: 800;
}
</style>