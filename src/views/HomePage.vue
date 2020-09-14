<template>
  <div class="home-page add-padding-bottom">
    <div class="header">
      <svg-icon :iconClass="'blur-logo'" :className="'background-logo'" />
      <div class="tool-bar">
        <svg-icon :iconClass="'login'" @click.native="$router.push('login')" />
        <SearchInput />
        <!-- <svg-icon :iconClass="'robot'" :className="'robot'" /> -->
        <svg-icon
          :iconClass="'message'"
          :className="'message'"
          @click.native="$router.push('message')"
        />
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
      <div
        v-for="item in customMenu"
        :key="item.id"
        class="flex-item"
        @click="() => jumpUrl(item.url)"
      >
        <svg-icon :iconClass="item.icon" :className="'flex-icon'" />
        <p>{{ item.name }}</p>
      </div>
      <div class="flex-item">
        <svg-icon :iconClass="'all'" :className="'flex-icon'" />
        <p>全部</p>
      </div>
    </div>
    <Recommend />
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide><img src="../assets/ad1.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/ad2.jpg" /></swiper-slide>
      <swiper-slide><img src="../assets/ad3.jpg" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput';
import Recommend from '@/components/Recommend';
import { mapState, mapMutations } from 'vuex';
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay
} from 'swiper/swiper.esm';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
SwiperClass.use([Pagination, Mousewheel, Autoplay]);
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
import 'swiper/swiper-bundle.css';

export default {
  name: 'HomePage',
  components: {
    SearchInput,
    Recommend,
    SwiperSlide,
    Swiper
  },

  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2400,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
        // Some Swiper option/callback...
      },
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
          event: this.showAlertToast
        },
        {
          name: '我的账户',
          id: 4,
          icon: 'my-account',
          event: this.jumpToMyAccount
        }
      ]
    };
  },
  methods: {
    ...mapMutations(['changeIndex']),
    scan() {
      this.$AP.scan();
    },
    transferMoney() {
      this.$router.push('transfermoney');
    },
    showAlertToast() {
      this.$AP.showToast({
        content: '暂不支持此功能',
        duration: 1000
      });
    },
    jumpUrl(url) {
      if (url) {
        this.$AP.showLoading();
        this.$router.push(url);
      } else {
        this.showAlertToast();
      }
    },
    jumpToMyAccount() {
      this.changeIndex(3);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    ...mapState(['customMenu', 'isLogined'])
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
      z-index: 1;
    }
    .tool-bar {
      display: flex;
      width: 100%;
      top: 0;
      position: fixed;
      z-index: 6;
      height: 95px;
      align-items: center;
      padding: 0 30px;
      background-color: @my-blue;
      .message {
        position: relative;
        transform: scale(1.1);
      }
    }
    .main-menu {
      display: flex;
      justify-content: space-around;
      position: relative;
      z-index: 2;
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
    font-size: 26px;
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
  .swiper-container {
    margin-top: 72px;
  }
  .swiper-slide {
    height: 252px;
    overflow: hidden;
    img {
      height: 252px;
      width: 100%;
      object-fit: cover;
    }
  }
  .swiper-pagination {
    bottom: -10px;
  }
}
</style>

<style>
.swiper-pagination-bullet {
  margin: 0 12px !important;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  transition: all 0.4s;
}
/* .swiper-pagination-bullet-active {
} */
</style>
