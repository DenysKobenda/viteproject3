<template>
    <div class="login-page">
        <div class="login-container">
          <div class="login-box">
            <h2>Login</h2>
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" v-model="email" />
                <span v-if="!$v.email.email" class="error-message">Невірний формат email</span>
                <span v-if="!$v.email.required" class="error-message">Поле не може бути пустим</span>
              </div>
              <div class="form-group">
                <label for="password">Пароль:</label>
                <input type="password" v-model="password" />
                <span v-if="!$v.password.required" class="error-message">Поле не може бути пустим</span>
              </div>
              <button type="submit" class="login-button">Увійти</button>
            </form>
          </div>
        </div>
        <div class="meta">
            <h1>Занурься у світ кіно! Авторизуйтеся на сайті</h1>
        </div>
    </div>
      </template>
      
      <script>
      import useVuelidate from '@vuelidate/core';
      import { required, email } from '@vuelidate/validators';
      import { useUserStore } from '../stores/user';
      import { useRouter } from 'vue-router';
      import { reactive, toRefs } from 'vue';
      
      export default {
        name: 'Login',
        setup() {
          const router = useRouter();
          const userStore = useUserStore();
          const state = reactive({
            email: '',
            password: '',
          });
      
          const rules = {
            email: { required, email },
            password: { required },
          };
      
          const $v = useVuelidate(rules, state);
      
          const login = () => {
            if ($v.value.$invalid) return;
            userStore.login({ email: state.email });
            router.push('/');
          };
      
          return { ...toRefs(state), $v, login };
        },
      };
      </script>
      
      <style scoped>
      .login-page{
        display: flex;
        width: 100%;
        justify-content: space-around;
      }
    
      .meta {
        text-align: center;
        align-content: center;
      }
      .meta h1 {
        font-size: xx-large;
      }
      .meta,
    .meta::after {
      animation-delay: var(--animation-delay, 2s);
      animation-iteration-count: var(--iterations, 1);
      animation-duration: var(--duration, 2s);
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    }
    
    .meta {
      --animation-delay: var(--delay, 0);
      --animation-duration: var(--duration, 800ms);
      --animation-iterations: var(--iterations, 1);
      position: relative;
      font-size: 10vw;
      animation-name: clip-text;
      color: #FFF;
      white-space: nowrap;
      cursor: default;
      
      &::after {
        content: "";
        position: absolute;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: scaleX(0);
        transform-origin: 0 50%;
        pointer-events: none;
        animation-name: text-revealer;
      }
      
    }
    
    @keyframes clip-text {
      from {
        clip-path: inset(0 100% 0 0);
      }
      to {
        clip-path: inset(0 0 0 0);
      }
    }
    
    @keyframes text-revealer {
      
      0%, 50% {
        transform-origin: 0 50%;
      }
      
      60%, 100% {
        transform-origin: 100% 50%;   
      }
    
      
      60% {
        transform: scaleX(1);
      }
      
      100% {
        transform: scaleX(0);
      }
    }
      .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
      }
      
      .login-box {
        background-color: #fff;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
        text-align: center;
      }
      
      h2 {
        margin-bottom: 20px;
        color: #333;
      }
      
      .form-group {
        margin-bottom: 20px;
        text-align: left;
      }
      
      label {
        display: block;
        margin-bottom: 8px;
        color: #666;
      }
      
      input[type="email"],
      input[type="password"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
      }
      
      input[type="email"]:focus,
      input[type="password"]:focus {
        border-color: #007BFF;
      }
      
      .error-message {
        color: #ff4d4d;
        font-size: 14px;
        margin-top: 5px;
      }
      
      .login-button {
        width: 100%;
        padding: 10px;
        background-color: #007BFF;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      
      .login-button:hover {
        background-color: #0056b3;
      }
    @media only screen and (max-width: 600px) {
    .meta {
        display: none;
    }
  }
</style>