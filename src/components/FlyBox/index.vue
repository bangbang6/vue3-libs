<template>
  <svg width="400" height="400">
    <defs>
      <mask id="mask">
        <radialGradient fx="100%" fy="50%" cx="50%" cy="50%" r="50%" id="radial">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <circle cx="0" cy="0" r="200" fill="url(#radial)">
          <animateMotion
            dur="3s"
            path="M 5 5 L 395 5 L 395 395 L 5 395 Z"
            repeatCount="indefinite"
            rotate="0"
          />
        </circle>
      </mask>
    </defs>
    <path d="M 5 5 L 395 5 L 395 395 L 5 395 Z" stroke="#235fa7" stroke-width="1" fill="white" />
    <path
      d="M 5 5 L 395 5 L 395 395 L 5 395 Z"
      stroke="#4fd2dd"
      stroke-width="3"
      mask="url(#mask)"
      fill="white"
    />
  </svg>
</template>

<script>
export default {
  name: 'FlyBox'
}
</script>

<style>
</style>