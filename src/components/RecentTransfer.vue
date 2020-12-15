<template>
  <div class="recent-transfer fade-in">
    <ContentTitle title="最近转账" :needArrow="false" />
    <div class="no-record" v-if="!transferRecord.length">
      <img src="../assets/empty-transfer.png" alt="" />
      <span>最近没有转账记录。</span>
    </div>
    <div class="record-wrapper" v-if="transferRecord.length">
      <div
        class="record"
        :class="unfoldList[index] && 'unfold'"
        v-for="(item, index) in transferRecord"
        :key="index"
      >
        <div class="user-info">
          <svg-icon :iconClass="`avatar${avatarList[index]}`" class="avatar" />
          <span class="username">{{ item.name }}</span>
          <svg-icon
            :iconClass="'grey-arrow'"
            class="arrow"
            :class="unfoldList[index] && 'unfold'"
            @click.native="() => toggleHeight(index)"
          />
        </div>
        <div class="bank-info">
          <svg-icon :iconClass="item.bankIcon" />
          <span class="bankname">{{ item.bankName }}</span>
          <span class="tel-end">尾号({{ item.account.slice(-4) }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'RecentTransfer',
  data() {
    return {
      unfoldList: {},
      avatarList: []
    };
  },
  computed: {
    ...mapState(['transferRecord'])
  },
  watch: {
    transferRecord: 'updateList'
  },
  mounted() {
    this.updateList();
    this.generateRandomAvatar();
  },
  methods: {
    toggleHeight(foldIndex) {
      this.unfoldList[foldIndex] = !this.unfoldList[foldIndex];
    },
    updateList() {
      this.transferRecord.forEach((item, index) => {
        this.$set(this.unfoldList, index, false);
      });
      this.avatarList.push((Math.random() * 6) >> 0);
    },
    generateRandomAvatar() {
      const len = this.transferRecord.length;
      const arr = Array.from({ length: len }, () => (Math.random() * 6) >> 0);
      this.avatarList = arr;
    }
  }
};
</script>

<style lang="less" scoped>
.record-wrapper {
  margin-top: 46px;
  margin-left: 34px;
  margin-right: 34px;
}
.no-record {
  font-size: 26px;
  position: relative;
  margin-left: 146px;
  img {
    height: 300px;
  }
  span {
    position: absolute;
    bottom: 34px;
    left: 234px;
  }
}
.record {
  font-size: 26px;
  height: 80px;
  overflow: hidden;
  transition: all 0.2s ease;
  margin-bottom: 28px;
  &.unfold {
    height: 180px;
  }
  .user-info {
    display: flex;
    height: 80px;
    align-items: center;
    font-size: 26px;
    .avatar {
      transform: scale(1.8);
      margin-left: 18px;
    }
    .username {
      margin-left: 30px;
    }
    .arrow {
      transition: all 0.4s;
      width: 40px;
      margin-left: auto;
      transform: scale(0.9);
      &.unfold {
        transform: rotateZ(180deg) scale(0.9);
      }
    }
  }
  .bank-info {
    height: 82px;
    display: flex;
    align-items: center;
    margin-left: 94px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    svg {
      transform: scale(1.2);
    }
    .bankname {
      margin-left: 24px;
    }
    .tel-end {
      font-size: 22px;
      color: @my-grey;
      margin-left: 15px;
      font-weight: 600;
    }
  }
}
</style>
