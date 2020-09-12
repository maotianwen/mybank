<template>
  <div class="finance add-padding-bottom">
    <Header title="理财" :needMessage="true" :needBack="false" />
    <div class="storage regular-margin">
      <div class="benefit">
        <p class="nums">0.48</p>
        <p>昨日收益(元)</p>
      </div>
      <div class="total-storage">
        <p class="nums">0.00</p>
        <p>总持仓(元)</p>
      </div>
    </div>
    <div class="main-part regular-margin">
      <div v-for="item in menuArr" :key="item.id" class="flex-item">
        <svg-icon :iconClass="item.icon" :className="'flex-icon'" />
        <p>{{ item.name }}</p>
      </div>
      <div class="flex-item">
        <svg-icon :iconClass="'all'" :className="'flex-icon'" />
        <p>全部</p>
      </div>
    </div>
    <ContentTitle title="理财收益" />
    <div
      v-for="item in fundArr"
      :key="item.id"
      class="fund-recommend regular-margin"
    >
      <div class="year-growth ">
        <p class="red-percent">{{ item.rate }}</p>
        <p class="sevenday">{{ item.description }}</p>
      </div>
      <div class="description">
        <p class="main-title">{{ item.title }}</p>
        <p class="sub-title">{{ item.subtitle }}</p>
      </div>
    </div>
    <ContentTitle title="财富专栏" />
    <div class="wealth-part regular-margin background-align"></div>
    <ContentTitle title="财经热点" />
    <div class="hot-content regular-margin">
      <ArticleItem
        v-for="item in articleArr"
        :articleInfo="item"
        :key="item.index"
      />
    </div>
  </div>
</template>

<script>
import ContentTitle from '@/components/ContentTitle';
import ArticleItem from '@/components/ArticleItem';
import Header from '@/components/Header';
export default {
  name: 'Finance',
  components: {
    ContentTitle,
    ArticleItem,
    Header
  },
  data() {
    return {
      articleArr: [
        { title: '债券型基金成重灾区新基金', index: 1, hotNums: 3580 },
        { title: '中国拟全面支持半导体行业', index: 2, hotNums: 2534 },
        { title: '证券市场评论:尊重市场，合理调控', index: 3, hotNums: 2350 }
      ],
      menuArr: [
        { name: '基金', url: '', icon: 'fund', id: 0 },
        { name: '黄金', url: 'gold/000216', icon: 'gold', id: 1 },
        { name: '保险', url: '', icon: 'insurance', id: 2 },
        { name: '存款', url: '', icon: 'save', id: 3 },
        { name: '证券', url: '', icon: 'security', id: 4 },
        { name: '交易查询', url: '', icon: 'check-transaction', id: 5 },
        { name: '财富组合', url: '', icon: 'wealth-combo', id: 6 }
      ],
      fundArr: [
        {
          title: '建信现金添益A',
          subtitle: '无固定期限',
          rate: '2.92%',
          description: '7日年化',
          id: 1,
          code: '003022'
        },
        {
          title: '汇添富和聚宝',
          subtitle: '货币市场基金',
          rate: '2.04%',
          description: '7日年化',
          id: 2,
          code: '000600'
        },
        {
          title: '新华优选消费',
          subtitle: '混合基金',
          rate: '2.45%',
          description: '7日年化',
          id: 3,
          code: 519150
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.regular-margin {
  margin: 0 34px;
}
.nums {
  font-family: DINAlternate-Bold, DINAlternate;
}
.finance {
  padding-top: 120px;
  .storage {
    height: 220px;
    background: linear-gradient(180deg, #acdafc 0%, #0066b3 100%);
    border-radius: 24px;
    display: flex;
    align-items: center;
    padding: 12px 36px 0 36px;
    text-align: left;
    color: #ffffff;
    box-shadow: @shadow;
    margin-bottom: 40px;
    .benefit {
      font-size: 28px;
      .nums {
        font-size: 36px;
      }
    }
    .total-storage {
      font-size: 28px;
      margin-left: auto;
      text-align: right;
      .nums {
        font-size: 32px;
      }
    }
  }
  .fund-recommend {
    margin-bottom: 38px;
    display: flex;
    padding: 24px;
    box-shadow: @shadow;
    border-radius: 24px;
    text-align: left;
    align-items: center;
    .red-percent {
      margin-bottom: 20px;
      font-size: 54px;
    }
    .sevenday {
      font-size: 26px;
      color: @my-red;
    }
    .description {
      margin-left: 160px;
      .main-title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .sub-title {
        color: @my-grey;
        font-size: 24px;
      }
    }
  }
  .hot-content {
    box-shadow: @shadow;
    padding: 47px 20px 24px 20px;
    margin-bottom: 32px;
    border-radius: 24px;
  }
  .wealth-part {
    height: 188px;
    box-shadow: @shadow;
    margin-bottom: 32px;
    border-radius: 24px;
    background-image: url(../assets/ad5.jpg);
  }
  .main-part {
    height: 296px;
    padding-top: 32px;
    font-size: 26px;
    margin-bottom: 40px;
    white-space: pre-wrap;
    border-radius: 24px;
    box-shadow: @shadow;
    .flex-item {
      display: inline-block;
      width: 25%;
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
