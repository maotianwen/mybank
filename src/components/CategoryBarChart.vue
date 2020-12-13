<template>
  <div class="chart-wrapper">
    <ECharts :options="barOptions" ref="mychart" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';

export default {
  name: 'CategoryBarChart',
  components: {
    ECharts
  },
  data() {
    return {
      barOptions: {
        xAxis: {
          type: 'category',
          data: [
            '家具家电',
            '粮油副食',
            '美容洗护',
            '母婴用品',
            '进口食品',
            '食品饮料',
            '家庭清洁'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [310, 290, 840, 580, 620, 110, 130],
            type: 'bar',
            itemStyle: {
              color: '#0066b3'
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
.chart-wrapper {
  box-shadow: @shadow;
  border-radius: 24px;
  padding: 0 28px;
}
</style>
