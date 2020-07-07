<template>
  <div class="footer">
    <button v-for="(item, index) in mainMenu" :key="index">
      <div
        class="icon-wrapper"
        @click="switchTab(index)"
        :class="{ selected: menuIndex === index }"
      >
        <i :class="item.class"></i>
        <p>{{ item.text }}</p>
      </div>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Footer',
  data() {
    return {
      mainMenu: [
        { text: '首页', class: 'home-icon' },
        { text: '理财', class: 'finance-icon' },
        { text: '生活', class: 'life-icon' },
        { text: '我的', class: 'mine-icon' }
      ]
    };
  },
  methods: {
    switchTab(index) {
      this.$store.commit('changeIndex', index);
    }
  },
  computed: {
    ...mapState(['menuIndex'])
  }
};
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  height: 114px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  button {
    flex: 0 0 25%;
    .selected {
      p {
        color: @my-blue;
      }
      i {
        &.home-icon {
          background-image: url(../assets/home-selected.png);
        }
      }
    }
    i {
      width: 44px;
      height: 42px;
      &.home-icon {
        background-image: url(../assets/home.png);
      }
      &.finance-icon {
        background-image: url(../assets/finance.png);
      }
      &.life-icon {
        background-image: url(../assets/life.png);
      }
      &.mine-icon {
        background-image: url(../assets/mine.png);
      }
    }
    p {
      font-size: 24px;
    }
  }
}
</style>
