<template>
  <div :style="{width:'100%',height:'100%'}">
    <svg width="100%" height="100%" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <circle
        fill="white"
        cx="25"
        cy="25"
        r="22"
        stroke-width="3"
        :stroke="outColor"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25;360 25 25"
          :dur="`${dur}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="innerColor"
          :dur="`${dur*2}s`"
          repeatCount="indefinite"
          attributeType="XML"
        />
      </circle>
      <circle
        fill="white"
        cx="25"
        cy="25"
        r="12"
        stroke-width="3"
        :stroke="innerColor"
        stroke-dasharray="19"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25;0 25 25"
          :dur="`${dur}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#02bcfe;#3be6cb;#02bcfe"
          :dur="`${dur*2}s`"
          repeatCount="indefinite"
          attributeType="XML"
        />
      </circle>
    </svg>
    <div class="content" style="height:20px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'Loading',
  props: {
    outColor: {
      type: String,
      default: '#3be6cb'
    },
    innerColor: {
      type: String,
      default: '#02bcfe'
    },
    dur: {
      type: Number,
      default: 2
    },
  },
  setup (ctx) {
    const outValues = computed(() => `${ctx.outColor};${ctx.innerColor};${ctx.outColor}`)
    const innerValues = computed(() => `${ctx.innerColor};${ctx.outColor};${ctx.innerColor}`)
    return {
      outValues, innerValues
    }
  }
}
</script>

<style>
</style>