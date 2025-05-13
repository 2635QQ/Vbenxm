<template>
    <div class="person">
        <h2> 当前值为： {{ sum }}</h2>
       <button @click="add"> 点击 sum + 1 </button>
       <hr>
       <img v-for="(dog,index) in dogList" :src="dog" :key="index">
       <br>
       <button @click="getDog"> 在获取一张小狗图片</button>


    </div>
</template>

<script lang="ts" setup name="Person">
import useSum from '@/hooks/useSum'
import useDog  from '@/hooks/useDog';

const {sum,add} = useSum()
const {dogList,getDog} = useDog()



</script>


<style scoped>
.person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    button{
        margin: 10px;
        padding: 5px 10px;
        background-color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    li{
        list-style: none;
        padding: 5px 0;
        font-size:20px;
    }
    img{
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
}
</style>
