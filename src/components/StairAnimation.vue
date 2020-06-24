<template>
  <div>
    <transition-group :appear="true" name="stair">
      <div
        v-for="item in list"
        :key="item.id"
        class="list-item"
        :style="{ transition: `all ${item.id / 10}s` }"
      >
        {{ item.text }}
      </div>
    </transition-group>
  </div>
</template>

<script>
const arr = [1, 2, 3];

export default {
  name: 'StairAnimation',
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  props: {
    list: {
      type: Array,
      default: function() {
        return arr.map(item => {
          return { text: `${item}号`, id: item };
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.stair-enter {
  opacity: 0;
  transform: translateX(100%);
}
.stair-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.list-item {
  border: 1px solid black;
}
</style>
