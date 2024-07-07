import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      VUE_APP_API_KEY: JSON.stringify(process.env.VUE_APP_API_KEY) // додайте інші змінні, які використовуються
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
  },
});