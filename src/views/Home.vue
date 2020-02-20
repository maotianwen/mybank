<template>
  <div class="home">
    <p>cyt</p>
    <p>{{ sb }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      sb: "asd"
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  p {
    text-align: left;
    margin-left: 156px;
  }
}
</style>
