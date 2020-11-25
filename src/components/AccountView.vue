<template>
  <div class="storage regular-margin">
    <p>账户总览</p>
    <p>总资产</p>
    <div>
      ¥
      <CountNum :startNum="0" :endNum="112.09" :step="4.2" :decimalPlace="2" />
    </div>
  </div>
</template>

<script>
import CountNum from '@/components/CountNum';
export default {
  name: 'AccountView',
  components: {
    CountNum
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
    font-size: 34px;
    color: #000;
  }
}
</style>
