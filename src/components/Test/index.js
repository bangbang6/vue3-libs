import {random,a,b} from 'sam-test-data'
/* const jsonMes = require( '../package.json') */
import Test from './Test.vue'
console.log(random(10),a,b);
/* console.log(jsonMes); */
/* Vue.component(testVue.name,testVue) */
let fun = ()=>{
  console.log('test babel');
}
fun()



export default function(Vue){
  Vue.component(Test.name,Test)
}