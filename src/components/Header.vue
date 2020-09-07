<template>
  <div class="blue-header">
    <Back />
    <p>{{ title }}</p>
  </div>
</template>

<script>
import Back from '@/components/Back.vue';

export default {
  name: 'Header',
  components: {
    Back
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.blue-header {
  height: 87px;
  background-color: @my-blue;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  p {
    letter-spacing: 3px;
    color: #ffffff;
    font-size: 36px;
  }
}
</style>
