<template>
  <div>
    <div>{{test}}</div>
    <div>{{count}}</div>
    <button @click="add">加</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TestComponent',
  setup () {
    let test = 'bang'

    let count = ref(1)
    const add = () => {
      console.log(1);
      count.value++
    }
    return {
      test, count, add
    }
  }
}
</script>

<style lang='scss'>
div {
  color: red;
}
</style>