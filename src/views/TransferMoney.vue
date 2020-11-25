<template>
  <div class="transfer-money">
    <Header title="转账" :needBack="true" />
    <div class="wrapper regular-margin">
      <div v-for="item in menu" :key="item.id" class="flex-item">
        <svg-icon :iconClass="item.icon" :className="'flex-icon'" />
        <p>{{ item.name }}</p>
      </div>
      <svg-icon :iconClass="'grey-arrow'" :class="'arrow-class'" />
    </div>
    <!-- <span @click="openAddressList">收款人名册</span>
    <ul>
      <li v-for="item in list" :key="item.tel">
        {{ item.name }}
        {{ item.tel }}
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'TransferMoney',
  components: {},
  data() {
    return {
      list: [{ name: '毛天问', tel: 13908493441 }],
      menu: [
        { name: '普通转账', icon: 'normal-transfer', id: 0 },
        { name: '转账记录', icon: 'transfer-record', id: 1 },
        { name: '他行卡转入', icon: 'other-transfer', id: 2 },
        { name: '多人转账', icon: 'group', id: 3 },
        { name: '普通转账', icon: 'normal-transfer', id: 4 },
        { name: '普通转账', icon: 'normal-transfer', id: 5 }
      ]
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
  .wrapper {
    box-shadow: @shadow;
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    margin-top: 36px;
    height: 182px;
    font-size: 26px;
    text-align: left;
    white-space: pre-wrap;
    padding-top: 35px;
    .flex-item {
      display: inline-block;
      text-align: center;
      width: 25%;
      height: 90px;
      margin-bottom: 65px;
      .flex-icon {
        transform: scale(1.2);
        margin-bottom: 10px;
      }
    }
    .arrow-class {
      position: absolute;
      bottom: 4px;
    }
  }
}
</style>
