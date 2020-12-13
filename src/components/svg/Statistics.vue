<template>
  <div class="statistic-btn" :class="isActive && 'active'">
    <!-- <svg
      viewBox="0 0 44 44"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="调整"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="收支详情" transform="translate(-534.000000, -1595.000000)">
          <g id="底部" transform="translate(0.000000, 1576.000000)">
            <g id="矩形">
              <use
                fill="black"
                fill-opacity="1"
                filter="url(#filter-2)"
                xlink:href="#path-1"
              ></use>
              <use
                fill="#FFFFFF"
                fill-rule="evenodd"
                xlink:href="#path-1"
              ></use>
            </g>
            <g
              id="统计"
              transform="translate(530.000000, 19.000000)"
              fill-rule="nonzero"
            >
              <g transform="translate(4.000000, 0.000000)">
                <path
                  d="M4,40 L44,40 L44,44 L0,44 L0,0 L4,0 L4,40 Z M7.99999999,21 L12,21 L12,37 L7.99999999,37 L7.99999999,21 Z M17,15 L21,15 L21,37 L17,37 L17,15 Z M26,21 L30,21 L30,37 L26,37 L26,21 Z M35,13 L39,13 L39,37 L35,37 L35,13 Z"
                  id="base"
                ></path>
                <polygon
                  id="path"
                  fill="#EF3535"
                  points="11.11 13.664 8.88999998 10.336 19 3.59599999 27.825 9.48000002 35.671 2.50500001 38.329 5.49499998 28.175 14.52 19 8.404 11.11 13.664"
                ></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg> -->
    <svg
      viewBox="0 0 44 44"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="调整"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="收支详情" transform="translate(-534.000000, -1595.000000)">
          <g id="底部" transform="translate(0.000000, 1576.000000)">
            <g id="矩形">
              <use
                fill="black"
                fill-opacity="1"
                filter="url(#filter-2)"
                xlink:href="#path-1"
              ></use>
              <use
                fill="#FFFFFF"
                fill-rule="evenodd"
                xlink:href="#path-1"
              ></use>
            </g>
            <g
              id="统计"
              transform="translate(530.000000, 19.000000)"
              fill-rule="nonzero"
            >
              <g transform="translate(4.000000, 0.000000)">
                <path
                  d="M4,40 L44,40 L44,44 L0,44 L0,0 L4,0 L4,40 Z M7.99999999,21 L12,21 L12,37 L7.99999999,37 L7.99999999,21 Z M17,15 L21,15 L21,37 L17,37 L17,15 Z M26,21 L30,21 L30,37 L26,37 L26,21 Z M35,13 L39,13 L39,37 L35,37 L35,13 Z"
                  id="base"
                ></path>
                <polygon
                  id="path"
                  stroke="#EF3535"
                  stroke-width="4"
                  points="9 11.2002453 17.5094508 5.55045 26.6844508 11.5642533 36.332209 3 36.8384508 3.69524522 26.6844508 12.7202452 17.5094508 6.60424524 9.61945076 11.8642452"
                ></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <p>统计</p>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
.statistic-btn {
  svg {
    height: 44px;
    #base {
      fill: #000000;
    }
    #path {
      display: none;
    }
  }
  &.active {
    svg {
      #base {
        fill: @my-blue;
      }
      #path {
        display: block;
        stroke-dasharray: 4000;
        animation: paint 0.6s linear forwards;
      }
    }
    p {
      color: @my-blue;
    }
  }
}
@keyframes paint {
  0% {
    stroke-dashoffset: 4000;
    fill: transparent;
  }
  50% {
    stroke-dashoffset: 3914;
  }
  100% {
    stroke-dashoffset: 3914;
    fill: @my-red;
  }
}
</style>
