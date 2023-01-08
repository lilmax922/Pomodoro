// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa' // PWA step1
import ViteRadar from 'vite-plugin-radar'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // PWA step2
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true
    }),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-DMYX4SVSL7'
      }
    }),
    // PWA step3
    VitePWA({
      registerType: 'autoUpdate', // 設定快取自動更新
      workbox: {
        cleanupOutdatedCaches: true, // 清除過期的快取
        ignoreURLParametersMatching: [/^[0-9A-Za-z]*$/], // 忽略網址參數
        // 設定要快取哪些檔案
        globPatterns: [
          // 任意資料夾/任意檔名.{放副檔名}** (大括弧後 ** 是後面可能還會接東西)
          '**/*.{html,css,js,mp3,png,jpeg,svg,gif,woff,woff2,eot,ttf,ico}**'
        ]
      },
      // PWA 應用程式資料
      manifest: {
        name: 'Pomodoro トマトの時計', // 完整的 app 名字
        short_name: 'トマトの時計', // 手機桌面的名字
        description: 'Pomodoro: Do I Need an Alarm?',
        theme_color: '#e4c8a3', // 工具列顏色
        background_color: '#e4c8a3', // app 開啟時 icon 後面的背景色
        scope: './', // PWA 顯示的路徑範圍
        start_url: './', // PWA 開啟的網址
        display: 'standalone', // 顯示模式:只顯示工具列
        icons: [ // 應用程式 icon， ./ 會指到 public 資料夾
          {
            src: './img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: './favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: './img/icons/msapplication-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: './img/icons/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  server: {
    port: 3000
  }
})
