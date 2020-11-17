<template>
  <div class="chartWrapper">
    <ECharts :options="lineOptions" v-if="lineData.length" ref="mychart" />
    <div class="time-wrapper">
      <span class="min-time">{{ minTime }}</span>
      <span class="max-time">{{ maxTime }}</span>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';

export default {
  name: 'LineChart',
  components: {
    ECharts
  },
  mounted() {},
  watch: {
    lineData() {
      this.lineOptions.xAxis[0].data = this.lineData.map(item => item[0]);
      this.lineOptions.series[0].data = this.lineData.map(item => item[1]);
      const len = this.lineData.length;
      this.minTime = this.lineOptions.xAxis[0].data[0].replaceAll('-', '/');
      this.maxTime = this.lineOptions.xAxis[0].data[len - 1].replaceAll(
        '-',
        '/'
      );
    }
  },
  data() {
    return {
      lineOptions: {
        tooltip: {
          trigger: 'axis',
          borderColor: '#0066B3',
          borderWidth: 1,
          textStyle: {
            color: '#000000'
          },
          backgroundColor: '#ffffff',
          extraCssText: 'box-shadow: 0px 0px 4px 1px #86a2ef;',
          padding: [4, 8],
          show: true,
          position: [0, 0],
          formatter: params => {
            let data = params[0].value;
            let time = params[0].axisValue;
            return `<div style="text-align:left;letter-spacing:1px;">日期:<span style="color:#9b9b9b;font-weight:bold" class="nums">${time}</span>&nbsp;&nbsp;&nbsp;单位净值:<span style="color:#0066b3;font-weight:bold" class="nums">${data}</span><div/>`;
          }
        },
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
            min: value => value.min - 0.044,
            max: value => value.max + 0.035,
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
        grid: [
          {
            left: '12%',
            bottom: '2%',
            tooltip: {
              show: true
            }
          }
        ],
        series: [
          {
            type: 'line',
            showSymbol: false,
            smooth: true,
            lineStyle: {
              color: '#fff'
            },
            itemStyle: {
              color: '#0066b3',
              shadowColor: '#0066B3',
              shadowBlur: 6
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
            },
            data: []
          }
        ]
      },
      minTime: '',
      maxTime: ''
    };
  },
  props: {
    lineData: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="less" scoped>
.chartWrapper {
  width: 100%;
  transform: scale(0.93);
  span {
    font-size: 24px;
  }
  .time-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }
}
</style>
