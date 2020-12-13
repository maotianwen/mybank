<template>
  <div class="income">
    <Header title="收支详情" :needBack="true" />
    <BillList v-show="activeIndex === 0" />
    <IncomeCharts v-if="activeIndex === 1" />
    <div class="footer" v-if="init">
      <Bill :isActive="activeIndex === 0" @click.native="activeIndex = 0" />
      <Statistics
        :isActive="activeIndex === 1"
        @click.native="activeIndex = 1"
      />
    </div>
  </div>
</template>

<script>
import Bill from '@/components/svg/Bill';
import Statistics from '@/components/svg/Statistics';
import BillList from './BillList';
import IncomeCharts from './IncomeCharts';

export default {
  name: 'IncomeRecord',
  components: {
    Bill,
    Statistics,
    BillList,
    IncomeCharts
  },
  data() {
    return {
      activeIndex: 0,
      init: false
    };
  },
  mounted() {
    this.$store.commit('hideLoading');
    setTimeout(() => (this.init = true), 500);
  }
};
</script>

<style lang="less" scoped>
.income {
  padding-top: 87px;
}
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
    margin: 24px auto;
  }
}
</style>
