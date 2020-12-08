<template>
  <div class="life add-padding-bottom">
    <div class="tool-bar" :class="hasScrolled && 'fixed-bar'">
      <svg-icon iconClass="location" @click.native="getLocation" />
      <span>{{ location }}</span>
      <SearchInput :isTransparent="true" />
      <svg-icon
        iconClass="message"
        className="message"
        @click.native="$router.push('message')"
      />
    </div>
    <img src="../assets/city.png" alt="" />
    <div class="main-menu">
      <div
        v-for="item in menuArr"
        :key="item.id"
        class="item-wrapper align"
        @click="showAlertToast"
      >
        <svg-icon :iconClass="item.icon" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="ad background-align"></div>
    <ContentTitle title="社区热帖" />
    <div class="hot-content">
      <ArticleItem
        v-for="item in articleArr"
        :articleInfo="item"
        :key="item.index"
      />
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput';
import ArticleItem from '@/components/ArticleItem';
import { debounce } from '@/utils/func';

export default {
  name: 'Life',
  components: {
    SearchInput,
    ArticleItem
  },
  mounted() {
    window.addEventListener('scroll', this.changeHeaderStyle);
  },
  data() {
    return {
      location: '北京',
      hasScrolled: false,
      menuArr: [
        {
          name: '话费流量',
          id: 1,
          icon: 'mobile-pay',
          event: this.showAlertToast
        },
        {
          name: '生活缴费',
          id: 2,
          icon: 'life-pay',
          event: this.showAlertToast
        },
        {
          name: '影票',
          id: 3,
          icon: 'movie',
          event: this.showAlertToast
        },
        {
          name: '交通出行',
          id: 4,
          icon: 'transportation',
          event: this.showAlertToast
        }
      ],
      articleArr: [
        { title: '债券型基金成重灾区新基金', index: 1, hotNums: 3580 },
        { title: '中国拟全面支持半导体行业', index: 2, hotNums: 2534 },
        { title: '证券市场评论:尊重市场，合理调控', index: 3, hotNums: 2350 }
      ]
    };
  },
  methods: {
    changeHeaderStyle() {
      debounce(() => {
        if (window.scrollY) {
          this.hasScrolled = true;
        } else {
          this.hasScrolled = false;
        }
      }, 300);
    },
    getLocation() {
      let requestOption = { type: 1 };
      this.$AP.getLocation(requestOption, res => {
        this.location = res.city.slice(0, 2);
      });
    },
    showAlertToast() {
      this.$showAlertToast();
    }
  }
};
</script>

<style lang="less" scoped>
.life {
  .tool-bar {
    display: flex;
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 6;
    height: 95px;
    align-items: center;
    transition: all 0.4s;
    padding: 0 34px;
    &.fixed-bar {
      background-color: @my-blue;
    }
    .message {
      transform: scale(1.1);
    }
    span {
      font-size: 26px;
      margin-left: 10px;
      color: #fff;
    }
  }
  img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .main-menu {
    margin: 322px 34px 44px 34px;
    height: 180px;
    background: #ffffff;
    position: relative;
    box-shadow: @shadow;
    border-radius: 24px;
    display: flex;
    justify-content: space-around;
    .item-wrapper {
      flex: 25%;
      font-size: 26px;
      svg {
        transform: scale(1.2);
        margin-bottom: 20px;
      }
    }
  }
  .ad {
    background-image: url(../assets/ad4.png);
    margin: 0 34px 32px 34px;
    height: 208px;
    border-radius: 24px;
  }
  .hot-content {
    padding: 47px 20px 23px 20px;
    box-shadow: @shadow;
    margin: 0 34px;
    border-radius: 24px;
  }
}
</style>
