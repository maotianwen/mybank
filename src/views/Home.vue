<template>
  <div class="home">
    <Welcome />
    <HomePage />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer';
import Welcome from '@/views/Welcome';
import HomePage from '@/views/HomePage';

export default {
  name: 'Home',
  components: {
    Footer,
    Welcome,
    HomePage
  },
  data() {
    return {
      testAnimation: false
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
    },
    scan() {
      this.$AP.scan();
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
    display: block;
    width: 300px;
    margin: 0 auto 40px;
    border: 1px solid black;
  }
}
</style>
