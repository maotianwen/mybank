<template>
  <div class="storage regular-margin" @click="loginOrNot">
    <p class="title">查看收支</p>
    <p class="sub-title">收得透明，支得清楚</p>
    <img
      src="../assets/mobile.png"
      alt=""
      class="mobile"
      @animationend="() => (coinAnimationStart = true)"
    />
    <img
      src="../assets/coin.png"
      alt=""
      class="coin1"
      :class="coinAnimationStart && 'coin-animation'"
    />
    <img
      src="../assets/coin.png"
      alt=""
      class="coin2"
      :class="coinAnimationStart && 'coin-animation'"
    />
    <img
      src="../assets/coin.png"
      alt=""
      class="coin3"
      :class="coinAnimationStart && 'coin-animation'"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CheckEarning',
  data() {
    return {
      coinAnimationStart: false
    };
  },
  computed: {
    ...mapState(['isLogined'])
  },
  props: {
    infoType: {
      type: String,
      default: 'account'
    }
  },
  methods: {
    loginOrNot() {
      if (!this.isLogined) {
        this.$router.push('login');
      } else {
        this.$router.push('incomerecord');
      }
    }
  }
};
</script>

<style lang="less" scoped>
.storage {
  height: 220px;
  background: linear-gradient(90deg, #eaeaf5 0%, #ebe6d3 100%);
  border-radius: 24px;
  padding: 54px 36px 0 36px;
  text-align: left;
  color: #ffffff;
  box-shadow: @shadow;
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;
  p {
    font-weight: 400;
    color: #000000;
    &.title {
      font-size: 34px;
      margin-bottom: 14px;
    }
    &.sub-title {
      font-size: 26px;
      color: @my-purple;
    }
  }
  .mobile {
    position: absolute;
    right: 12px;
    bottom: 8px;
    width: 234px;
    animation: from-bottom 1s linear forwards;
  }
  .coin1 {
    position: absolute;
    opacity: 0;
    width: 40px;
    right: 44px;
    bottom: 84px;
  }
  .coin2 {
    position: absolute;
    opacity: 0;
    width: 40px;
    right: 66px;
    bottom: 84px;
    animation-delay: 0.6s;
  }
  .coin3 {
    position: absolute;
    opacity: 0;
    width: 40px;
    right: 96px;
    bottom: 94px;
    animation-delay: 1.7s;
  }
}

.coin-animation {
  animation: lift 2s linear infinite;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.6;
  }
}

@keyframes from-bottom {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes lift {
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
    transform: translateY(-90px;);
  }
}
</style>
