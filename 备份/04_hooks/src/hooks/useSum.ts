import {reactive, ref} from 'vue'
import axios from 'axios'   

let sum = ref(0)


export default function(){
    function add(){
        sum.value += 1
    }
    //向外部提供东西
    return {sum, add}
}