import * as path from 'node:path';

import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
      },
    },
  },
  plugins: [
    react(),
    !process.env.VITEST
      ? checker({
          typescript: true,
        })
      : undefined,
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './jest.setup.js',
    exclude: ['node_modules'],
    reporters: ['verbose'],
    coverage: {
      all: true,
      reporter: ['text', 'html', 'lcov'],
      include: ['**/src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        '**/src/main.{js,jsx,ts,tsx}',
        '**/src/@types/**/*.d.ts',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/src/vite-env*',
      ],
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
});
