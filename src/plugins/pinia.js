import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// 存取 pinia 的狀態到 localStorage
pinia.use(piniaPluginPersistedstate)

export default pinia
