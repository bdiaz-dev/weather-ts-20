/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  test: {
    environment: "jsdom",
    globals: true
  }
  // resolve: {

  //   alias: {
  //     '@components': path.resolve(__dirname, 'src/components/'),
  //     '@libs': path.resolve(__dirname, 'src/libs/'),
  //     '@hooks': path.resolve(__dirname, 'src/hooks/'),
  //     '@context': path.resolve(__dirname, 'src/context/')
  //   }
  // }
})
