<template>
  <div class="home">
    <Welcome />
    <GuidePage v-if="!showWelcomePage && menuIndex === 4" />
    <HomePage v-if="menuIndex === 0" />
    <Finance v-if="menuIndex === 1" />
    <Life v-show="menuIndex === 2" />
    <Mine v-if="menuIndex === 3" />
    <Footer v-if="menuIndex !== 4" />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer';
import Welcome from '@/views/Welcome';
import HomePage from '@/views/HomePage';
import GuidePage from '@/views/GuidePage';
import Finance from '@/views/Finance';
import Life from '@/views/Life';
import Mine from '@/views/Mine';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Footer,
    Welcome,
    HomePage,
    GuidePage,
    Mine,
    Life,
    Finance,
  },
  data() {
    return {
      testAnimation: false,
    };
  },
  mounted() {
    // this.getFund();
    this.$AP.hideBackButton();
  },
  computed: {
    ...mapState(['menuIndex', 'showWelcomePage']),
  },
  methods: {
    getFundDetail() {
      this.$api.getFundDetail('000001').then((v) => console.log(v));
    },
    getFund() {
      this.$api.getFund('202015', '007339').then((v) => console.log(v));
    },
    scan() {
      this.$AP.scan();
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  height: 100%;
  width: 100%;
  .header {
    height: 87px;
  }
  .toall {
    display: block;
    width: 300px;
    margin: 0 auto 40px;
    border: 1px solid black;
  }
}
</style>
