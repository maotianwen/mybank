<template>
  <div class="life-btn" :class="{ active: $store.state.menuIndex === 2 }">
    <svg
      viewBox="0 0 38 44"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="高保真"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="首页"
          transform="translate(-420.000000, -1382.000000)"
          fill-rule="nonzero"
        >
          <g id="底部" transform="translate(1.000000, 1361.000000)">
            <g id="生活" transform="translate(411.000000, 21.000000)">
              <g id="生活缴费" transform="translate(5.000000, 0.000000)">
                <path
                  d="M22,44 C11.9634483,44 3.79310345,35.8448276 3.79310345,25.8158621 C3.79310345,21.6206897 6.6910345,16.1434483 12.4110345,9.55862067 C16.5303448,4.80965517 20.5813793,1.24413794 20.7482759,1.1 L22,0 L23.2517241,1.1 C23.4186207,1.25172412 27.4772413,4.81724139 31.5889655,9.55862067 C37.3089655,16.1434483 40.2068966,21.6206897 40.2068966,25.8158621 C40.2068966,35.8448276 32.0365517,44 22,44 Z M22,5.07517239 C17.0537931,9.66482756 7.58620689,19.7165517 7.58620689,25.8158621 C7.58620689,33.7510345 14.0496552,40.2068966 22,40.2068966 C29.9503448,40.2068966 36.4137931,33.7510345 36.4137931,25.8158621 C36.4137931,19.7165517 26.9462069,9.67241378 22,5.07517239 Z"
                  id="water"
                ></path>
                <path
                  d="M19.4662069,32.7875862 C19.4510345,32.78 19.4434483,32.7724138 19.4282759,32.7648276 C20.1413793,30.102069 20.8544828,27.4317242 21.5675862,24.7462069 L15.4075862,24.7462069 C15.3924138,24.7310345 15.3772414,24.7082758 15.3620689,24.6931034 L24.7386207,13.9965517 L24.7841379,14.0193103 C24.0786207,16.6744827 23.3731034,19.3296552 22.66,22.0227586 L28.9110345,22.0227586 C25.7324138,25.6489655 22.5993104,29.2144827 19.4662069,32.7875862 L19.4662069,32.7875862 Z"
                  id="flash"
                  stroke="#ef3535"
                  stroke-width="0.5"
                  v-show="$store.state.menuIndex === 2"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <p>生活</p>
  </div>
</template>

<script>
export default {
  name: 'LifeButton'
};
</script>

<style lang="less" scoped>
.life-btn {
  svg {
    width: 38px;
    height: 44px;
    #water {
      fill: #000000;
    }
    #flash {
      stroke-dasharray: 4000;
    }
  }
  &.active {
    p {
      color: @my-blue;
    }
    svg {
      #water {
        fill: @my-blue;
      }
      #flash {
        animation: paint 0.6s linear forwards;
      }
    }
  }
}
@keyframes paint {
  0% {
    fill: transparent;
    stroke-dashoffset: 4000;
  }
  50% {
    stroke-dashoffset: 3940;
  }
  100% {
    stroke-dashoffset: 3940;
    fill: @my-red;
  }
}
</style>
