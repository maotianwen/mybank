<template>
  <div class="article">
    <svg-icon iconClass="tag" className="tag" />
    <span class="index">{{ articleInfo.index }}</span>
    <p class="title">{{ articleInfo.title }}</p>
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
  margin-bottom: 40px;
  .tag {
    position: absolute;
    top: 2px;
    left: 0;
  }
  .index {
    padding-top: 2px;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    margin-left: 17px;
    z-index: 1;
  }
  p {
    font-size: 26px;
    letter-spacing: 2px;
    &.title {
      margin-left: 28px;
    }
    &.hot-nums {
      right: 25px;
      position: absolute;
      display: flex;
      font-size: 28px;
      color: @my-red;
      font-family: DINAlternate-Bold, DINAlternate;
      align-items: center;
      svg {
        transform: scale(0.9);
        position: relative;
        top: -3px;
      }
      // top: 50%;
      // transform: translateY(-50%);
    }
  }
}
</style>
