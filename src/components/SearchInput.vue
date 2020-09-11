<template>
  <div class="input-wrapper">
    <svg-icon :iconClass="isTransparent ? 'white-search' : 'search'" />
    <input
      type="text"
      @focus="jumpToSearch"
      placeholder="搜索"
      readonly="true"
      :class="isTransparent && 'transparent-input'"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {};
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
  .white-svg {
    #oval {
      stroke: #fff;
    }
    #rect {
      fill: #fff;
    }
  }
  input {
    display: inline-block;
    width: 526px;
    height: 52px;
    margin-left: 23px;
    border-radius: 6px;
    padding-left: 54px;
    &::-webkit-input-placeholder {
      color: #999;
    }
    &.transparent-input {
      background-color: transparent;
      background-color: rgba(255, 255, 255, 0.25);
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
  }
  svg {
    position: absolute;
    left: 28px;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
  }
}
</style>
