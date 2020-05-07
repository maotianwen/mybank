<template>
  <div class="home">
    <Refresh>
      <MandTest />
    </Refresh>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import MandTest from '@/components/MandTest';
import Footer from '@/components/Footer';
import Refresh from '@/components/Refresh';
// import func from '@/utils/func';

export default {
  name: 'Home',
  components: {
    MandTest,
    Footer,
    Refresh
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
  .mybad {
    display: inline-block;
    width: 300px;
    border: 1px solid red;
  }
}
</style>
