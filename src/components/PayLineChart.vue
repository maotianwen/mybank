<template>
  <div class="chart-wrapper">
    <ECharts :options="lineOptions" ref="mychart" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';

export default {
  name: 'PayLineChart',
  components: {
    ECharts
  },
  data() {
    return {
      lineOptions: {
        series: [
          {
            type: 'line',
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              1
            ],
            lineStyle: {
              color: '#0066b3'
            },
            itemStyle: {
              color: '#0066b3'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1.2,
                colorStops: [
                  {
                    offset: 0,
                    color: '#0066b3' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#ffffff' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ],
        xAxis: [
          {
            data: [],
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisPointer: {
              type: 'line',
              axis: 'auto',
              z: 2,
              lineStyle: {
                color: '#ffffff',
                width: 1
              }
            }
          }
        ],
        yAxis: [
          {
            show: false,
            min: value => value.min,
            max: value => value.max + 300,
            splitLine: { show: false },
            axisLabel: {
              interval: 0,
              showMinLabel: false,
              formatter(value) {
                return value.toFixed(3);
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
  padding: 0 28px;
}
</style>
