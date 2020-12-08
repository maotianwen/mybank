<template>
  <div class="steps">
    <section
      v-for="item in buySteps"
      :key="item.id"
      class="step-item"
      :class="`item${item.id}`"
    >
      <p>{{ item.topText }}</p>
      <i class="circle" :class="`circle${item.id}`"></i>
      <p>{{ item.bottomText }}</p>
    </section>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'BuySteps',
  data() {
    return {
      buySteps: [
        { topText: '购买', bottomText: '现在买入', id: 0 },
        { topText: '确认份额', bottomText: ``, id: 1 },
        { topText: '购买', bottomText: ``, id: 2 }
      ]
    };
  },
  mounted() {
    const eightDays = 8 * 24 * 60 * 60 * 1000;
    const timestamp = Date.now() + eightDays;
    const month = new Date(timestamp).getMonth() + 1;
    const day = new Date(timestamp).getDate() + 1;
    const MonthString = month < 10 ? `0${month}` : `${month}`;
    const DayString = day < 10 ? `0${day}` : `${day}`;
    const DateString = `${MonthString}-${DayString}`;
    this.buySteps[1].bottomText = DateString;
    this.buySteps[2].bottomText = DateString;
  }
};
</script>

<style lang="less" scoped>
.steps {
  display: flex;
  position: relative;
  justify-content: space-between;
  .step-item {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .circle {
      border-radius: 50%;
      z-index: 1;
      width: 20px;
      height: 20px;
      background-color: @my-grey;
      &.circle0 {
        background-color: @my-blue;
      }
      &.circle1 {
        margin: 14px auto;
      }
      &.circle2 {
        margin-left: auto;
      }
    }
    &.item1 {
      text-align: center;
      color: @my-grey;
    }
    &.item2 {
      text-align: right;
      color: @my-grey;
    }
  }
  .line {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    height: 4px;
    background-color: @my-grey;
  }
}
</style>
