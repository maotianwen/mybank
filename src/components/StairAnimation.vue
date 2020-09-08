<template>
  <transition-group :appear="true" :name="animationName">
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
  mounted() {},
  props: {
    animationName: {
      type: String,
      default: 'down-up'
    }
  }
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

.down-up-enter {
  opacity: 0;
  transform: translateY(100%);
}

.down-up-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
