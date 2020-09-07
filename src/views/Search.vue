<template>
  <div>
    {{ testProps }}
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
