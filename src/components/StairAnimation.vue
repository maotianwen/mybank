<template>
  <transition-group
    :appear="true"
    :name="animationName"
    :class="flexContainer && 'flex-wrapper'"
  >
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
    },
    flexContainer: {
      type: Boolean,
      default: false
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

// .flex-wrapper {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// }
</style>
