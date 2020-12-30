<template>
  <div class="container">
    <div id="svg">
      <svg width="100%" height="100%" viewBox="0 0 400 200">
        <rect
          x="0"
          y="0"
          width="200"
          height="100"
          stroke="currentColor"
          transform="rotate(10) skewX(10) translate(50 10)"
          fill="transparent"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'SvgTransform',
  /* mounted () {
    console.log('xxx')
    let path = document.querySelector('.logo')
    let length = path.getTotalLength()
    console.log(length);
  }, */
  setup () {

  }
}
</script>

<style lang='scss' scoped>
#svg {
  color: red;
  width: 400px;
  height: 400px;
}
</style>