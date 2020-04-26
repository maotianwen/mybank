<template>
  <div class="marquee-container">
    <ul :class="['marquee', { go: animate }]">
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  data() {
    return {
      list: [
        { name: 'cyt', id: 1 },
        { name: 'mtw', id: 2 },
        { name: 'pxj', id: 3 },
        { name: 'lxc', id: 4 },
        { name: 'cbb', id: 5 },
        { name: 'maybe', id: 6 }
      ],
      animate: false
    };
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

<style lang="less" scoped>
.marquee-container {
  //   position: relative;
  overflow: hidden;
  height: 130px;
  background-color: goldenrod;
}
.go {
  margin-top: -105px;
  transition: all 0.4s;
}
</style>
