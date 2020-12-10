<template>
  <div class="recent-transfer fade-in">
    <ContentTitle title="最近转账" :needArrow="false" />
    <p>最近没有任何转帐记录哦</p>
  </div>
</template>

<script>
export default {
  name: 'RecentTransfer'
};
</script>

<style lang="less" scoped>
p {
  border: 1px solid black;
  height: 300px;
}
</style>
