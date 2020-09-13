<template>
  <div class="mine add-padding-bottom">
    <Header title="我的" :needBack="false" :needMessage="true" />
    <Earning />

    <Earning />
    <ListItem v-for="item in MyList" :itemObj="item" :key="item.id" />
    <button @click="logOut">退出登录</button>
  </div>
</template>

<script>
import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import Earning from '@/components/Earning';
import { mapState } from 'vuex';

export default {
  name: 'Mine',
  components: {
    Header,
    ListItem,
    Earning
  },
  data() {
    return {
      needMessage: false,
      MyList: [
        {
          name: '安全中心',
          subName: '',
          icon: 'safety',
          id: 1
        },
        {
          name: '清理缓存',
          subName: '',
          icon: 'clear-cache',
          id: 2
        },
        {
          name: '意见反馈',
          subName: '',
          icon: 'suggest',
          id: 3
        },
        {
          name: '关于',
          subName: '',
          icon: 'about',
          id: 4
        }
      ]
    };
  },
  computed: {
    ...mapState(['isLogined'])
  },
  methods: {
    changeProps() {
      this.needMessage = !this.needMessage;
    },
    logOut() {
      this.$store.commit('logout');
    }
  }
};
</script>

<style lang="less" scoped>
.mine {
  padding-top: 144px;
  .avatar {
    border-radius: 50%;
    width: 120px;
    display: inline-block;
    height: 120px;
    background-color: #a9acaf;
    .user {
      transform: scale(1.5);
    }
  }
  .no-login {
    font-size: 34px;
    vertical-align: top;
    position: relative;
    top: 18px;
    left: 24px;
  }
  button {
    width: 432px;
    height: 88px;
    margin-top: 62px;
    margin-bottom: 24px;
    font-size: 32px;
    background-color: @my-red;
    color: #ffffff;
    border-radius: 24px;
    box-shadow: 0px 0px 4px @my-red;
  }
  .log-info {
    height: 237px;
  }
  .account,
  .month-data {
    height: 206px;
    margin-bottom: 55px;
  }
}
</style>
