<template>
  <div class="recommend">
    <div class="title">
      <span>为您推荐</span>
      <svg
        width="22px"
        height="35px"
        viewBox="0 0 22 35"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            id="set-color"
            transform="translate(-40.000000, -24.000000)"
            fill="#000000"
          >
            <g transform="translate(30.000000, 19.000000)">
              <g>
                <path
                  d="M31.8164062,9.59326172 L31.8164062,6.19628906 C31.8164062,5.90185547 31.4780273,5.73925781 31.2495117,5.91943359 L11.4389648,21.3925781 C10.7182617,21.9550781 10.7182617,23.0405273 11.4389648,23.6030273 L31.2495117,39.0761719 C31.4824219,39.2563477 31.8164062,39.09375 31.8164062,38.7993164 L31.8164062,35.4023438 C31.8164062,35.1870117 31.715332,34.9804688 31.5483398,34.8486328 L15.7280273,22.5 L31.5483398,10.1469727 C31.715332,10.0151367 31.8164062,9.80859375 31.8164062,9.59326172 Z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <StairAnimation animationName="down-up" class="item-wrapper">
      <div
        v-for="item in recommendArr"
        :key="item.id"
        class="list-item"
        :style="`transition:all ${item.id / 10}s`"
        @click="() => jumpToDetail(item.code)"
      >
        <p class="item-title">{{ item.title }}</p>
        <p class="item-subtitle">{{ item.subtitle }}</p>
        <p class="item-rate">{{ item.rate }}</p>
        <p class="item-description">{{ item.description }}</p>
      </div>
    </StairAnimation>
  </div>
</template>

<script>
import StairAnimation from '@/components/StairAnimation';

export default {
  name: 'Recommend',
  components: {
    StairAnimation
  },
  methods: {
    async mapHotFundtoData() {
      const res = await this.$api.getHotFund();
      this.recommendArr = res.data.data.rank.slice(0, 3);
    },
    jumpToDetail(code) {
      this.$AP.showLoading();
      this.$router.push(`gold/${code}`);
    }
  },
  mounted() {
    // this.mapHotFundtoData();
  },
  data() {
    return {
      recommendArr: [
        {
          title: '招商行业精选',
          subtitle: '无固定期限',
          rate: '2.92%',
          description: '七日年化收益',
          id: 1,
          code: '000746'
        },
        {
          title: '鹏华酒指数',
          subtitle: '股票基金',
          rate: '3.65%',
          description: '七日年化收益',
          id: 2,
          code: '160632'
        },
        {
          title: '新华优选消费',
          subtitle: '混合基金',
          rate: '2.45%',
          description: '七日年化收益',
          id: 3,
          code: 519150
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.recommend {
  text-align: left;
  .title {
    display: flex;
    align-items: center;
    padding-left: 34px;
    margin-bottom: 20px;
    span {
      font-size: 34px;
      display: inline-block;
      font-family: PingFangSC;
    }
    svg {
      width: 16px;
      transform: rotateY(-180deg);
      margin: 0 40px 0 auto;
    }
  }
  .item-wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  .list-item {
    width: 210px;
    display: inline-block;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    padding: 20px 0 20px 18px;
    .item-title {
      color: #000000;
      letter-spacing: 2px;
      font-size: 26px;
      margin-bottom: 7px;
    }
    .item-subtitle {
      font-size: 24px;
      color: #9b9b9b;
      margin-bottom: 24px;
    }
    .item-rate {
      font-family: DINAlternate-Bold, DINAlternate;
      font-size: 36px;
      font-weight: bold;
      letter-spacing: 2px;
      color: #ef3535;
      margin-bottom: 7px;
    }
    .item-description {
      font-size: 24px;
      color: #0066b3;
      letter-spacing: 1px;
    }
  }
}
</style>
