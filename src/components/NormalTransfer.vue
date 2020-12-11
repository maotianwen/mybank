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
            <span>{{ curBankName }}</span>
            <svg-icon :iconClass="curBankIcon" />
          </div>
          <div v-show="!curBankName" class="default">
            <span>请选择收款银行</span>
            <svg-icon iconClass="bank-service" />
          </div>
        </div>
      </div>
      <div class="fund-info money">
        <span>转账金额</span>
        <input type="text" v-model="money" @blur="formattedMoney" />
      </div>
      <div class="fund-info">
        <span>转账附言</span>
        <input type="text" v-model="postScript" />
        <svg-icon
          iconClass="postscript"
          class="postscript"
          @click.native="openCommentList"
        />
      </div>
    </div>
    <div class="next-step regular-margin" @click="submitTransfer">下一步</div>
  </div>
</template>

<script>
import PopWindow from '@/components/PopWindow';
import { mapMutations, mapState } from 'vuex';

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
      money: '',
      showBankList: false,
      curBankName: '',
      curBankIcon: '',
      postScript: ''
    };
  },
  computed: {
    ...mapState(['transferRecord'])
  },
  methods: {
    ...mapMutations(['addTransferRecord']),
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
    formattedMoney() {
      if (this.money) {
        if (Number(this.money)) {
          this.money = `¥ ${this.money}`;
        }
      }
    },
    openCommentList() {
      this.$AP.showToast({
        content: '想填啥填啥 - -',
        duration: 800
      });
    },
    checkAccount(account) {
      const isNum = /^[0-9]*$/;
      if (isNum.test(account)) {
        return account.length === 11 || account.length === 19;
      }
      return false;
    },
    submitTransfer() {
      const moneyNum = parseFloat(this.money.slice(2));
      const accountName = this.account;
      const userName = this.name;
      if (!userName || !moneyNum || !this.curBankName) {
        console.log('error');
        return false;
      }
      if (!this.checkAccount(accountName)) {
        console.log('error1');
        return false;
      }
      this.addTransferRecord({
        name: userName,
        account: accountName,
        bankName: this.curBankName,
        bankIcon: this.curBankIcon,
        money: moneyNum,
        postScript: this.postScript
      });
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
        span {
          color: @my-grey;
        }
        svg {
          margin-left: 190px;
        }
      }
      .current-bank {
        span {
          color: #000;
        }
        svg {
          transform: scale(0.8) translateY(12px);
          margin-left: 4px;
        }
      }
    }
    .basic-info {
      margin-bottom: 38px;
      &.bank {
        margin-bottom: 62px;
      }
    }
    .fund-info {
      margin-bottom: 38px;
      &.money {
        position: relative;
        input {
          font-family: DINAlternate-Bold;
          font-size: 38px;
        }
        svg {
          position: absolute;
          transform: scale(0.7);
          left: 164px;
          bottom: 8px;
        }
      }
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
