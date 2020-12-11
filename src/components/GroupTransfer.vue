<template>
  <div class="group-transfer">
    <ContentTitle title="向多人转账" :needArrow="false" />
    <div class="panel regular-margin">
      <div class="flex-wrapper">
        <div class="add">
          <div class="row rec"></div>
          <div class="col rec"></div>
        </div>
        <span class="group-name">常用转账组</span>
      </div>
      <div
        class="flex-wrapper group"
        v-for="item in groups"
        :key="item.id"
        @click="() => selectGroup(item)"
        :class="item.isSelected && 'selected'"
      >
        <People :actived="item.isSelected" />
        <span class="group-name">{{ item.name }}</span>
        <span class="group-size">{{ item.people.length }}人</span>
      </div>
    </div>
    <div class="next-step regular-margin">下一步</div>
  </div>
</template>

<script>
import People from '@/components/svg/People';

export default {
  name: 'GroupTransfer',
  components: {
    People
  },
  data() {
    return {
      groups: [
        { name: '测试组', people: [], id: 0, isSelected: false },
        { name: '测试组', people: [], id: 1, isSelected: false },
        { name: '测试组', people: [], id: 2, isSelected: false },
        { name: '测试组', people: [], id: 3, isSelected: false }
      ]
    };
  },
  methods: {
    selectGroup(item) {
      item.isSelected = !item.isSelected;
    }
  }
};
</script>

<style lang="less" scoped>
.group-transfer {
  .panel {
    box-shadow: @shadow;
    border-radius: 24px;
    font-size: 34px;
    padding-bottom: 32px;
    margin-bottom: 90px;
    .flex-wrapper {
      display: flex;
      padding-left: 24px;
      padding-right: 54px;
      align-items: center;
      height: 122px;
      margin-bottom: 4px;
      .group-name {
        margin-left: 32px;
      }
    }
    .add {
      width: 72px;
      height: 70px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid @my-grey;
      position: relative;
      .rec {
        background-color: #d8d8d8;
        border-radius: 2px;
        width: 40px;
        height: 3px;
        position: absolute;
        top: 50%;
        left: 50%;
      }
      .row {
        transform: translate(-50%, -50%);
      }
      .col {
        transform: translate(-50%, -50%) rotateZ(90deg);
      }
    }
    .group {
      transition: all 0.4s;

      .group-size {
        margin-left: auto;
        font-size: 28px;
        color: @my-grey;
      }
      &.selected {
        background-color: @my-blue;
        color: #ffffff;
        .group-size {
          color: #ffffff;
        }
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
</style>
