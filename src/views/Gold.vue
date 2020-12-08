<template>
  <div class="fund add-padding-bottom">
    <Header :needBack="true" title="基金详情" />
    <div class="fund-title" v-show="lineData.length">
      <p>{{ this.goldData.name }}</p>
      <div class="type-wrapper">
        <span class="fund-code nums">{{ this.goldData.code }}</span>
        <span class="mix-type">{{ this.goldData.type }}</span>
        <span class="low-risk">低风险型</span>
      </div>
    </div>
    <div class="data-bar" v-if="lineData.length">
      <div>
        <p
          :class="this.goldData.dayGrowth > 0 ? 'red-num' : 'green-num'"
          class="data-value"
        >
          {{ this.goldData.dayGrowth }}%
        </p>
        <p class="data-key">日涨跌幅</p>
      </div>
      <div class="year-growth">
        <p
          :class="this.goldData.lastYearGrowth > 0 ? 'red-num' : 'green-num'"
          class="data-value"
        >
          <!-- {{ this.goldData.lastYearGrowth }}% -->
          <CountNum
            :endNum="Number(this.goldData.lastYearGrowth)"
            :isPercentage="true"
            :step="2.21"
            :decimalPlace="2"
            class="data-value"
          />
        </p>
        <p class="data-key">近一年收益率</p>
      </div>
      <div class="latest-netWorth">
        <p class="data-value">{{ this.goldData.netWorth }}</p>
        <p class="data-key">最新净值</p>
      </div>
    </div>
    <!-- <p class="content-title">净值走势图</p> -->
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
    <div class="fund-detail" v-if="lineData.length">
      <p class="fund-document">基金档案</p>

      <p class="buy-min">
        <svg-icon iconClass="first-buy" />
        首次购买{{ (this.goldData.buyMin / 100).toFixed(2) }}元起
      </p>
      <p>
        <svg-icon iconClass="low-risk" />
        较低风险，投资策略稳健
      </p>
      <p>
        <svg-icon iconClass="fund-scale" />
        基金规模{{ this.goldData.fundScale }}
      </p>
    </div>
    <div class="transaction-rule" v-show="lineData.length">
      <p class="fund-document">交易规则</p>
      <BuySteps />
    </div>
    <div class="fund-footer" v-if="lineData.length">
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
      <div class="invest flex-item btn">定投</div>
      <div class="buy flex-item btn">购买</div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart';
import CountNum from '../components/CountNum.vue';
import BuySteps from '@/components/BuySteps.vue';

export default {
  name: 'Gold',
  components: {
    LineChart,
    CountNum,
    BuySteps
  },

  mounted() {
    this.getFundDetail(this.$route.params.id);
  },
  computed: {},
  data() {
    return {
      goldData: {
        code: '',
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
      this.$store.commit('showLoading');
      const res = await this.$api.getFundDetail(code);
      this.goldData = Object.assign({}, this.goldData, res.data.data);
      this.lineData = this.goldData.netWorthData.slice(-24);
      this.$store.commit('hideLoading');
    },
    changeTimeIndex(itemIndex, index) {
      this.timeIndex = itemIndex;
      this.modalIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.content-title {
  font-size: 36px;
  text-align: left;
  padding-left: 28px;
}
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
      margin-bottom: 18px;
    }
    .type-wrapper {
      display: flex;
      margin-bottom: 50px;
    }
    span {
      font-size: 20px;
      letter-spacing: 1px;
      display: inline-block;
      padding: 2px 16px;
      border: 2px solid transparent;
      border-radius: 3px;
      &.fund-code {
        border-color: @my-blue;
        color: @my-blue;
        font-size: 24px;
        background-color: #e6f7ff;
      }
      &.mix-type {
        color: @my-red;
        border-color: @my-red;
        margin-left: 18px;
        background-color: #fff1f0;
      }
      &.low-risk {
        color: @my-green;
        border-color: @my-green;
        margin-left: 18px;
        background-color: #f6ffed;
      }
    }
  }
}
.time-slide {
  height: 44px;
  margin: 0 22px 48px 22px;
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
  padding: 0 28px;
  align-items: center;
  text-align: left;
  // justify-content: space-between;
  border-bottom: 1px solid @my-grey;
  padding-bottom: 20px;
  margin-bottom: 22px;
  .year-growth {
    margin-left: 66px;
  }
  .latest-netWorth {
    margin-left: 66px;
    .data-value {
      color: @my-blue;
    }
  }
  .data-value {
    font-size: 38px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
  }
  .data-key {
    font-size: 26px;
  }
}
.fund-detail {
  margin-bottom: 52px;
  padding-left: 22px;
  .fund-document {
    font-size: 34px;
    margin-bottom: 28px;
  }
  p {
    font-size: 28px;
    margin-bottom: 30px;
    text-align: left;
    display: flex;
  }

  svg {
    transform: scale(1.1);
    margin-right: 24px;
  }
}
.transaction-rule {
  text-align: left;
  padding: 0 22px;
  .fund-document {
    font-size: 34px;
    margin-bottom: 28px;
  }
}
.fund-footer {
  display: flex;
  z-index: 2;
  position: fixed;
  background-color: #ffffff;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 100px;
  font-size: 22px;
  border-top: 1px solid @my-grey;
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
  .btn {
    flex: 40%;
    height: 80%;
    border-radius: 10px;
    letter-spacing: 4px;
    font-weight: 400;
    font-size: 36px;
    margin-right: 14px;
    border: 1px solid @my-blue;
  }
  .invest {
    color: @my-blue;
  }
  .buy {
    background-color: @my-blue;
    color: #ffffff;
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
