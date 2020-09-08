<template>
  <div>
    <LineChart />
  </div>
</template>

<script>
import LineChart from '@/components/LineChart';

export default {
  name: 'Gold',
  components: {
    LineChart
  },
  created() {
    this.getFundDetail('000001');
  },
  mounted() {
    // this.getFundDetail('000001');
  },
  data() {
    return {
      goldData: {
        name: '',
        manager: '',
        netWorth: 0,
        type: '',
        lastWeekGrowth: 0,
        lastMonthGrowth: 0,
        lastThreeMonthsGrowth: 0,
        lastSixMonthsGrowth: 0,
        lastYearGrowth: 0,
        sevenDaysYearIncome: 0,
        dayGrowth: 0
      }
    };
  },
  methods: {
    async getFundDetail(code) {
      const res = await this.$api.getFundDetail(code);
      console.log(res);
      this.goldData = res.data.data;
    }
    //   this.asd = lineData.data.data;
    //   this.valueArr = lineData.data.data.netWorthData
    //     .slice(-143)
    //     .map(item => item[2]);
    // }
  }
};
</script>

<style lang="less" scoped></style>
