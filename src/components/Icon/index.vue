<template>
  <svg v-bind="$attrs" fill="currentColor">
    <use :href="iconName" />
  </svg>
</template>

<script>
import { computed } from 'vue'
export default {
  //!$attrs 表示没有在props接受的属性v-bind传; 用v-on 传给子组件 v-on=$listeners 表示父组件监听的事件留给子组件去触发
  //给svg 加cueentColor 而不是在引入的svg元素加 这样也是也可的 一般是在元素加 现在因为元素用IconFont是不带fill属性的 所以在svg这里加
  name: 'Icon',
  props: {
    name: String,
    prefix: {
      type: String,
      default: 'icon'
    }
  },
  setup (ctx) {
    let iconName = computed(() => `#${ctx.prefix}${ctx.name}`)
    return { iconName }
  }
}
</script>

<style>
</style>