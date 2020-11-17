<template>
  <span>{{ finalNum }}</span>
</template>

<script>
export default {
  name: 'CountNum',
  data() {
    return {
      num: 0,
      rfa: null,
      maxNum: 0,
      finalNum: ''
    };
  },
  mounted() {
    this.num = this.startNum;
    this.maxNum = this.endNum;
    this.triggerRfa();
  },
  props: {
    startNum: {
      type: Number,
      default: 0
    },
    endNum: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    decimalPlace: {
      type: Number,
      default: 0
    },
    isPercentage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    triggerRfa() {
      if (this.num >= this.maxNum) {
        this.num = this.maxNum;
        this.finalNum = this.isPercentage
          ? this.num.toFixed(this.decimalPlace) + '%'
          : this.num.toFixed(this.decimalPlace);
        cancelAnimationFrame(this.rfa);
        return;
      } else {
        this.num += this.step;
        this.finalNum = this.isPercentage
          ? this.num.toFixed(this.decimalPlace) + '%'
          : this.num.toFixed(this.decimalPlace);
      }
      this.rfa = requestAnimationFrame(this.triggerRfa);
    }
  }
};
</script>

<style lang="less" scoped></style>
