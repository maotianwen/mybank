<template>
  <transition-group :appear="true" name="stair">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'StairAnimation',
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less">
.stair-enter {
  opacity: 0;
  transform: translateX(100%);
}
.stair-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
