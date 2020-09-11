<template>
  <div class="fund">
    <Header :needBack="true" title="基金详情" />
    <div class="fund-title">
      <p>{{ this.goldData.name }}({{ this.goldData.code }})</p>
      <div class="type-wrapper">
        <span class="mix-type">混合型</span>
        <span class="low-risk">低风险型</span>
      </div>
      <p>首次购买{{ (this.goldData.buyMin / 100).toFixed(2) }}元起</p>
    </div>
    <div class="data-bar">
      <div>
        <p
          :class="this.goldData.dayGrowth > 0 ? 'red-num' : 'green-num'"
          class="data-value"
        >
          {{ this.goldData.dayGrowth }}%
        </p>
        <p class="data-key">日涨跌幅</p>
      </div>
      <div>
        <p
          :class="this.goldData.lastYearGrowth > 0 ? 'red-num' : 'green-num'"
          class="data-value"
        >
          {{ this.goldData.lastYearGrowth }}%
        </p>
        <p class="data-key">近一年收益率</p>
      </div>
      <div class="latest-netWorth">
        <p class="data-value">{{ this.goldData.netWorth }}</p>
        <p class="data-key">
          最新净值{{ this.goldData.netWorthDate.substring(5) }}
        </p>
      </div>
    </div>
    <LineChart :lineData="lineData" :timeInterval="timeIndex" />
    <div class="time-slide" v-if="lineData.length">
      <div
        v-for="(item, index) in timeIndexArr"
        :key="item.index"
        @click="changeTimeIndex(item.index, index)"
        class="slide-item"
        :class="index === modalIndex && 'white-font'"
      >
        {{ item.text }}
      </div>
      <div
        class="modal"
        :style="{ transform: `translateX(${100 * modalIndex}%)` }"
      ></div>
    </div>
    <div class="fund-detail">
      <p>{{ this.goldData.manager }}</p>
    </div>
    <div class="fund-footer">
      <div class="subscribe flex-item" @click="hasStarred = !hasStarred">
        <transition name="boom">
          <svg-icon
            iconClass="paint-star"
            v-show="hasStarred"
            className="paint-star"
          />
        </transition>
        <svg-icon iconClass="star" />
        <p>关注</p>
      </div>
      <div class="consult flex-item">
        <svg-icon iconClass="consult" />
        咨询
      </div>
      <div class="buy flex-item">购买</div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart';
import Header from '@/components/Header';

export default {
  name: 'Gold',
  components: {
    LineChart,
    Header
  },

  mounted() {
    this.getFundDetail(this.$route.params.id);
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
        buyMin: 0,
        lastWeekGrowth: 0,
        lastMonthGrowth: 0,
        lastThreeMonthsGrowth: 0,
        lastSixMonthsGrowth: 0,
        lastYearGrowth: 0,
        sevenDaysYearIncome: 0,
        dayGrowth: 0,
        netWorthDate: '',
        netWorthData: []
      },
      timeIndex: 1,
      modalIndex: 0,
      hasStarred: false,
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
    changeTimeIndex(itemIndex, index) {
      this.timeIndex = itemIndex;
      this.modalIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.fund {
  position: absolute;
  width: 100%;
  height: 100%;
}
.red-num {
  color: @my-red;
}
.green-num {
  color: @my-green;
}
.fund {
  padding-top: 123px;
  .fund-title {
    padding-left: 28px;
    text-align: left;
    line-height: auto;
    p {
      font-size: 36px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      letter-spacing: 2px;
      margin-bottom: 28px;
    }
    .type-wrapper {
      display: flex;
      margin-bottom: 30px;
    }
    span {
      font-size: 20px;
      letter-spacing: 1px;
      display: inline-block;
      padding: 2px 16px;
      border: 2px solid transparent;
      border-radius: 3px;
      &.mix-type {
        color: @my-red;
        border-color: @my-red;
      }
      &.low-risk {
        color: @my-green;
        border-color: @my-green;
        margin-left: 18px;
      }
    }
  }
}
.time-slide {
  height: 44px;
  margin: 0 22px 24px 22px;
  border: 1px solid #0066b3;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px 1px #86a2ef;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .modal {
    position: absolute;
    left: 0;
    width: 25%;
    background: linear-gradient(360deg, #539bff 0%, #0066b3 100%);
    border-radius: 8px;
    height: 44px;
    transition: transform 0.2s;
  }
  .slide-item {
    font-size: 24px;
    height: 100%;
    flex: 25%;
    line-height: 44px;
    z-index: 1;
    &.white-font {
      color: #ffffff;
    }
  }
}
.data-bar {
  display: flex;
  padding-left: 28px;
  align-items: center;
  text-align: left;
  .data-value {
    font-size: 36px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
  }
  .data-key {
    font-size: 28px;
  }
}
.fund-footer {
  display: flex;
  z-index: 2;
  position: fixed;
  background-color: #ffffff;
  bottom: 0;
  width: 100%;
  height: 100px;
  font-size: 22px;
  border-top: 1px solid @my-blue;
  .flex-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .subscribe {
    flex: 20%;
    height: 100%;
    .paint-star {
      position: absolute;
      top: 12px;
      transition: all 0.4s;
    }
  }
  .consult {
    flex: 20%;
    height: 100%;
  }
  .buy {
    flex: 60%;
    height: 100%;
    background-color: @my-blue;
    color: #ffffff;
    letter-spacing: 4px;
    font-weight: 600;
    font-size: 36px;
  }
}

.boom-enter-active {
  // opacity: 0;
  animation: bounce-in 0.5s;
}
.boom-leave-to {
  opacity: 0;
  transform: scale(0);
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
