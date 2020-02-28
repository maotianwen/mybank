<template>
  <div class="home">
    <p>cyt</p>
    <p>{{ sb }}</p>
    <div class="mybad">
      'qunimade'
    </div>
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

<style lang="less" scoped>
.home {
  p {
  }
  .mybad {
    display: inline-block;
    width: 700px;
    border: 1px solid red;
  }
}
</style>
