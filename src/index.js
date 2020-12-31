

import SimpleSvgTest from './components/SimpleSvg/index'
import _Icon from './components/Icon/index'
import _SvgTransform from './components/SvgTransform/index'
import SmlSvg from './components/SmlSvg/index'
import Loading from './components/Loading/index'
//!这个函数也是vue插件 这个插件里面调用另外两个插件 同时注册两个组件


 export default function index(vue){
  vue.use(SimpleSvgTest)
  vue.use(_Icon)
  vue.use(_SvgTransform)
  vue.use(SmlSvg)
  vue.use(Loading)
} 