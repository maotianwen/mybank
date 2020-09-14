<template>
  <div class="storage regular-margin" @click="loginOrNot">
    <svg-icon iconClass="blur-logo" className="blur-logo" />
    <p v-if="!isLogined && infoType === 'finance'" class="no-login">
      登录查看收益情况
    </p>
    <p v-if="!isLogined && infoType === 'account'" class="no-login">
      登录查看账户总览
    </p>
    <div v-if="isLogined" class="flex-wrapper">
      <div class="benefit">
        <p>昨日收益(元)</p>
        <p class="nums">¥0.48</p>
      </div>
      <div class="total-storage">
        <p>总持仓(元)</p>
        <p class="nums">¥0.00</p>
      </div>
      <p class="random-sentence">
        {{ randomSentence[(Math.random() * 4) >>> 0] }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Earning',
  data() {
    return {
      randomSentence: [
        '胸中之富，真正之富。',
        '财富源于储蓄。',
        '善学者，假人之长以补其短。',
        '不要将鸡蛋都放进同一个篮子里。'
      ]
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
      }
    }
  }
};
</script>

<style lang="less" scoped>
.storage {
  height: 220px;
  background: linear-gradient(180deg, #acdafc 0%, #0066b3 100%);
  border-radius: 24px;
  padding: 32px 36px 0 36px;
  text-align: left;
  color: #ffffff;
  box-shadow: @shadow;
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;
  .blur-logo {
    position: absolute;
    transform: scale(8);
    top: 50%;
    right: 60px;
  }
  .no-login {
    font-size: 38px;
    font-weight: bold;
  }

  .benefit {
    display: inline-block;
    vertical-align: top;
    font-size: 32px;
    .nums {
      font-size: 42px;
    }
  }
  .total-storage {
    display: inline-block;
    vertical-align: top;
    font-size: 32px;
    margin-left: 140px;
    text-align: left;
    .nums {
      font-size: 42px;
    }
  }
  .random-sentence {
    font-size: 20px;
    margin-top: 12px;
  }
}
</style>
