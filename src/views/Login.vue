<template>
  <div class="login">
    <Back :iconColor="'#000000'" />
    <!-- <img src="../assets/blue-logo.png" alt="" class="logo" />
    <img src="../assets/welcome.png" alt="" class="font" /> -->
    <svg-icon :iconClass="'banner'" :className="'banner'" />
    <div class="inputWrapper">
      <svg-icon :iconClass="'mobile'" :className="'icon mobile'" />
      <input type="text" placeholder="请输入手机号" />
    </div>
    <div class="inputWrapper">
      <!-- <i class="lock-header" :class="{ locked: locked }"></i> -->
      <svg-icon
        :iconClass="'lock-head'"
        :className="'icon lock-head'"
        :class="{ locked: locked }"
      />
      <svg-icon :iconClass="'lock-body'" :className="'icon lock-body'" />
      <input
        type="password"
        class="password"
        placeholder="请输入密码"
        @focus="locked = true"
        @blur="locked = password.length !== 0"
        v-model="password"
      />
      <div class="other-options">
        <p>忘记密码？</p>
        <p>短信登录</p>
      </div>
    </div>
    <button class="login-btn" @click="login">登录</button>
    <button class="register-btn">注册</button>
  </div>
</template>

<script>
import Back from '@/components/Back';
export default {
  name: 'Login',
  components: {
    Back
  },
  data() {
    return {
      locked: false,
      password: ''
    };
  },
  methods: {
    login() {
      this.$store.commit('login');
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  .banner {
    width: 438px;
    height: 288px;
    margin: 124px 0 105px 0;
  }
  .inputWrapper {
    line-height: 0;
    width: 100%;
    position: relative;
    .icon {
      position: absolute;
      left: 26px;
      &.mobile {
        width: 36px;
        height: 46px;
        transform: translateY(-50%);
        top: 50%;
      }
      &.lock-body {
        width: 36px;
        height: 26px;
        top: 34px;
      }
      &.lock-head {
        width: 24px;
        height: 15px;
        left: 32px;
        top: 16px;
        &.locked {
          animation: bounce 0.4s forwards;
        }
      }
    }
  }
  input {
    display: block;
    transition: all 0.4s;
    margin: 0 auto 26px;
    width: 600px;
    height: 76px;
    border-radius: 6px;
    border: 2px solid #c9d0d9;
    font-size: 28px;
    padding-left: 12px;
    &::placeholder {
      color: #b8b9bd;
    }
    &:focus {
      border-color: @my-blue;
    }
    &.password {
      margin-bottom: 40px;
    }
  }
  .other-options {
    display: flex;
    margin: 12px auto 100px;
    width: 600px;
    justify-content: space-between;
    p {
      font-size: 24px;
    }
  }
}
button {
  display: block;
  margin: 0 auto 30px;
  width: 600px;
  height: 76px;
  font-size: 36px;
  border-radius: 6px;
  letter-spacing: 8px;
  &.login-btn {
    color: #ffffff;
    background-color: @my-blue;
  }
  &.register-btn {
    border: 1px solid #4a4a4a;
  }
}

@keyframes bounce {
  0% {
    top: 16px;
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(4px);
  }
}
</style>
