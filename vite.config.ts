
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Garante que o acesso a process.env não quebre o navegador
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
