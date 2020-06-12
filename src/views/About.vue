<template>
  <div class="about">
    <Refresh>
      <Marquee :province="mydata" />
      <h1>This is an about page</h1>
      <button @click="backHome">backHome</button>
      <button @click="$router.push('about/cash')">nextPage</button>
    </Refresh>
  </div>
</template>

<script>
import Marquee from '@/components/Marquee';
import Refresh from '@/components/Refresh';

export default {
  name: 'about',
  components: {
    Marquee,
    Refresh
  },
  data() {
    return {
      mydata: []
    };
  },
  methods: {
    backHome() {
      this.$router.back();
    }
  },
  mounted() {
    // console.log(this.$router);
  }
};
</script>

<style lang="less" scoped>
.about {
  button {
    display: block;
    margin: 0 auto;
  }
}
</style>
