<template>
  <div class="home">
    <Welcome />
    <div class="header"></div>
    <button class="toall" @click="$router.push('login')">登录测试</button>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer';
import Welcome from '@/views/Welcome';

export default {
  name: 'Home',
  components: {
    Footer,
    Welcome
  },
  data() {
    return {
      sb: 'asda'
    };
  },
  mounted() {
    // this.getFund();
    this.$AP.hideBackButton();
  },
  methods: {
    getFundDetail() {
      this.$api.getFundDetail('000001').then(v => console.log(v));
    },
    getFund() {
      this.$api.getFund('202015', '007339').then(v => console.log(v));
    }
  }
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
    display: inline-block;
    width: 300px;
    border: 1px solid black;
  }
}
</style>
