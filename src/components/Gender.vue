<template>
  <div>
    <p>I'm Gender</p>
    <div v-show="showTab">motherfuck</div>
    <button @click="showTab = !showTab">show</button>
  </div>
</template>

<script>
export default {
  name: 'Gender',
  data() {
    return {
      showTab: false
    };
  }
};
</script>

<style lang="less" scoped></style>
