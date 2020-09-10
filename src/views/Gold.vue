<template>
  <div>
    <Back iconColor="#000000" />
    <div class="time-slide">
      <div class="modal"></div>
      <span
        v-for="item in timeIndexArr"
        :key="item.index"
        @click="changeTimeIndex(item.index)"
      >
        {{ item.text }}
      </span>
    </div>
    <LineChart :lineData="lineData" :timeInterval="timeIndex" />
    <p>{{ this.goldData.code }}</p>
    <p>{{ this.goldData.name }}</p>
    <p>{{ this.goldData.expectWorthDate }}</p>
    <p>{{ this.goldData.expectGrowth }}</p>
    <p></p>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart';
import Back from '@/components/Back';

export default {
  name: 'Gold',
  components: {
    LineChart,
    Back
  },

  mounted() {
    this.getFundDetail('000216');
  },
  computed: {},
  data() {
    return {
      goldData: {
        code: '000216',
        name: '',
        manager: '',
        netWorth: 0,
        expectWorthDate: '2020/09/08',
        expectGrowth: '0.29%',
        type: '',
        lastWeekGrowth: 0,
        lastMonthGrowth: 0,
        lastThreeMonthsGrowth: 0,
        lastSixMonthsGrowth: 0,
        lastYearGrowth: 0,
        sevenDaysYearIncome: 0,
        dayGrowth: 0,
        netWorthData: []
      },
      timeIndex: 1,
      timeIndexArr: [
        { text: '近1个月', index: 1 },
        { text: '近3个月', index: 3 },
        { text: '近6个月', index: 6 },
        { text: '近1年', index: 12 }
      ],
      lineData: []
    };
  },
  watch: {
    timeIndex(newIndex) {
      if (this.goldData.netWorthData.length) {
        switch (newIndex) {
          case 1:
            this.lineData = this.goldData.netWorthData.slice(-24);
            break;
          case 3:
            this.lineData = this.goldData.netWorthData.slice(-62);
            break;
          case 6:
            this.lineData = this.goldData.netWorthData.slice(-122);
            break;
          case 12:
            this.lineData = this.goldData.netWorthData.slice(-245);
            break;
          default:
            console.log('no data');
        }
      }
    }
  },
  methods: {
    async getFundDetail(code) {
      const res = await this.$api.getFundDetail(code);
      this.goldData = Object.assign({}, this.goldData, res.data.data);
      this.lineData = this.goldData.netWorthData.slice(-24);
      this.$AP.hideLoading();
    },
    changeTimeIndex(index) {
      this.timeIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.time-slide {
  .modal {
    position: absolute;
    width: 25%;
    border: 1px solid red;
  }
  span {
    font-size: 14px;
    margin: 0 12px;
  }
}
p {
  font-size: 12px;
}
</style>
