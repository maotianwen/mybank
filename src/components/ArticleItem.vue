<template>
  <div class="article">
    <div class="text">
      <svg-icon iconClass="arrow" />
      <p class="title">{{ articleInfo.title }}</p>
    </div>
    <p class="hot-nums">
      <svg-icon iconClass="fire" />
      {{ articleInfo.hotNums }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    articleInfo: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>
.article {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 24px;
  .text {
    display: flex;
    align-items: center;
    p {
      margin-left: 28px;
      // font-weight: bold;
    }
  }
  p {
    font-size: 26px;
    letter-spacing: 2px;
    &.hot-nums {
      position: absolute;
      right: 0;
      display: flex;
      font-size: 28px;
      color: @my-red;
      font-family: DINAlternate-Bold, DINAlternate;
      align-items: center;
      svg {
        transform: scale(0.9);
        position: relative;
        top: -4px;
      }
      // top: 50%;
      // transform: translateY(-50%);
    }
  }
}
@keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.heartBeat {
  animation: heartBeat 1.4s ease-in-out infinite;
}
</style>
