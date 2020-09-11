<template>
  <div class="transfer-money">
    <Header title="转账" :needBack="true" />
    <span @click="openAddressList">收款人名册</span>
    <ul>
      <li v-for="item in list" :key="item.tel">
        {{ item.name }}
        {{ item.tel }}
      </li>
    </ul>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'TransferMoney',
  components: {
    Header
  },
  data() {
    return {
      list: [{ name: '毛天问', tel: 13908493441 }]
    };
  },
  methods: {
    openAddressList() {
      this.$AP.choosePhoneContact(res => {
        this.list.push({ name: res.name, tel: res.mobile });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.transfer-money {
  padding-top: 87px;
}
</style>
