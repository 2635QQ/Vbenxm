import {reactive, ref} from 'vue'
import axios from 'axios'   

 export default function (){
    let dogList = reactive([
        'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_2012.jpg'
    
    ])
    
    //第二种写法
    async function getDog(){
        try{
            let res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(res.data.message)
        } catch (error){
            alert(error)
        }
    }
//向外部提供东西
    return {
        dogList,
        getDog
    }
}
