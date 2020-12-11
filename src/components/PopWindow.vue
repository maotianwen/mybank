<template>
  <div class="pop-window">
    <div class="mask"></div>
    <transition name="pop">
      <div class="bank-list" v-show="showPopWindow">
        <svg-icon iconClass="exit" @click.native="closeWindow" class="exit" />
        <div class="list">
          <div
            v-for="(item, index) in bankList"
            :key="index"
            class="bank-item"
            :class="curIndex === index && 'active'"
            @touchstart="() => (curIndex = index)"
            @click="() => submitBank(item, index)"
          >
            <svg-icon :iconClass="item.icon" />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PopWindow',
  mounted() {
    this.preventBodyScroll();
    this.showPopWindow = true;
  },
  data() {
    return {
      bankList: [
        { name: '中国建设银行', icon: 'construction-bank' },
        { name: '中国银行', icon: 'china-bank' },
        { name: '招商银行', icon: 'merchants-bank' },
        { name: '中国工商银行', icon: 'commercial-bank' },
        { name: '农业银行', icon: 'agricultural-bank' },
        { name: '光大银行', icon: 'everbright-bank' },
        { name: '民生银行', icon: 'livelihood-bank' },
        { name: '交通银行', icon: 'communication-bank' },
        { name: '兴业银行', icon: 'thrive-bank' },
        { name: '浦发银行', icon: 'pufa-bank' },
        { name: '北京银行', icon: 'beijing-bank' },
        { name: '中信银行', icon: 'citic-bank' }
      ],
      showPopWindow: false,
      curIndex: 1000
    };
  },
  methods: {
    preventBodyScroll() {
      document.body.classList.add('modalOpen');
    },
    allowBodyScroll() {
      document.body.classList.remove('modalOpen');
    },
    closeWindow(bankName, bankIcon) {
      this.allowBodyScroll();
      this.showPopWindow = false;
      setTimeout(() => {
        this.$emit('close', bankName, bankIcon);
      }, 200);
    },
    submitBank(item, bankIndex) {
      if (this.curIndex === bankIndex) {
        this.closeWindow(item.name, item.icon);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  z-index: 100;
  background-color: #000;
  opacity: 0.2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.bank-list {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 101;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
  height: 620px;
  box-shadow: @shadow;
  padding-top: 100px;
  .exit {
    position: absolute;
    right: 40px;
    top: 40px;
    transform: scale(0.8);
  }
  input {
    border: 1px solid black;
  }
  .list {
    height: 500px;
    overflow-y: auto;
  }
  .bank-item {
    &.active {
      background-color: #e9e9e9;
    }
    svg {
      transform: scale(1.6);
    }
    font-size: 36px;
    padding-left: 53px;
    display: flex;
    align-items: center;
    height: 104px;
    span {
      margin-left: 42px;
    }
  }
}

.pop-enter-active,
.pop-leave-active {
  transition: all 0.2s ease;
}

.pop-enter {
  transform: translateY(100%);
}
.pop-leave-to {
  transform: translateY(100%);
}
</style>
