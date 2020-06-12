<template>
  <svg
    t="1591860192919"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="8542"
    width="50"
    height="50"
  >
    <path
      d="M913.9 539.8H749.1s-12-0.3-16.9 2c-3.3 1.5-12.7 9.3-12.7 9.3L516.1 753.5c-3.3 3.3-8.8 3.3-12.1 0L288.1 538.1c-3.3-3.3-3.3-8.8 0-12.1l216.2-215.9c3.4-3.3 8.8-3.3 12.1 0l190.2 190.4s7.8 9.1 17.1 11.5c8.7 2.2 21.1-8.9 21.1-8.9l87.9-89.2-256.1-254.7c-54.2-54.1-113.8-49.2-136.8-45.5C234.1 147.5 85 323.8 85 534c0 236.4 196 425.8 425.3 425.8 226.1 0 414.9-181.7 425.5-410.1 0.1-2.7 0.8-4.7-4.6-8.6-5.6-4-17.3-1.3-17.3-1.3zM644.3 152.3l224.4 223 62.8-60.2s5.4-9.5 7.4-18.9c1-4.8-8.3-12.8-8.3-12.8L793.4 146.3c-129.4-129.4-273-67.2-273-67.2s59.9 0.4 123.9 73.2z"
      p-id="8543"
      stroke="#015bab"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'AnimateLogo'
};
</script>

<style lang="less" scoped>
@keyframes dash {
  0% {
    fill: #ffffff;
  }

  50% {
    stroke-dashoffset: 0;
  }

  100% {
    fill: #015bab;
  }
}
svg {
  margin-top: 30px;
}
path {
  stroke-dasharray: 5110;
  stroke-dashoffset: 5110;
  stroke-width: 6;
  animation: dash 2.6s linear infinite;
}
</style>
