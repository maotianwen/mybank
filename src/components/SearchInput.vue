<template>
  <div class="input-wrapper" @click="$router.push('search')">
    <svg-icon :iconClass="isTransparent ? 'white-search' : 'search'" />
    <input
      type="text"
      readonly="true"
      :class="isTransparent && 'transparent-input'"
    />
    <Marquee :list="marqueeList" :whiteFont="isTransparent" />
  </div>
</template>

<script>
import Marquee from '@/components/Marquee';

export default {
  name: 'SearchInput',
  components: {
    Marquee
  },
  data() {
    return {
      marqueeList: [
        '理财活动信息如何获取',
        '金融知识服务宣传月',
        '证券市场',
        '在我的板块进行意见反馈',
        '如何查看基金详情'
      ]
    };
  },
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    jumpToSearch() {
      this.$router.push('search');
    }
  }
};
</script>

<style lang="less" scoped>
.input-wrapper {
  display: inline-block;
  position: relative;
  line-height: 0;
  margin: 0 auto;
  input {
    display: inline-block;
    width: 526px;
    height: 52px;
    border-radius: 6px;
    padding-left: 54px;
    &::-webkit-input-placeholder {
      color: #999;
      font-size: 26px;
    }
    &.transparent-input {
      background-color: transparent;
      background-color: rgba(255, 255, 255, 0.25);
      width: 476px;
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
  }
  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
  }
}
</style>
