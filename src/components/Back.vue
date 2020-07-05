<template>
  <i class="back" @click="back"></i>
</template>

<script>
export default {
  name: 'Back',
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.back {
  background-image: url(../assets/back.png);
  width: 20px;
  height: 33px;
  position: absolute;
  top: 24px;
  left: 34px;
}
</style>
