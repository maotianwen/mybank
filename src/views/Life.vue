<template>
  <div class="life">
    <div class="tool-bar">
      <div class="location"></div>
      <SearchInput :isTransparent="true" />
      <svg-icon iconClass="message" />
    </div>
    <div class="bg">
      <img src="../assets/city.png" alt="" />
    </div>
    <div class="main-menu"></div>
    <div class="ad"></div>
    <div class="hot-content"></div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput';

export default {
  name: 'Life',
  components: {
    SearchInput
  }
};
</script>

<style lang="less" scoped>
.life {
  .life-header {
    height: 294px;
  }
  .tool-bar {
    position: fixed;
  }
  .bg {
    img {
      width: 100%;
    }
  }
}
</style>
