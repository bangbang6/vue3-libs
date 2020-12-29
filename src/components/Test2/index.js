import {random,a,b} from 'sam-test-data'
/* const jsonMes = require( '../package.json') */
import SimpleTest from './Test2.vue'
console.log(random(10),a,b);
/* console.log(jsonMes); */
/* Vue.component(testVue.name,testVue) */
let fun = ()=>{
  console.log('test babel');
}
fun()



export default function(Vue){
  Vue.component(SimpleTest.name,SimpleTest)
}