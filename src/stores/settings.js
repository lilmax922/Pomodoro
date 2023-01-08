import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  // 設定這個 store 的 id
  id: 'settings',
  // 這個 store 存了哪些資料
  state () {
    return {
      alarms: [
        { id: 1, name: 'Alarm', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
        { id: 2, name: 'Yay', file: new URL('@/assets/yay.mp3', import.meta.url).href },
        { id: 3, name: 'toad-AllIWantForChristmasIsYou', file: new URL('@/assets/toad-sings-all-i-want-for-christmas-is-you.mp3', import.meta.url).href },
        { id: 4, name: 'toad-Chandelier', file: new URL('@/assets/toad-sings-chandelier.mp3', import.meta.url).href }
      ],
      selectedAlarms: 1,
      notify: false
    }
  },
  actions: {
    async toggleNotify () {
      // window.Notification 看瀏覽器有沒有支援通知
      if (!this.notify && 'Notification' in window) {
        // 向瀏覽器請求權限
        const permission = await Notification.requestPermission()
        if (permission === 'granted') this.notify = true
      } else this.notify = false
    }
  },
  /*
    getters: 放需要 function 計算後產生的資料
    想成 pinia版 的 computed，經過function產生出來的動態資料
  */
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarms)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'Pomodoro-settings',
    // path 可以選擇要存哪些資料
    path: ['selectedAlarms', 'notify']
  }
})
