<template>
    <div class="login-page">
      <div class="meta">
        <h1>Швидше зареєструйтеся, щоб поринути у світ кіно!</h1>
      </div>
      <div class="login-container">
        <div class="login-box">
          <h2>Створіть аккаунт</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="username">Ім'я користувача:</label>
              <input id="username" type="text" v-model="username" required>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input id="email" type="email" v-model="email" required>
              <span v-if="v$.email.$error" class="error-message">
                {{ v$.email.$errors[0].$message }}
              </span>
            </div>
            <div class="form-group">
              <label for="password">Пароль:</label>
              <input id="password" type="password" v-model="password" required>
            </div>
            <div class="form-group">
              <label for="confirmPassword">Підтвердження пароля:</label>
              <input id="confirmPassword" type="password" v-model="confirmPassword" required>
              <span v-if="v$.confirmPassword.$error" class="error-message">
                Паролі не співпадають
              </span>
            </div>
            <button type="submit" class="login-button">Зареєструватися</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, sameAs } from '@vuelidate/validators'
  
  export default {
    setup() {
      return { v$: useVuelidate() }
    },
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    validations() {
      return {
        email: { required, email },
        confirmPassword: { 
          required,
          sameAsPassword: sameAs(this.password)
        }
      }
    },
    methods: {
      async submitForm() {
        const isFormCorrect = await this.v$.$validate()
        if (!isFormCorrect) {
          console.log('Форма містить помилки. Будь ласка, виправте їх.')
          return
        }
        
        console.log('Форма валідна. Дані для відправки:', {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
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
  }
  
  .meta::after {
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
    height: auto;
    padding: 30px;
  }
  
  .login-box {
    background-color: #fff;
    padding: 10px 40px 10px 40px;
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
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  input[type="text"]:focus,
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
    margin-bottom: 10px;
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