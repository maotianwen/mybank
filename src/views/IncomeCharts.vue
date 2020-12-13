<template>
  <div class="income-charts">
    <div class="header">收入</div>
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
    return {};
  }
};
</script>

<style lang="less" scoped>
.income-charts {
  padding: 88px 24px 116px 24px;
  .chart {
    text-align: left;
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 54px;
    p {
      margin-bottom: 30px;
    }
  }
}
</style>
