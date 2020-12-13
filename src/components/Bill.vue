<template>
  <div class="list-item">
    <svg-icon :iconClass="dataObj.icon" />
    <div class="right-part">
      <div class="info">
        <p class="title">{{ dataObj.title }}</p>
        <p class="type">{{ dataObj.type }}</p>
        <p class="time">{{ dataObj.time }}</p>
      </div>
      <span>-{{ dataObj.cost.toFixed(2) }}</span>
    </div>
    <div class="delete" @click="deleteMyself">
      <svg-icon :iconClass="'trash-bin'" />
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
      isLoading: false
    };
  },
  computed: {
    styleObj() {
      return {
        transition: `${this.duration}ms`,
        transform: `translateX(${this.moveDistance}px)`
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
      this.startX = e.targetTouches[0].clientX; //起点x坐标
    },
    touchMove(e) {
      if (this.isLoading) {
        return false;
      }
      let move = e.targetTouches[0].clientX - this.startX;
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
    },
    deleteMyself() {
      this.$emit('delete');
    }
  },
  watch: {
    moveState(state) {
      if (state === 0 && this.duration === 300) {
        this.moveDistance = 0;
      }
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
.list-item {
  display: flex;
  align-items: center;
  height: 146px;
  position: relative;
  overflow: hidden;
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
      font-size: 18px;
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
