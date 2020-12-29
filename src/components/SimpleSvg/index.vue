<template>
  <svg width="0" height="0">
    <defs>
      <symbol id="apple" viewBox="0,0,100,100">
        <circle r="5" cx="10" cy="10" fill="currentColor" />
        <circle r="5" cx="10" cy="30" fill="currentColor" />
        <circle r="5" cx="10" cy="50" fill="currentColor" />
        <line stroke="currentColor" x1="30" y1="10" x2="90" y2="10" stroke-width="8" />
        <line stroke="currentColor" x1="30" y1="30" x2="90" y2="30" stroke-width="8" />
        <line stroke="currentColor" x1="30" y1="50" x2="90" y2="50" stroke-width="8" />
      </symbol>
      <symbol id="player" viewBox="0,0,100,100">
        <polyline points=" 20 10, 80 50,20,90" fill="currentColor" />
      </symbol>
      <symbol id="left" viewBox="0,0,100,100">
        <polyline points=" 20 10, 80 50,20,90" stroke="currentColor" fill="transparent" />
      </symbol>
    </defs>
  </svg>
</template>

<script>
export default {
  //svg组件库
  name: "SimpleSvg"
}
</script>

<style>
</style>