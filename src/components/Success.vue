<template>
  <div class="mask">
    <div class="wrapper align-middle" :class="fade && 'fade'">
      <svg-icon iconClass="success" />
      <span>{{ successMessage }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'Success',
  data() {
    return {
      fade: false
    };
  },
  computed: {
    ...mapState(['successNotice', 'successMessage'])
  },
  mounted() {
    // this.preventBodyScroll();
    this.autoHide();
  },
  methods: {
    ...mapMutations(['hideSuccessNotice']),
    preventBodyScroll() {
      document.body.classList.add('modalOpen');
    },
    allowBodyScroll() {
      document.body.classList.remove('modalOpen');
    },
    autoHide() {
      setTimeout(() => {
        this.fade = true;
      }, 1500);
      setTimeout(() => {
        this.hideSuccessNotice();
      }, 1800);
    }
  },
  destroyed() {
    // this.allowBodyScroll();
  }
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.align-middle {
  position: absolute;
  left: 50%;
  top: 50%;
}
.wrapper {
  border: 1px solid #b7eb8f;
  background-color: #f6ffed;
  color: #52c41a;
  border-radius: 4px;
  font-size: 32px;
  padding: 20px 18px;
  display: flex;
  align-items: center;
  animation: slideUp 0.4s linear forwards;
  span {
    margin-left: 18px;
    white-space: nowrap;
  }
}

.fade {
  animation: fadeout 0.8s forwards;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}
</style>
