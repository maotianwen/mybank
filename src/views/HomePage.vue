<template>
  <div class="home-page">
    <div class="header">
      <svg-icon :iconClass="'blur-logo'" :className="'background-logo'" />
      <div class="tool-bar">
        <svg-icon :iconClass="'login'" @click.native="$router.push('login')" />
        <SearchInput />
        <svg-icon :iconClass="'robot'" :className="'robot'" />
        <svg-icon :iconClass="'message'" :className="'message'" />
      </div>
      <div class="main-menu">
        <div
          v-for="item in menuArr"
          :key="item.id"
          @click="item.event"
          class="item-wrapper"
        >
          <svg-icon :iconClass="item.icon" :className="`icon`" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="main-part">
      <div v-for="item in customMenu" :key="item.id" class="flex-item">
        <svg-icon :iconClass="item.icon" :className="'flex-icon'" />
        <p>{{ item.name }}</p>
      </div>
      <div class="flex-item">
        <svg-icon :iconClass="'all'" :className="'flex-icon'" />
        <p>全部</p>
      </div>
    </div>
    <Recommend />
    <swiper :options="swiperOptions">
      <swiper-slide>2</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput';
import Recommend from '@/components/Recommend';
import { mapState } from 'vuex';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'HomePage',
  components: {
    SearchInput,
    Recommend,
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      menuArr: [
        {
          name: '扫一扫',
          id: 1,
          icon: 'scan',
          event: this.scan
        },
        {
          name: '收付款',
          id: 2,
          icon: 'rmb',
          event: this.showAlertToast
        },
        {
          name: '转账',
          id: 3,
          icon: 'transaction',
          event: this.scan
        },
        {
          name: '我的账户',
          id: 4,
          icon: 'my-account',
          event: this.scan
        }
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  methods: {
    scan() {
      this.$AP.scan();
      console.log('a');
    },
    showAlertToast() {
      this.$AP.showToast({
        content: '暂不支持此功能',
        duration: 1000
      });
    }
  },
  computed: {
    ...mapState(['customMenu'])
  }
};
</script>

<style lang="less" scoped>
.home-page {
  .header {
    background-color: @my-blue;
    height: 380px;
    overflow: hidden;
    position: relative;
    .background-logo {
      position: absolute;
      right: -24px;
      bottom: -78px;
      width: 245px;
      height: 257px;
    }
    .tool-bar {
      display: flex;
      width: 100%;
      top: 0;
      position: fixed;
      height: 95px;
      align-items: center;
      padding-left: 30px;
      background-color: @my-blue;
      .robot {
        margin-left: 33px;
        position: relative;
        top: -2px;
        transform: scale(1.2);
      }
      .message {
        margin-left: 32px;
        position: relative;
        top: 4px;
        transform: scale(1.1);
      }
    }
    .main-menu {
      display: flex;
      justify-content: space-around;
      margin-top: 148px;
      .item-wrapper {
        width: 120px;
      }
      .icon {
        width: 94px;
        height: 88px;
      }
      p {
        color: #ffffff;
        font-size: 26px;
        letter-spacing: 2px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
      }
    }
  }
  .main-part {
    height: 328px;
    padding-top: 32px;
    font-size: 24px;
    white-space: pre-wrap;
    .flex-item {
      display: inline-block;
      width: 150px;
      height: 90px;
      margin-bottom: 45px;
    }
    .flex-icon {
      transform: scale(1.2);
      margin-bottom: 10px;
    }
  }
}
</style>
