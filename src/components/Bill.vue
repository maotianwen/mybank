<template>
  <div class="swiper-wrapper">
    <div
      class="list-item"
      :style="styleObj"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <svg-icon :iconClass="dataObj.icon" />
      <div class="right-part">
        <div class="info">
          <p class="title">{{ dataObj.title }}</p>
          <p class="type">{{ dataObj.type }}</p>
          <p class="time">{{ dataObj.time }}</p>
        </div>
        <span>-{{ dataObj.cost.toFixed(2) }}</span>
      </div>
      <div class="delete" @click="deleteMyself" ref="trashBin">
        <svg-icon :iconClass="'trash-bin'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bill',
  data() {
    return {
      startX: '', //保存touch时的X坐标
      moveDistance: 0,
      moveState: 0,
      duration: 0,
      deleteBtnWidth: 0 //删除按钮的宽度，单位px
    };
  },
  mounted() {
    this.deleteBtnWidth = this.$refs.trashBin.offsetWidth;
  },
  computed: {
    styleObj() {
      return {
        transform: `translateX(${this.moveDistance}px)`
      };
    }
  },
  methods: {
    touchStart(e) {
      this.startX = e.targetTouches[0].clientX;
    },
    touchMove(e) {
      let move = e.targetTouches[0].clientX - this.startX;
      let maxDistance = -1 * this.deleteBtnWidth;
      if (this.moveDistance === 0 && move > 0) {
        return;
      }
      if (this.moveDistance < maxDistance) {
        return;
      }
      if (this.moveDistance > 0) {
        return;
      }
      this.moveDistance = move * 0.8;
    },
    touchEnd() {
      let maxDistance = -1 * this.deleteBtnWidth;
      if (this.moveDistance < maxDistance / 2) {
        this.moveState = 2;
        this.moveDistance = maxDistance;
      } else {
        this.moveDistance = 0;
      }
    },
    deleteMyself() {
      this.$emit('delete');
    }
  },
  props: {
    dataObj: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.swiper-wrapper {
  overflow: hidden;
}
.list-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 146px;
  position: relative;
  transition: all 0.3s ease;
  svg {
    transform: scale(1.6);
    margin-left: 35px;
  }
  .right-part {
    display: flex;
    align-items: center;
    flex: auto;
    height: 146px;
    margin-left: 44px;
    padding-right: 56px;
    border-bottom: 1px solid #979797;
  }
  .info {
    text-align: left;
    .title {
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      margin-bottom: 8px;
    }
    .type,
    .time {
      font-size: 22px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #8e8e93;
    }
  }
  span {
    font-size: 36px;
    font-family: DINAlternate-Bold, DINAlternate;
    margin-left: auto;
  }
  .delete {
    background-color: @my-red;
    height: 146px;
    width: 108px;
    position: absolute;
    right: -108px;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
    }
  }
}
</style>
