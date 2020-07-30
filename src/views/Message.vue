<template>
  <div class="message">
    <Header :title="'消息中心'" />
    <!-- <StairAnimation> -->
    <div
      v-for="item in msgOptions"
      :key="item.id"
      :class="item.className"
      class="list-item"
      :style="`transition:all ${item.id / 10}s`"
    >
      <svg-icon :iconClass="item.icon" :className="'icon'" />
      <p class="main-title">{{ item.name }}</p>
      <p class="sub-title">{{ item.subName }}</p>
    </div>
    <!-- </StairAnimation> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
// import StairAnimation from '@/components/StairAnimation';

export default {
  name: 'Search',
  data() {
    return {
      msgOptions: [
        {
          name: '动账通知',
          subName: '网银实时转至他行通知',
          icon: 'notification',
          className: 'first',
          id: 1
        },
        {
          name: '建行活动',
          subName: '超级月末周',
          icon: 'activity',
          className: 'second',
          id: 2
        },
        {
          name: '系统通知',
          subName: '关于系统维护暂停部分服务的公告',
          icon: 'system',
          className: 'third',
          id: 3
        }
      ]
    };
  },
  components: {
    Header
    // StairAnimation
  }
};
</script>

<style lang="less" scoped>
.message {
  padding-top: 125px;
}
.list-item {
  border: 0.5px solid #9b9b9b;
  background-color: #ffffff;
  border-left: none;
  border-right: none;
  text-align: left;
  position: relative;
  padding: 20px 0 20px 87px;
  &.first {
    border-bottom: none;
  }
  &.third {
    border-top: none;
  }
  .icon {
    height: 48px;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .main-title {
    font-size: 32px;
    color: #000000;
    letter-spacing: 2px;
  }
  .sub-title {
    font-size: 20px;
    color: #9b9b9b;
    letter-spacing: 1px;
  }
}
</style>
