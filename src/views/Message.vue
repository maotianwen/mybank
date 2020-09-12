<template>
  <div class="message">
    <Header :title="'消息中心'" />
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
</style>
