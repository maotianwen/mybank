<template>
  <div class="input-wrapper">
    <svg-icon :iconClass="'search'" />
    <input type="text" @focus="jumpToSearch" readonly="true" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {};
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
  input {
    display: inline-block;
    width: 466px;
    height: 52px;
    margin-left: 23px;
    border-radius: 6px;
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
