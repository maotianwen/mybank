<template>
  <div class="group-transfer">
    <ContentTitle title="向多人转账" :needArrow="false" />
    <div class="panel regular-margin"></div>
  </div>
</template>

<script>
export default {
  name: 'GroupTransfer'
};
</script>

<style lang="less" scoped>
.group-transfer {
  .panel {
    box-shadow: @shadow;
    height: 300px;
    border-radius: 24px;
  }
}
</style>
