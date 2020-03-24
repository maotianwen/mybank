<template>
  <div class="home">
    <p>cyt</p>
    <p>{{ sb }}</p>
    <div class="mybad">
      'qunimade'
    </div>
    <MandTest />
  </div>
</template>

<script>
// @ is an alias to /src
import MandTest from '@/components/MandTest';

export default {
  name: 'Home',
  components: {
    MandTest
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
  .mybad {
    display: inline-block;
    width: 300px;
    border: 1px solid red;
  }
}
</style>
