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
          data: ['家具家电', '粮油副食', '美容洗护', '母婴用品', '教育培训'],
          axisLabel: {
            fontSize: 9
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          show: false
        },
        series: [
          {
            data: [310, 290, 840, 580, 620],
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              formatter: '¥{c}',
              fontFamily: 'DINAlternate-Bold, DINAlternate',
              fontSize: 14,
              color: '#0066b3'
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 2.4,
                colorStops: [
                  {
                    offset: 0,
                    color: '#0066b3' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#ffffff' // 100% 处的颜色
                  }
                ]
              }
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
  // padding-left: 42px;
}
</style>
