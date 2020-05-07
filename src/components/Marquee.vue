<template>
  <div class="marquee-container">
    <ul :class="['marquee', { go: animate }]">
      <li v-for="item in list" :key="item">{{ item }}</li>
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
  computed: {
    list() {
      return JSON.parse(JSON.stringify(this.province));
    }
  },
  props: {
    province: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    // this.list = this.province;
  },
  // watch: {
  //   province(newValue) {
  //     this.list = newValue;
  //   }
  // },
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

<style lang="less" scoped>
.marquee-container {
  //   position: relative;
  overflow: hidden;
  height: 130px;
  background-color: goldenrod;
  li {
    line-height: 130px;
  }
}
.go {
  margin-top: -130px;
  transition: all 0.4s;
}
</style>
