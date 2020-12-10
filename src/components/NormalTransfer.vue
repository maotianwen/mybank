<template>
  <div class="normal-transfer fade-in">
    <ContentTitle title="普通转账" :needArrow="false" />
    <PopWindow v-if="showBankList" @close="closePopWindow" />
    <div class="panel regular-margin">
      <div class="basic-info">
        <span>收款户名</span>
        <input type="text" v-model="name" placeholder="请输入收款户名" />
        <svg-icon iconClass="address-list" @click.native="openAddressList" />
      </div>
      <div class="basic-info">
        <span>收款账号</span>
        <input
          type="text"
          v-model="account"
          placeholder="请输入收款账号或手机号"
        />
      </div>
      <div class="basic-info bank">
        <span>收款银行</span>
        <div class="select-bank" @click="openBankList">
          <div v-show="curBankName" class="current-bank">
            <svg-icon :iconClass="curBankIcon" />
            <span>{{ curBankName }}</span>
          </div>
          <div v-show="!curBankName" class="default">
            <span>请选择收款银行</span>
            <svg-icon iconClass="bank-service" />
          </div>
        </div>
      </div>
      <div class="fund-info">
        <span>转账金额</span>
        <input type="text" v-model="money" />
      </div>
      <div class="fund-info">
        <span>转账附言</span>
        <input type="text" />
        <svg-icon
          iconClass="postscript"
          class="postscript"
          @click.native="openCommentList"
        />
      </div>
    </div>
    <div class="next-step regular-margin">下一步</div>
  </div>
</template>

<script>
import PopWindow from '@/components/PopWindow';

export default {
  name: 'NormalTransfer',
  components: {
    PopWindow
  },
  data() {
    return {
      name: '',
      account: '',
      bank: '',
      money: '¥',
      showBankList: false,
      curBankName: '',
      curBankIcon: ''
    };
  },
  methods: {
    openAddressList() {
      this.$AP.choosePhoneContact(res => {
        this.name = res.name;
        this.account = res.mobile;
      });
    },
    openBankList() {
      this.showBankList = true;
    },
    closePopWindow(bankName, bankIcon) {
      this.showBankList = false;
      if (bankName && bankIcon) {
        this.curBankName = bankName;
        this.curBankIcon = bankIcon;
      }
    },
    openCommentList() {
      console.log(123);
    }
  }
};
</script>

<style lang="less" scoped>
.normal-transfer {
  svg {
    margin-left: -50px;
    transform: translateY(6px);
  }
  .panel {
    box-shadow: @shadow;
    border-radius: 24px;
    margin-bottom: 76px;
    font-size: 26px;
    padding: 38px 0 50px 24px;
    text-align: left;
    input,
    .select-bank {
      margin-left: 12px;
      width: 474px;
      font-size: 32px;
    }
    input {
      padding: 4px 8px;
      border-radius: 0;
      border-bottom: 1px solid @my-grey;
      &::-webkit-input-placeholder {
        color: @my-grey;
      }
      &:focus {
        border-color: @my-blue;
      }
    }
    .select-bank {
      display: inline-block;
      padding: 4px 8px;
      border-bottom: 1px solid @my-grey;
      .default {
        display: flex;
        align-items: center;
        span {
          color: @my-grey;
        }
        svg {
          margin-left: auto;
        }
      }
      .current-bank {
        display: inline-flex;
        span {
          color: #000;
          margin-left: 20px;
        }
      }
    }
    .basic-info {
      margin-bottom: 38px;
      &.bank {
        margin-bottom: 142px;
      }
    }
    .fund-info {
      margin-bottom: 38px;
    }
  }

  .next-step {
    height: 87px;
    line-height: 87px;
    background: #0066b3;
    border-radius: 8px;
    font-size: 36px;
    font-family: PingFangSC;
    color: #ffffff;
  }
}
</style>
