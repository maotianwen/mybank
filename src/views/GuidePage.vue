<template>
  <div class="wrapper" :class="currentIndex === 2 && 'when-second-active'">
    <button @click="skip">立即体验</button>
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
  padding: 12px 24px;
  border-radius: 36px;
  letter-spacing: 2px;
  border: 1px solid #abc5ff;
  background-color: #abc5ff;
  z-index: 10;
}
img {
  width: 100%;
  transform: translate3d(0, 0, 0);
}
</style>
