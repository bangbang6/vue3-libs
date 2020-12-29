import Test from './components/Test/index'
import Test2 from './components/Test2/index'
import SimpleSvgTest from './components/SimpleSvg/index'
import _Icon from './components/Icon/index'
//!这个函数也是vue插件 这个插件里面调用另外两个插件 同时注册两个组件

export let TestComponent = Test
export let SimpleTest = Test2
export let SimpleSvg = SimpleSvgTest
export let Icon = _Icon
export default function index(vue){
  vue.use(Test)
  vue.use(SimpleTest)

}