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
      <symbol id="circleProcess" viewBox="0,0,100,100">
        <circle cx="50" cy="50" r="45" stroke-width="2" fill="none" stroke="#d1d3d7" />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          stroke-width="2"
          class="circle"
          fill="none"
        />
      </symbol>
      <symbol id="logo" viewBox="0 0 1024 1024">
        <path
          id="google"
          d="M680.97024 343.06048A238.26432 238.26432 0 0 0 512 273.05984c-131.93216 0-238.92992 106.97728-238.92992 238.92992S380.06784 750.94016 512 750.94016c120.29952 0 219.5968-89.05728 236.19584-204.81024H512v-68.27008h307.2v34.12992a313.1392 313.1392 0 0 1-1.9968 34.14016C800.2048 699.74016 670.12608 819.21024 512 819.21024c-169.66656 0-307.2-137.53344-307.2-307.22048 0-169.64608 137.53344-307.2 307.2-307.2 84.82816 0 161.62816 34.39616 217.23136 89.99936l-48.26112 48.27136z"
          p-id="2141"
        />
      </symbol>
    </defs>
  </svg>
</template>
<script>
import { onMounted } from 'vue'
export default {
  //svg组件库
  name: "SimpleSvg",
  mounted () {
    let path = document.querySelector('#google')
    console.log(path.getTotalLength())
  },



}
</script>

<style lang='scss' scoped>
@keyframes circleProcess {
  from {
    stroke-dasharray: 0 283;
  }
  to {
    stroke-dasharray: 283 0;
  }
}

.circle {
  animation: circleProcess 5s linear;
}
@keyframes logoProcess {
  0% {
    fill: white;
    stroke: #333;
    stroke-width: 5;
    stroke-dasharray: 3682;
    stroke-dashoffset: 3682;
  }
  50% {
    fill: white;
    stroke: #333;
    stroke-width: 5;
    stroke-dasharray: 3682;
    stroke-dashoffset: 0;
  }
  75% {
    fill: red;
    stroke: white;
    stroke-width: 0;
    stroke-dasharray: 3682;
    stroke-dashoffset: 0;
  }
  100% {
    fill: blue;
    stroke-width: 0;
    stroke: white;
    stroke-dasharray: 3682;
    stroke-dashoffset: 0;
  }
}
#google {
  animation: logoProcess 10s linear forwards;
}
</style>
