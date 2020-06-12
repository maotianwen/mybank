<template>
  <div>
    <keep-alive>
      <component :is="comA"></component>
    </keep-alive>
    <button @click="comA = comA === 'Gender' ? 'Profile' : 'Gender'">
      点击切换组件
    </button>
    <button @click="$router.back()">back</button>
  </div>
</template>

<script>
import Gender from '@/components/Gender';
import Profile from '@/components/Profile';

export default {
  name: 'Cash',
  components: {
    Gender,
    Profile
  },
  data() {
    return {
      comA: 'Gender'
    };
  }
};
</script>

<style lang="less" scoped></style>
