<template>
  <div class="marquee-container">
    <ul :class="['marquee', { go: animate }]">
      <li v-for="item in list" :key="item" :class="whiteFont && 'white-font'">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  data() {
    return {
      // list: [],
      animate: false
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    whiteFont: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    setInterval(this.play, 3000);
  },
  methods: {
    play() {
      this.animate = true;
      setTimeout(() => {
        this.list.push(this.list[0]);
        this.list.shift();
        this.animate = false;
      }, 500);
    }
  }
};
</script>

<style lang="less">
.marquee-container {
  position: absolute;
  top: 0;
  left: 56px;
  overflow: hidden;
  height: 52px;
  background-color: transparent;
  li {
    line-height: 52px;
    font-size: 26px;
    text-align: left;
    color: @my-grey;
    &.white-font {
      color: #ffffff;
    }
  }
}
.go {
  transform: translateY(-52px);
  transition: all 0.4s;
}
</style>
