<template>
  <div class="home-btn" :class="{ active: $store.state.menuIndex === 0 }">
    <svg
      viewBox="0 0 44 42"
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
        <g id="首页" transform="translate(-111.000000, -1381.000000)">
          <g id="底部" transform="translate(1.000000, 1361.000000)">
            <g id="首页" transform="translate(108.000000, 20.000000)">
              <g id="home-icon" transform="translate(2.000000, 0.000000)">
                <circle
                  v-show="menuIndex === 0"
                  id="oval"
                  stroke="#EF3535"
                  stroke-width="3"
                  cx="22"
                  cy="23"
                  r="9"
                ></circle>
                <g id="home" fill-rule="nonzero">
                  <path
                    d="M33.5107544,42 L10.4892456,42 C6.95351904,42 4.07583046,39.1968109 4.07583046,35.7526196 L4.07583046,18.1776765 L1.96421596,18.1776765 C1.11465943,18.1776765 0.36331753,17.646697 0.0981380355,16.8621868 C-0.167041459,16.0776765 0.117780961,15.2118451 0.800372623,14.723918 L20.8361567,0.373120729 C21.5285698,-0.124373576 22.4714302,-0.124373576 23.1638433,0.373120729 L43.1996274,14.723918 C43.882219,15.2118451 44.1670415,16.0776765 43.901862,16.8621868 C43.6366825,17.646697 42.8853406,18.1776765 42.035784,18.1776765 L39.9241695,18.1776765 L39.9241695,35.7526196 C39.9241695,39.1968109 37.046481,42 33.5107544,42 Z M7.31200244,14.8052392 C7.73432533,15.1544419 8.00441556,15.6806378 8.00441556,16.2642369 L8.00441556,35.7526196 C8.00441556,37.0872437 9.11915158,38.1731207 10.4892456,38.1731207 L33.5156651,38.1731207 C34.8857591,38.1731207 36.0004952,37.0872437 36.0004952,35.7526196 L36.0004952,16.2642369 C36.0004952,15.6806378 36.2705854,15.1592255 36.6929083,14.8052392 L22,4.28610478 L7.31200244,14.8052392 Z"
                    id="形状"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <p>首页</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeButton',
  methods: {},
  computed: {
    ...mapState(['menuIndex'])
  }
};
</script>

<style lang="less" scoped>
.home-btn {
  svg {
    width: 44px;
    height: 42px;
    #home {
      fill: black;
    }
  }
  &.active {
    p {
      color: @my-blue;
    }
    svg {
      #home {
        fill: @my-blue;
      }
    }
  }
}

@keyframes paint {
  0% {
    stroke-dashoffset: 4000;
  }
  100% {
    stroke-dashoffset: 3942;
  }
}

#oval {
  animation: paint 0.4s linear forwards;
  stroke-dasharray: 4000;
}
</style>
