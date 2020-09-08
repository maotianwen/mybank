<template>
  <div>
    <span @click="$router.go(-1)">取消</span>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    testProps: {
      type: String,
      default: 'xixi'
    }
  }
};
</script>

<style lang="less" scoped></style>
