import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/tracker': 'https://dummyjson.com/http/200',
    },
  },
});
