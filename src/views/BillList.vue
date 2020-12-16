<template>
  <div class="bill-list">
    <div class="header">
      <div class="left-part">
        <p class="date">2020-11</p>
        <p class="data">支出¥940.22 收入¥0.22</p>
      </div>
      <div class="filter">筛选</div>
    </div>
    <transition-group name="smooth">
      <Bill
        :dataObj="item"
        v-for="(item, index) in list"
        :key="item.id"
        @delete="() => deleteItem(index)"
      />
    </transition-group>
  </div>
</template>

<script>
import Bill from '@/components/Bill';

export default {
  name: 'BillList',
  components: {
    Bill
  },
  data() {
    return {
      list: [
        {
          title: '刷脸支付-沈航门店2号店',
          type: '生活服务',
          time: '11-27 16:38',
          icon: 'face-pay',
          cost: 11.0,
          id: 0
        },
        {
          title: '兰州拉面(南食堂店)外卖订单',
          type: '餐饮美食',
          time: '11-17 12:18',
          icon: 'eleme',
          cost: 16.0,
          id: 1
        },
        {
          title: '去哪儿酒店',
          type: '交通出行',
          time: '11-14 18:48',
          icon: 'gowhere',
          cost: 191.0,
          id: 2
        },
        {
          title: '话费充值',
          type: '通讯物流',
          time: '10-24 11:40',
          icon: 'china-mobile',
          cost: 99.8,
          id: 3
        },
        {
          title: '刷脸支付',
          type: '生活服务',
          time: '11-27 16:38',
          icon: 'face-pay',
          cost: 11.0,
          id: 4
        },
        {
          title: '去哪儿酒店',
          type: '交通出行',
          time: '11-14 18:48',
          icon: 'gowhere',
          cost: 191.0,
          id: 5
        },
        {
          title: '话费充值',
          type: '通讯物流',
          time: '10-24 11:40',
          icon: 'china-mobile',
          cost: 99.8,
          id: 6
        }
      ]
    };
  },
  methods: {
    deleteItem(index) {
      this.list.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped>
.bill-list {
  padding-bottom: 116px;
}
.header {
  // height: 87px;
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  padding: 10px 58px 12px 24px;
  text-align: left;
  .date,
  .filter {
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
  }
  .filter {
    margin-left: auto;
  }
  .date {
    margin-bottom: 10px;
  }
  .data {
    font-size: 26px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #455a64;
  }
}

.smooth-enter-active,
.smooth-leave-active {
  transition: all 0.6s ease;
}
.smooth-enter-from,
.smooth-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.smooth-leave-active {
  position: absolute;
}
.smooth-move {
  transition: transform 0.6s ease;
}
</style>
