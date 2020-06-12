<template>
  <div class="footer">
    <button v-for="(item, index) in mainMenu" :key="index">
      {{ item.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      mainMenu: [
        { text: '首页', route: 'profile' },
        { text: '理财', route: 'gender' },
        { text: '生活' },
        { text: '我的' }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  button {
    flex: 0 0 25%;
    border: 1px solid black;
    height: 120px;
  }
}
</style>
