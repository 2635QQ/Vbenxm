<template>
    <div class="sfather">
        <h3>父组件</h3>
    <div class="content">
        <Category title="热门旅游城市">
            <ul>
                <li v-for="g in citys" :key="g.id">{{ g.name }}</li>
            </ul>
        </Category>

        <Category title="今日新闻新报">
            <img :src="imgUrl" alt="">
        </Category>

        <Category title="爆火影视推荐">
            <video :src="VideoUrl" controls></video>
        </Category>

    </div>
        
    </div>
</template>
    
<script lang="ts" setup name="Sfather">
import { reactive,ref } from 'vue';
import Category from './Category.vue';

let citys = reactive([
    {id:'001',name:'西安'},
    {id:'002',name:'青海'},
    {id:'003',name:'哈尔滨'},
    {id:'004',name:'厦门'},
])
let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let VideoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
    
    
</script>
    
<style scoped>
.sfather{
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
.content{
    display: flex;
    justify-content: space-evenly;

}
img,video{
    width: 100%;
}

</style>