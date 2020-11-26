<template>
  <div class="storage regular-margin">
    <div class="pink rec"></div>
    <div class="orange rec"></div>
    <svg-icon :iconClass="'bankcard'" :className="'bankcard-base'" />
    <p class="title">查看账户总览</p>
    <p class="sub-title">实时查询资产</p>
    <!-- <div>
      ¥
      <CountNum :startNum="0" :endNum="112.09" :step="4.2" :decimalPlace="2" />
    </div> -->
  </div>
</template>

<script>
// import CountNum from '@/components/CountNum';
export default {
  name: 'AccountView',
  components: {
    // CountNum
  }
};
</script>

<style lang="less" scoped>
.storage {
  height: 220px;
  background: linear-gradient(90deg, #eaeaf5 0%, #ebe6d3 100%);
  border-radius: 24px;
  padding: 54px 36px 0 36px;
  text-align: left;
  color: #ffffff;
  box-shadow: @shadow;
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;
  p {
    color: #000;
    &.title {
      font-size: 34px;
      margin-bottom: 14px;
    }
    &.sub-title {
      font-size: 26px;
      color: @my-purple;
    }
  }
  .bankcard-base {
    position: absolute;
    transform: scale(3.4);
    right: 98px;
    bottom: 57px;
  }
}

.rec {
  position: absolute;
  width: 116px;
  height: 70px;
  border-radius: 16px;
}
.pink {
  background-color: #ffd3d7;
  bottom: 56px;
  right: 54px;
  animation: pinkRotate 0.4s linear forwards;
}
.orange {
  background-color: #fb560a;
  bottom: 56px;
  right: 60px;
  animation: orangeRotate 0.4s linear forwards;
}

@keyframes orangeRotate {
  100% {
    transform: translateY(-15px) rotateZ(25deg);
  }
}

@keyframes pinkRotate {
  100% {
    transform: translateY(-18px) rotateZ(45deg);
  }
}
</style>
