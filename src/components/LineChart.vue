<template>
  <div class="chartWrapper">
    <ECharts :options="lineOptions" v-if="lineData.length" ref="mychart" />
    <span class="min-time">{{ minTime }}</span>
    <span class="max-time">{{ maxTime }}</span>
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';

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
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          }
        ],

        title: [
          {
            left: 'center',
            text: 'Gradient along the y axis'
          }
        ],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [
          {
            data: [],
            interval: 0,
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              show: false
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
              formatter(value) {
                return value.toFixed(3);
              }
            }
          }
        ],
        grid: [
          {
            left: 40,
            bottom: '20%',
            width: 375
          }
        ],
        series: [
          {
            type: 'line',
            showSymbol: false,
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
  transform: scale(0.8);
  span {
    font-size: 24px;
    position: absolute;
    bottom: 40px;
  }
  .min-time {
    left: 24px;
  }
  .max-time {
    right: -34px;
  }
}
</style>
