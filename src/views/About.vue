<template>
  <div class="about">
    <Marquee :province="mydata" />
    <h1>This is an about page</h1>
    <button @click="backHome">backHome</button>
    <button @click="$router.push('cash')">nextPage</button>
  </div>
</template>

<script>
import Marquee from '@/components/Marquee';
export default {
  name: 'about',
  components: {
    Marquee
  },
  data() {
    return {
      mydata: []
    };
  },
  methods: {
    backHome() {
      this.$router.push({ name: 'Home' });
    },
  },
  mounted() {
    // console.log(this.$router);
  }
};
</script>

<style lang="less" scoped>
.about {
  button{
    display: block;
    margin: 0 auto;
  }
}
</style>
