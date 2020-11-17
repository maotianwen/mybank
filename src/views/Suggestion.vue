<template>
  <div class="suggestion">
    <Header title="意见反馈" :needBack="true" />
    <div class="item-wrapper">
      <a href="https://github.com/maotianwen">
        <svg-icon iconClass="github" />
        My Github
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suggestion',
  components: {},
  mounted() {
    this.$store.commit('hideLoading');
  }
};
</script>

<style lang="less" scoped>
.suggestion {
  padding-top: 124px;
  svg {
    transform: scale(1.2);
    margin-right: 22px;
  }

  .item-wrapper {
    text-align: left;
    padding-left: 34px;
    display: flex;
    align-items: center;
    font-size: 36px;
    margin-bottom: 16px;
  }
}
</style>
