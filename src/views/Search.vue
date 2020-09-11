<template>
  <div class="search-wrapper">
    <div class="header">
      <input type="text" v-model="inputValue" @input="search" @blur="search" />
      <svg-icon
        iconClass="exit"
        :className="'exit'"
        @click.native="inputValue = ''"
      />
      <span @click="$router.go(-1)">取消</span>
    </div>
    <p>热门搜索</p>
    <StairAnimation animationName="stair">
      <div
        class="hint"
        v-for="(item, index) in searchArr"
        :key="item.id"
        @click="$router.push(item.url)"
        :style="{ transition: `all 0.6s`, top: `${124 + index * 40}px` }"
      >
        {{ item.text }}
      </div>
    </StairAnimation>
  </div>
</template>

<script>
import StairAnimation from '@/components/StairAnimation';
import { mapState } from 'vuex';
import { debounce } from '@/utils/func';

export default {
  name: 'Search',
  components: {
    StairAnimation
  },
  data() {
    return {
      inputValue: '',
      searchArr: [
        { text: '忘记密码怎么办？', url: 'login', id: 1 },
        { text: '如何购买基金？', url: 'gold/160632', id: 2 }
      ],
      defaultArr: [
        { text: '忘记密码怎么办？', url: 'login', id: 1 },
        { text: '如何购买基金？', url: 'gold/160632', id: 2 }
      ]
    };
  },
  computed: {
    ...mapState(['searchList'])
  },
  methods: {
    search() {
      debounce(() => {
        if (
          this.searchList.some(item => item.keywords.includes(this.inputValue))
        ) {
          this.searchArr = this.searchList.filter(item =>
            item.keywords.includes(this.inputValue)
          );
        } else {
          this.searchArr = this.defaultArr;
        }
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.search-wrapper {
  padding: 28px 70px 0 70px;
}
.header {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  span {
    font-size: 26px;
    margin-left: auto;
  }
  input {
    width: 520px;
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 26px;
    border: 1px solid #0066b3;
    transition: box-shadow 0.4s;
    &:focus {
      box-shadow: 0px 0px 4px 1px #86a2ef;
    }
  }
}
.exit {
  position: absolute;
  transform: scale(0.7);
  right: 168px;
}
p {
  text-align: left;
  letter-spacing: 3px;
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  margin-bottom: 42px;
}
.hint {
  font-size: 24px;
  border: 1px solid #0066b3;
  position: absolute;
  padding: 5px 36px 5px 36px;
  border-radius: 12px;
  box-shadow: 0px 0px 4px 1px #86a2ef;
}
</style>
