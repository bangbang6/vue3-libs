<template>
  <div>
    <svg width="200" height="200">
      <circle cx="0" cy="0" r="50" fill="red">
        <set attributeName="cx" to="50" begin="1s" attributeType="XML" />.
        <animate
          attributeName="fill"
          attributeType="XML"
          dur="5s"
          from="red"
          to="blue"
          fill="freeze"
        />
        <animateTransform
          attributeName="transfrom"
          type="scale"
          attributeType="XML"
          fill="freeze"
          begin="0"
          from="1"
          to="2"
          dur="5s"
        />
      </circle>
    </svg>
    <svg width="200" height="200">
      <circle cx="10" cy="10" r="10" fill="red">
        <animateMotion path="M 10 10 L 180 10 L 180 180 L 10 180 Z " rotate="0" dur="5s" />
      </circle>
    </svg>
    <svg width="200" height="200">
      <circle cx="10" cy="10" r="10">
        <animateMotion
          path="M 10 10 L 180 10 L 180 180 L 10 180 Z "
          rotate="0"
          dur="5s"
          fill="freeze"
          id="forward"
          begin="0;back.end+0.5s"
        />
        <animateMotion
          path="M 10 10 L 10 180 L 180 180 L 180 10 Z "
          rotate="0"
          dur="5s"
          fill="freeze"
          id="back"
          begin="forward.end + 0.5s"
        />
        <animate
          attributeName="fill"
          from="red"
          to="blue"
          dur="5s"
          fill="freeze"
          attributeType="XML"
          begin="0;blue-to-red.end+0.2s"
          id="red-to-blue"
        />
        <animate
          attributeName="fill"
          from="blue"
          to="red"
          dur="5s"
          fill="freeze"
          attributeType="XML"
          begin="red-to-blue.end+0.2s"
          id="blue-to-end"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>