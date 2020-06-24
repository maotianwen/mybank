<template>
  <div class="home">
    <Welcome />
    <Refresh>
      <MandTest />
      <button class="toall" @click="$router.push('all')">+</button>
    </Refresh>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import MandTest from '@/components/MandTest';
import Footer from '@/components/Footer';
import Refresh from '@/components/Refresh';
import Welcome from '@/views/Welcome';
// import func from '@/utils/func';

export default {
  name: 'Home',
  components: {
    MandTest,
    Footer,
    Refresh,
    Welcome
  },
  data() {
    return {
      sb: 'asd'
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  height: 100%;
  width: 100%;
  .toall {
    display: inline-block;
    width: 300px;
    border: 1px solid red;
  }
}
</style>
