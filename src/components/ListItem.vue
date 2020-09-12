<template>
  <div class="list-item">
    <svg-icon :iconClass="itemObj.icon" :className="'icon'" />
    <div>
      <p class="main-title">{{ itemObj.name }}</p>
      <p class="sub-title">{{ itemObj.subName }}</p>
    </div>
    <div class="border-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    itemObj: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="less" scoped>
.list-item {
  background-color: #ffffff;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  height: 124px;
  padding-left: 88px;
  margin-bottom: 4px;
  .icon {
    height: 48px;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .main-title {
    font-size: 26px;
    color: #000000;
    letter-spacing: 2px;
  }
  .sub-title {
    font-size: 22px;
    color: #9b9b9b;
    letter-spacing: 1px;
  }
  .border-bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 88px;
    height: 1px;
    opacity: 0.2;
    background-color: #9b9b9b;
  }
}
</style>
