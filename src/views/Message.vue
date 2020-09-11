<template>
  <div class="message">
    <Header :title="'消息中心'" />
    <!-- <StairAnimation> -->
    <!-- <div v-for="item in msgOptions" :key="item.id" class="list-item">
      <svg-icon :iconClass="item.icon" :className="'icon'" />
      <div>
        <p class="main-title">{{ item.name }}</p>
        <p class="sub-title">{{ item.subName }}</p>
      </div>
      <div class="border-bottom"></div>
    </div> -->
    <!-- </StairAnimation> -->
    <ListItem v-for="item in msgOptions" :key="item.id" :itemObj="item" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ListItem from '@/components/ListItem.vue';
// import StairAnimation from '@/components/StairAnimation';

export default {
  name: 'Message',
  data() {
    return {
      msgOptions: [
        {
          name: '动账通知',
          subName: '网银实时转至他行通知',
          icon: 'notification',
          id: 1
        },
        {
          name: '建行活动',
          subName: '超级月末周',
          icon: 'activity',
          id: 2
        },
        {
          name: '系统通知',
          subName: '关于系统维护暂停部分服务的公告',
          icon: 'system',
          id: 3
        }
      ]
    };
  },
  components: {
    Header,
    ListItem
    // StairAnimation
  }
};
</script>

<style lang="less" scoped>
.message {
  padding-top: 87px;
  overflow: hidden;
}
.list-item {
  background-color: #ffffff;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  height: 124px;
  padding-left: 88px;
  margin-bottom: 4px;
  .icon {
    height: 48px;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .main-title {
    font-size: 26px;
    color: #000000;
    letter-spacing: 2px;
  }
  .sub-title {
    font-size: 20px;
    color: #9b9b9b;
    letter-spacing: 1px;
  }
  .border-bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 88px;
    height: 1px;
    opacity: 0.4;
    background-color: #9b9b9b;
  }
}
</style>
