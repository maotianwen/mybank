<template>
  <transition name="fade">
    <div class="welcome" v-if="$store.state.showWelcomePage">
      <svg-icon :iconClass="'banner'" :className="'logo'" />
      <p>Copyright © 2020 SAU-MTW. All rights reserved.</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('haveWelcomed');
    }, 1000);
  }
};
</script>

<style lang="less" scoped>
.welcome {
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  svg,
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo {
    width: 392px;
    height: 258px;
    bottom: 236px;
  }

  p {
    font-size: 18px;
    font-family: Helvetica;
    letter-spacing: 1px;
    color: #000000;
    bottom: 144px;
    white-space: nowrap;
  }
}

.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.8s;
}
</style>
