/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import './main.scss'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// PWA
import { registerSW } from 'virtual:pwa-register'
/*
  PWA 使用的三個條件
  1.網站必須是 https or localhost
  2. 要有 service worker (會先將你的網站資料快取起來，當你在無網路狀態時就會去用快取的資料)
  3. 要有 app 各種大小的 icon
*/
// 進網頁時註冊 service worker
registerSW({
  onNeedRefresh () {}, // 當偵測到新版本需要更新時要幹嘛
  onOfflineReady () {} // 當快取完我所有檔案時要幹嘛
})

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
