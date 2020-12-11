<template>
  <div class="transfer-money">
    <Header title="转账" :needBack="true" />
    <div class="wrapper regular-margin" :class="unfold && 'grow'">
      <div
        v-for="item in menu"
        :key="item.id"
        class="flex-item"
        @click="() => changeTranferIndex(item.id)"
      >
        <svg-icon :iconClass="item.icon" :className="'flex-icon'" />
        <p>{{ item.name }}</p>
      </div>
      <svg-icon
        :iconClass="'grey-arrow'"
        class="arrow-class"
        :class="unfold && 'unfold'"
        @click.native="toggleWrapper"
      />
    </div>
    <transition name="component-fade" mode="out-in">
      <keep-alive>
        <component :is="view"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import RecentTransfer from '@/components/RecentTransfer';
import NormalTransfer from '@/components/NormalTransfer';
import GroupTransfer from '@/components/GroupTransfer';

export default {
  name: 'TransferMoney',
  components: {
    RecentTransfer,
    NormalTransfer,
    GroupTransfer
  },
  data() {
    return {
      list: [{ name: '毛天问', tel: 13908493441 }],
      view: 'RecentTransfer',
      testStatus: true,
      unfold: false,
      curIndex: 1,
      menu: [
        { name: '普通转账', icon: 'normal-transfer', id: 0 },
        { name: '转账记录', icon: 'transfer-record', id: 1 },
        { name: '他行卡转入', icon: 'other-transfer', id: 2 },
        { name: '多人转账', icon: 'group', id: 3 },
        { name: '转账设置', icon: 'transfer-settings', id: 4 },
        { name: '预约转账', icon: 'order', id: 5 }
      ]
    };
  },
  mounted() {
    this.$store.commit('hideLoading');
  },
  methods: {
    toggleWrapper() {
      this.unfold = !this.unfold;
    },
    changeTranferIndex(id) {
      const map = {
        0: 'NormalTransfer',
        1: 'RecentTransfer',
        3: 'GroupTransfer'
      };
      if (id === 0 || id === 1 || id === 3) {
        this.curIndex = id;
        this.view = map[id];
      } else {
        this.$showAlertToast();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.transfer-money {
  padding-top: 87px;
  padding-bottom: 106px;
  .wrapper {
    box-shadow: @shadow;
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    margin-top: 36px;
    margin-bottom: 30px;
    transition: height 0.3s;
    height: 194px;
    font-size: 26px;
    text-align: left;
    white-space: pre-wrap;
    padding-top: 35px;
    &.grow {
      height: 348px;
    }
    .flex-item {
      display: inline-block;
      text-align: center;
      width: 25%;
      height: 90px;
      margin-bottom: 75px;
      .flex-icon {
        transform: scale(1.2);
        margin-bottom: 10px;
      }
    }
    .arrow-class {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scale(0.8);
      transition: transform 0.4s;
      bottom: 4px;
      &.unfold {
        transform: translateX(-50%) scale(0.8) rotateZ(180deg);
      }
    }
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.4s ease;
}
.component-fade-enter {
  opacity: 0;
  transform: translateX(140px);
}
.component-fade-leave-to {
  opacity: 0;
  transform: translateX(-140px;);
}
</style>
