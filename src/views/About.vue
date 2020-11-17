<template>
  <div class="about">
    <Header title="关于" :needBack="true" />
    <p class="title">关于此应用</p>
    <article>没啥可说的，加班就完事。</article>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {}
};
</script>

<style lang="less" scoped>
.about {
  padding-top: 100px;
  text-align: justify;
  overflow: hidden;
  .title {
    font-size: 46px;
    margin-left: 24px;
    color: @my-blue;
    font-weight: bold;
  }
  article {
    font-size: 26px;
    padding: 12px 24px;
    text-indent: 1em;
    line-height: 2;
    white-space: wrap;
    p {
      margin: 6px 0;
    }
  }
}
</style>
