<template>
  <div>
    <Header title="收支详情" :needBack="true" />
    <div class="footer">
      <Bill />
      <Statistics />
    </div>
  </div>
</template>

<script>
import Bill from '@/components/svg/Bill';
import Statistics from '@/components/svg/Statistics';

export default {
  name: 'IncomeRecord',
  components: {
    Bill,
    Statistics
  }
};
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  height: 114px;
  background-color: #ffffff;
  position: fixed;
  z-index: 6;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -2px 8px 2px rgba(0, 0, 0, 0.5);
  align-items: center;
  div {
    flex: 0 0 50%;
    height: 114px;
    position: relative;
  }
  p {
    position: absolute;
    bottom: 10px;
    font-size: 26px;
    color: black;
    left: 50%;
    transform: translateX(-50%);
  }
  svg {
    display: block;
    margin: 20px auto;
  }
}
</style>
