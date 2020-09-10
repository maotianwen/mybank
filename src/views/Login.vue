<template>
  <div class="login">
    <Back :iconColor="'#000000'" />
    <svg-icon :iconClass="'banner'" :className="'banner'" />
    <div class="inputWrapper">
      <svg-icon :iconClass="'mobile'" :className="'icon mobile'" />
      <input type="text" placeholder="请输入手机号" />
    </div>
    <div class="inputWrapper password-wrapper">
      <svg-icon :iconClass="'lock'" :className="'icon lock'" />
      <input
        type="password"
        class="password"
        placeholder="请输入密码"
        @focus="locked = true"
        @blur="locked = password.length !== 0"
        v-model="password"
      />
    </div>
    <div class="other-options">
      <p>忘记密码？</p>
      <p>短信登录</p>
    </div>
    <button class="login-btn" @click="login">登录/注册</button>
    <!-- <button class="register-btn">注册</button> -->
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
    height: 76px;
    width: 100%;
    position: relative;
    margin-bottom: 34px;
    &.password-wrapper {
      margin-bottom: 22px;
    }
    .icon {
      position: absolute;
      left: 26px;
      &.mobile {
        width: 36px;
        height: 46px;
        transform: translateY(-50%);
        top: 50%;
      }
      &.lock {
        width: 36px;
        transform: translateY(-50%);
        top: 50%;
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
  height: 86px;
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
