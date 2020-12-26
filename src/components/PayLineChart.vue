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
              34,
              32,
              57,
              93,
              59,
              68,
              80,
              40,
              92,
              46,
              94,
              96,
              40,
              80,
              82,
              72,
              91,
              24,
              90,
              30,
              32,
              66,
              72,
              88,
              84,
              28,
              98,
              48,
              56,
              60
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
              show: true
            },
            axisLabel: {
              show: true
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
            min: value => value.min - 18,
            max: value => value.max + 18,
            splitLine: { show: false },
            axisLabel: {
              interval: 0,
              showMinLabel: false,
              formatter(value) {
                return value.toFixed(3);
              }
            }
          }
        ],
        tooltip: {
          trigger: 'axis',
          position: (point, params, dom, rect, size) => {
            return [point[0] - size.contentSize[0] / 2, '5%'];
          },
          padding: [4, 8],
          backgroundColor: '#0066b3',
          formatter: params => {
            let data = params[0].value;
            let time = params[0].axisValue.split('-');
            const month = time[0],
              day = time[1];
            return `<div style="text-align:center"><p>${month}月${day}日</p><p class="nums">¥${data}.00</p></div>`;
          }
        }
      }
    };
  },
  mounted() {
    this.generateMonth();
  },
  methods: {
    generateMonth() {
      for (let i = 1; i <= 30; i++) {
        const day = `11-${i}`;
        this.lineOptions.xAxis[0].data.push(day);
      }
    }
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
