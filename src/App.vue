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
    $route: function(to, from) {
      const end = to.path.split('/').filter(item => item !== '').length;
      const start = from.path.split('/').filter(item => item !== '').length;
      // console.log(start, end);
      this.transitionName = start < end ? 'slide-left' : 'slide-right';
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-left-enter-active {
  animation: slideleft 0.3s;
}
.slide-left-leave-active {
  animation: slideright 0.3s reverse;
}

.slide-right-enter-active {
  animation: slideright 0.3s;
}
.slide-right-leave-active {
  animation: slideleft 0.3s reverse;
}
@keyframes slideleft {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideright {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
