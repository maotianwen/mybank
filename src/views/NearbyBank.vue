<template>
  <div class="nearby-bank">
    <Header :needBack="true" title="附近银行" />
    <!-- <amap :zoom="11" :center="[117.000923, 36.675807]"> -->
    <!-- <amap-marker :position="[117.000923, 36.675807]" /> -->
    <!-- </amap> -->
  </div>
</template>

<script>
export default {
  name: 'NearbyBank',
  components: {},
  methods: {},
  mounted() {
    this.$store.commit('hideLoading');
  }
};
</script>

<style lang="less" scoped>
.nearby-bank {
  padding-top: 87px;
  overflow: hidden;
}
iframe {
  height: 1600px;
  width: 100%;
}
</style>
