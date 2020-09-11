<template>
  <div class="footer">
    <HomeButton @click.native="switchTab(0)" />
    <FinanceButton @click.native="switchTab(1)" />
    <LifeButton @click.native="switchTab(2)" />
    <MineButton @click.native="switchTab(3)" />
  </div>
</template>

<script>
import HomeButton from '@/components/svg/HomeButton';
import FinanceButton from '@/components/svg/FinanceButton';
import LifeButton from '@/components/svg/LifeButton';
import MineButton from '@/components/svg/MineButton';

export default {
  name: 'Footer',
  components: {
    HomeButton,
    FinanceButton,
    LifeButton,
    MineButton
  },
  data() {
    return {
      mainMenu: []
    };
  },
  methods: {
    switchTab(index) {
      this.$store.commit('changeIndex', index);
    }
  },
  computed: {
    // ...mapState(['menuIndex'])
  }
};
</script>

<style lang="less">
.footer {
  display: flex;
  height: 114px;
  background-color: #ffffff;
  position: fixed;
  z-index: 6;
  bottom: 0;
  width: 100%;
  align-items: center;
  box-shadow: 0px -2px 8px 2px rgba(0, 0, 0, 0.5);
  div {
    flex: 0 0 25%;
    height: 114px;
    position: relative;
  }
  p {
    position: absolute;
    bottom: 10px;
    font-size: 26px;
    color: black;
    left: 50%;
    transform: translateX(-50%);
  }
  svg {
    display: block;
    margin: 20px auto;
  }
}
</style>
