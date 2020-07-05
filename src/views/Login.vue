<template>
  <div class="login">
    <Back />
    <img src="../assets/logo.png" alt="" class="logo" />
    <img src="../assets/welcome.png" alt="" class="font" />
    <div class="inputWrapper">
      <i class="mobile"></i>
      <input type="text" placeholder="请输入手机号" />
    </div>
    <div class="inputWrapper">
      <i class="lock-header" :class="{ locked: locked }"></i>
      <i class="lock-body"></i>
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
  img {
    margin: 0 auto;
    &.logo {
      width: 143px;
      height: 143px;
      margin-top: 120px;
      margin-bottom: 54px;
    }
    &.font {
      width: 438px;
      height: 90px;
      margin-bottom: 118px;
    }
  }
  .inputWrapper {
    line-height: 0;
    width: 100%;
    position: relative;
    i {
      position: absolute;
      left: 26px;
      &.mobile {
        background-image: url(../assets/mobile.png);
        width: 36px;
        height: 46px;
        transform: translateY(-50%);
        top: 50%;
      }
      &.lock-body {
        background-image: url(../assets/lock-body.png);
        width: 36px;
        height: 26px;
        top: 34px;
      }
      &.lock-header {
        background-image: url(../assets/lock-header.png);
        width: 24px;
        height: 15px;
        left: 33px;
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
      border-color: #0065b2;
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
    background-color: #0065b2;
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
    transform: translateY(6px);
  }
}
</style>
