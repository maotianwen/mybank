<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p></p>
    <button @click="backHome">backHome</button>
  </div>
</template>

<script>
export default {
  name: 'about',
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
