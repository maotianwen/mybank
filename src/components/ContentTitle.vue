<template>
  <div class="title">
    <span>{{ title }}</span>
    <svg
      width="22px"
      height="35px"
      viewBox="0 0 22 35"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      v-show="needArrow"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          id="set-color"
          transform="translate(-40.000000, -24.000000)"
          fill="#000000"
        >
          <g transform="translate(30.000000, 19.000000)">
            <g>
              <path
                d="M31.8164062,9.59326172 L31.8164062,6.19628906 C31.8164062,5.90185547 31.4780273,5.73925781 31.2495117,5.91943359 L11.4389648,21.3925781 C10.7182617,21.9550781 10.7182617,23.0405273 11.4389648,23.6030273 L31.2495117,39.0761719 C31.4824219,39.2563477 31.8164062,39.09375 31.8164062,38.7993164 L31.8164062,35.4023438 C31.8164062,35.1870117 31.715332,34.9804688 31.5483398,34.8486328 L15.7280273,22.5 L31.5483398,10.1469727 C31.715332,10.0151367 31.8164062,9.80859375 31.8164062,9.59326172 Z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ContentTitle',
  props: {
    title: {
      type: String
    },
    needArrow: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  padding-left: 34px;
  margin-bottom: 20px;
  span {
    font-size: 34px;
    display: inline-block;
    font-family: PingFangSC;
  }
  svg {
    width: 16px;
    transform: rotateY(-180deg);
    margin: 0 34px 0 auto;
  }
}
</style>
