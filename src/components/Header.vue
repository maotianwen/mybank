<template>
  <div class="blue-header">
    <Back v-show="needBack" />
    <p>{{ title }}</p>
    <svg-icon
      :iconClass="'message'"
      @click.native="$router.push('message')"
      className="message"
      v-show="needMessage"
    />
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
    },
    needBack: {
      type: Boolean,
      default: true
    },
    needMessage: {
      type: Boolean,
      default: false
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
  .message {
    position: absolute;
    right: 38px;
    transform: scale(1.1);
  }
}
</style>
