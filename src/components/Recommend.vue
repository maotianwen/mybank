<template>
  <div class="recommend">
    <ContentTitle title="为您推荐" />
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
import ContentTitle from '@/components/ContentTitle';

export default {
  name: 'Recommend',
  components: {
    StairAnimation,
    ContentTitle
  },
  methods: {
    async mapHotFundtoData() {
      const res = await this.$api.getHotFund();
      this.recommendArr = res.data.data.rank.slice(0, 3);
    },
    jumpToDetail(code) {
      this.$store.commit('showLoading');
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
