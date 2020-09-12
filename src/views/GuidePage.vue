<template>
  <div class="wrapper" :class="currentIndex === 2 && 'when-second-active'">
    <button @click="skip">跳过</button>
    <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide><img src="../assets/guide1.png" /></swiper-slide>
      <swiper-slide><img src="../assets/guide2.png" /></swiper-slide>
      <swiper-slide><img src="../assets/guide3.png" /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
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
  name: 'GuidePage',
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {},
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        on: {
          activeIndexChange: s => {
            this.currentIndex = s.activeIndex;
          }
        }
      },
      currentIndex: 1
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    ...mapState(['showWelcomePage'])
  },
  methods: {
    skip() {
      this.changeIndex(0);
    },
    ...mapMutations(['changeIndex'])
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
  background-color: #f8f9fd;
  &.when-second-active {
    background-color: #fdfdfe;
  }
}
.swiper-container {
  height: 100%;
  position: relative;
}
button {
  position: absolute;
  color: #ffffff;
  top: 46px;
  right: 32px;
  font-size: 26px;
  padding: 8px 34px;
  border-radius: 26px;
  letter-spacing: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
}
img {
  width: 100%;
  transform: translate3d(0, 0, 0);
}
</style>
