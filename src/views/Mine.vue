<template>
  <div class="mine add-padding-bottom">
    <Header title="我的" :needBack="false" :needMessage="true" />
    <AccountView />
    <CheckEarning />
    <ListItem
      v-for="item in MyList"
      :itemObj="item"
      :key="item.id"
      @click.native="item.event"
    />
    <button @click="logOut" v-show="isLogined">退出登录</button>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
import CheckEarning from '@/components/CheckEarning';
import { mapState } from 'vuex';
import AccountView from '../components/AccountView.vue';

export default {
  name: 'Mine',
  components: {
    ListItem,
    CheckEarning,
    AccountView
  },
  data() {
    return {
      needMessage: false,
      MyList: [
        {
          name: '安全中心',
          subName: '',
          icon: 'safety',
          id: 1,
          event: this.showAlertToast
        },
        {
          name: '清理缓存',
          subName: '',
          icon: 'clear-cache',
          id: 2,
          event: this.showAlertToast
        },
        {
          name: '意见反馈',
          subName: '',
          icon: 'suggest',
          id: 3,
          event: this.jumpToSuggestion
        },
        {
          name: '关于',
          subName: '',
          icon: 'about',
          id: 4,
          event: this.jumpToAbout
        }
      ]
    };
  },
  computed: {
    ...mapState(['isLogined'])
  },
  methods: {
    logOut() {
      this.$store.commit('logout');
    },
    showAlertToast() {
      this.$AP.showToast({
        content: '暂不支持此功能',
        duration: 1000
      });
    },
    jumpToAbout() {
      this.$router.push('about');
    },
    jumpToSuggestion() {
      this.$store.commit('showLoading');
      this.$router.push('suggestion');
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
