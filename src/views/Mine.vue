<template>
  <div>
    <Header title="我的" :needBack="false" :needMessage="true" />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'Mine',
  components: {
    Header
  },
  data() {
    return {
      needMessage: false
    };
  },
  methods: {
    changeProps() {
      this.needMessage = !this.needMessage;
    }
  }
};
</script>

<style lang="less" scoped></style>
