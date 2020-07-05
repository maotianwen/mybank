<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: ''
    };
  },
  watch: {
    $route(to, from) {
      const end = to.path;
      const start = from.path;
      console.log(to.path, from.path);
      if (end.includes('login') || start.includes('login')) {
        this.transitionName = 'fade';
      } else {
        this.transitionName = start < end ? 'slide-left' : 'slide-right';
      }
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.fade-enter-active {
  transition: all 0.3s;
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.3s;
  opacity: 0;
}
.slide-left-enter-active {
  animation: slideleft 0.3s;
}
.slide-left-leave-active {
  opacity: 0;
}

.slide-right-enter-active {
  animation: slideright 0.3s;
}
.slide-right-leave-active {
  opacity: 0;
}
@keyframes slideleft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideright {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
