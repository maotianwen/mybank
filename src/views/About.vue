<template>
  <div class="about">
    <Marquee />
    <h1>This is an about page</h1>
    <button @click="backHome">backHome</button>
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
    return {};
  },
  methods: {
    backHome() {
      this.$router.push({ name: 'Home' });
    }
  },
  mounted() {
    // console.log(this.$router);
  }
};
</script>

<style lang="less" scoped>
.about {
}
</style>
