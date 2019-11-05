<template>
  <div class="login">
    <div class="login__main">
      <h1>登录沙盘控制器</h1>
      <div class="login__input">
        <p :class="{'login__error-show':isError,'login__error':!isError}">用户账户或密码错误，请重新输入。</p>
        <input
          type="text"
          class="login__input-item login__input-name"
          placeholder="用户名"
          v-model="name"
        >
        <input
          type="password"
          class="login__input-item login__input-password"
          placeholder="密码"
          v-model="password"
          @keyup.enter="handelLogin"
        >
      </div>
      <button class="login__button" @click="handelLogin" id="button_press">登录</button>
    </div>
  </div>
</template>

<script>
import { loginApi } from "@/api/login";
export default {
  data() {
    return {
      name: "",
      password: "",
      isError: false
    };
  },
  computed: {
    params() {
      let param = {
        body: {
          name: this.name,
          password: this.password
        }
      };
      return param;
    }
  },
  methods: {
    handelLogin() {
      if (
        !this.params.body.name ||
        !this.params.body.password ||
        this.params.body.name == "" ||
        this.params.body.password == ""
      ) {
        this.isError = true;
      } else {
        this.isError = false;
        loginApi(this.params).then(res => {
          console.log(res);
          if (res.code == 200) {
            sessionStorage.setItem("token", res.message);
            this.$router.push({ name: "home" });
          } else if (res.code != 200) {
            this.isError = true;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  // background-image: url("../assets/images/bg.png");
  background-size: cover;
  background-position: center;
  .login__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 264px;
    background-color: rgba(36, 42, 58, 0.9);
    padding: 20px;
    h1 {
      font-size: 24px;
      font-weight: bold;
      color: #bbc5d5;
      text-align: center;
    }
    .login__input {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 280px;
      height: 126px;
      margin-bottom: 50px;
      .login__input-item {
        width: 262px;
        height: 22px;
        padding: 8px;
        border: solid 1px rgba(187, 197, 213, 0.5);
        background-color: transparent;
        outline: none;
        color: #bbc5d5;
      }
      .login__input-password {
        margin-top: 16px;
      }
      .login__input-item:focus {
        border: solid 1px #0741fc;
      }
      .login__error {
        font-size: 12px;
        color: transparent;
        text-align: left;
      }
      .login__error-show {
        font-size: 12px;
        color: #fd3e19;
        text-align: left;
      }
    }
    button {
      width: 280px;
      height: 40px;
      background-color: #0741fc;
      border: none;
      color: #fff;
    }
  }
}
// @media screen and (max-width: 678px) {
// }
</style>
