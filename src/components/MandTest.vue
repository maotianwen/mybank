<template>
  <div>
    <p>haha</p>
    <md-button
      type="warning"
      round
      :loading="loadingState"
      @click="fakeLoading"
      :style="'width:200px;margin:0 auto'"
      >贷款须谨慎</md-button
    >
    <md-bill title="借款电子票据" no="12345689" water-mark="我操你大爷">
      <md-detail-item title="借款金额">
        &yen;30,000
      </md-detail-item>
      <md-detail-item title="收款账户">
        <md-icon name="bank-zs" svg style="margin-right:10px;"></md-icon
        >招商银行(尾号xxxx)
      </md-detail-item>
      <md-detail-item title="借款期数" content="12期" />
      <md-detail-item title="正常还款总息">
        &yen;140.50
      </md-detail-item>
      <md-detail-item title="还款">
        <md-tag
          size="small"
          shape="fillet"
          type="fill"
          fill-color="#858B9C"
          style="margin-right:4px;"
          >首次</md-tag
        >
        &yen;404.50&nbsp;(9月22日)
      </md-detail-item>
    </md-bill>
  </div>
</template>

<script>
export default {
  name: "MandTest",
  components: {},
  data() {
    return {
      loadingState: false
    };
  },
  mounted() {
    // this.makeSome();
    this.api.getProvinces().then(res => {
      console.log(res.data);
    });
  },
  methods: {
    fakeLoading() {
      this.loadingState = true;
      setTimeout(() => {
        this.loadingState = false;
      }, 500);
    },
    makeSome() {
      this.axios
        .get("https://lab.isaaclin.cn/nCoV/api/provinceName?lang=zh")
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>

<style lang="less" scoped></style>
