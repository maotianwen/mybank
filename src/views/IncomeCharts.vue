<template>
  <div class="income-charts">
    <div class="header">
      <div class="date-select">2020年11月</div>
      <div
        class="pay"
        :class="curIndex === 0 && 'active'"
        @click="curIndex = 0"
      >
        <p>支出</p>
        <p>
          ¥
          <span class="nums">1628.19</span>
        </p>
      </div>
      <div
        class="income"
        :class="curIndex === 1 && 'active'"
        @click="curIndex = 1"
      >
        <p>收入</p>
        <p>
          ¥
          <span class="nums">5042.92</span>
        </p>
      </div>
      <div class="slide" :class="curIndex ? 'at-income' : 'at-pay'"></div>
    </div>
    <div class="line chart">
      <p>每日支出</p>
      <PayLineChart />
    </div>
    <div class="bar chart">
      <p>支出分类</p>
      <CategoryBarChart />
    </div>
  </div>
</template>

<script>
import PayLineChart from '@/components/PayLineChart';
import CategoryBarChart from '@/components/CategoryBarChart';

export default {
  name: 'IncomeCharts',
  components: {
    PayLineChart,
    CategoryBarChart
  },
  data() {
    return {
      curIndex: 0
    };
  }
};
</script>

<style lang="less" scoped>
.income-charts {
  padding: 88px 0px 116px 0px;
  .header {
    display: flex;
    align-items: center;
    position: relative;
    border-top: 1px solid #979797;
    border-bottom: 1px solid #979797;
    margin-bottom: 64px;
    height: 126px;
    .date-select {
      position: absolute;
      background-color: #e1e1e1;
      padding: 4px 22px 4px 16px;
      font-weight: 600;
      font-size: 24px;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 14px solid #ffffff;
      border-radius: 37px;
    }
    .pay,
    .income {
      flex: 50%;
      font-size: 28px;
      font-weight: 600;
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #9b9b9b;
      &.active {
        color: #000;
      }
    }
    .slide {
      width: 260px;
      height: 6px;
      background: #0066b3;
      border-radius: 3px;
      position: absolute;
      bottom: -3px;
      transition: all 0.5s;
      &.at-pay {
        transform: translateX(46px);
      }
      &.at-income {
        transform: translateX(446px);
      }
    }
  }
  .chart {
    text-align: left;
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 54px;
    padding: 0 24px;
    p {
      margin-bottom: 30px;
    }
  }
}
</style>
