<template>
  <div
    class="refresh"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    :style="styleObj"
  >
    <!-- <i :class="isLoading ? 'loading' : ''"></i> -->
    <div class="loading-wrapper">
      <AnimateLogo v-if="isLoading" />
      <p v-if="!isLoading && moveDistance > 50">松开刷新</p>
    </div>
    <div class="slot">
      <slot />
    </div>
  </div>
</template>

<script>
import AnimateLogo from '@/components/AnimateLogo.vue';

export default {
  name: 'Refresh',
  components: {
    AnimateLogo
  },
  data() {
    return {
      startY: '', //保存touch时的Y坐标
      moveDistance: 0,
      moveState: 0,
      duration: 0,
      isLoading: false
    };
  },
  computed: {
    styleObj() {
      return {
        transition: `${this.duration}ms`,
        transform: `translateY(${this.moveDistance}px)`
      };
    }
  },
  methods: {
    //三个事件在开始时都要判断isLoading的值，为true就退出，以免重复触发
    touchStart(e) {
      if (this.isLoading) {
        return false;
      }
      this.duration = 0;
      this.moveDistance = 0;
      this.startY = e.targetTouches[0].clientY; //起点y坐标
    },
    touchMove(e) {
      let scrollTop = document.body.scrollTop;
      if (scrollTop > 0) {
        return false;
      }
      if (this.isLoading) {
        return false;
      }
      let move = e.targetTouches[0].clientY - this.startY;
      if (move > 0) {
        e.preventDefault();
        this.moveDistance = Math.pow(move, 0.8);
        if (this.moveDistance > 50) {
          if (this.moveState === 1) {
            return false;
          }
          this.moveState = 1;
        } else {
          if (this.moveState === 0) {
            return false;
          }
          this.moveState = 0;
        }
      }
    },
    touchEnd() {
      if (this.isLoading) {
        return false;
      }
      this.duration = 300;
      if (this.moveDistance > 50) {
        this.moveState = 2;
        this.moveDistance = 50;
        this.isLoading = true;
        setTimeout(() => {
          this.moveDistance = 0;
          this.isLoading = false;
        }, 2000);
      } else {
        this.moveDistance = 0;
      }
    }
  },
  watch: {
    moveState(state) {
      if (state === 0 && this.duration === 300) {
        this.moveDistance = 0;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.refresh {
  height: 60px;
  margin-top: -100px;
  // i {
  //   width: 50px;
  //   height: 50px;
  //   background-image: url(../assets/loading.png);
  //   &.loading {
  //     animation: rotate 0.8s linear infinite;
  //   }
  // }
  .loading-wrapper {
    display: inline-block;
    // height: 50px;
    p {
      font-size: 16px;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
