<template>
  <div class="search-wrapper">
    <div class="header">
      <input
        type="text"
        placeholder="输入基金代码或疑问"
        v-model="inputValue"
        @input="search"
        @blur="search"
        @change="search"
      />
      <svg-icon
        iconClass="delete"
        :className="'exit'"
        @click.native="
          inputValue = '';
          notFound = false;
        "
      />
      <span @click="$router.go(-1)">取消</span>
    </div>
    <transition name="not-found">
      <div v-show="notFound" class="error-item">
        <img src="../assets/mascot.png" alt="" />
        <p>糟糕！没找到想要的内容啊！</p>
      </div>
    </transition>
    <transition name="not-found">
      <p v-show="!notFound" class="hot-search">热门搜索</p>
    </transition>
    <StairAnimation animationName="stair" v-if="!notFound">
      <div
        class="hint"
        v-for="(item, index) in searchArr"
        :key="item.id"
        @click="$router.push(item.url)"
        :style="{
          transition: `all 0.6s`,
          top: `${124 + index * 40}px`
        }"
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
        { text: '怎么登录？', url: 'login', id: 1 },
        { text: '鹏华酒分级(160632)', url: 'gold/160632', id: 2 }
      ],
      defaultArr: [
        { text: '怎么登录？', url: 'login', id: 1 },
        { text: '鹏华酒分级(160632)', url: 'gold/160632', id: 2 }
      ],
      notFound: false
    };
  },
  computed: {
    ...mapState(['searchList'])
  },
  mounted() {
    this.$store.commit('hideLoading');
  },
  methods: {
    search() {
      debounce(() => {
        let canNotFound = true;
        const reg = /\d{6}/;
        //输入框为空
        if (!this.inputValue.length) {
          this.notFound = false;
          this.searchArr = this.defaultArr;
          return;
        }
        //输入的是基金代码
        if (this.inputValue.match(reg)) {
          const code = this.inputValue.match(reg)[0];
          this.getFundTitle(code);
          return;
        }
        for (let word of this.inputValue) {
          if (this.searchList.some(item => item.keywords.has(word))) {
            this.notFound = false;
            canNotFound = false;
            this.searchArr = this.searchList.filter(item =>
              item.keywords.has(word)
            );
          }
        }
        if (canNotFound) {
          this.notFound = true;
        }
      }, 500);
    },
    async getFundTitle(code) {
      const res = await this.$api.getFund(code);
      console.log(res.data.data);
      if (res.data.data.length) {
        this.notFound = false;
        const obj = res.data.data[0];
        this.searchArr = [
          {
            text: `${obj.name}(${obj.code})`,
            url: `gold/${obj.code}`,
            id: 10000
          }
        ];
      } else {
        this.notFound = true;
      }
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
.hot-search {
  text-align: left;
  letter-spacing: 3px;
  transition: all 0.6s;
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  margin-bottom: 42px;
}

.hint {
  font-size: 26px;
  border: 1px solid #0066b3;
  position: absolute;
  padding: 5px 36px 5px 36px;
  border-radius: 12px;
  box-shadow: 0px 0px 4px 1px #86a2ef;
}

.error-item {
  transition: all 0.6s;
  position: absolute;
  width: 100%;
  height: 400px;
  top: 184px;
  img {
    height: 300px;
  }
  p {
    position: absolute;
    top: 60%;
    right: 194px;
    font-size: 26px;
  }
}
.not-found-enter {
  opacity: 0;
}

.not-found-leave-to {
  opacity: 0;
}
</style>
