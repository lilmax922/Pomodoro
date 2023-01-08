import { defineStore } from 'pinia'

const time = parseInt(import.meta.env.VITE_TIME)
const timeBreak = parseInt(import.meta.env.VITE_TIME_BREAK)

export const useListStore = defineStore({
  id: 'list',
  // state: 定義有那些東西、參數
  state () {
    return {
      items: [],
      finishedItems: [],
      currentItem: '',
      id: 1,
      break: false,
      timeleft: time
    }
  },
  // actions:放所有修改 state 的 function
  actions: {
    addItem (name) {
      // 用 this. 指向 state
      this.items.push({
        id: this.id++,
        name,
        edit: false,
        model: name
      })
    },
    editItem (id) {
      const i = this.getItemIndexById(id)
      this.items[i].edit = true
    },
    delItem (id) {
      const i = this.getItemIndexById(id)
      this.items.splice(i, 1)
    },
    confirmEditItem (id) {
      const i = this.getItemIndexById(id)
      // items.model 是動態的資料，就是會隨著輸入的內容一起變更
      // items.name 就是一開始輸入的內容
      this.items[i].name = this.items[i].model
      this.items[i].edit = false
    },
    undoEditItem (id) {
      const i = this.getItemIndexById(id)
      this.items[i].model = this.items[i].name
      this.items[i].edit = false
    },
    getItemIndexById (id) {
      return this.items.findIndex(item => item.id === id)
    },
    start () {
      // this.currentItem = this.items[0].name
      // this.currentItem.splice(0, 1)

      // .shift() 從陣列中取第一個值並移除它
      this.currentItem = this.break ? '休息囉0.0' : this.items.shift().name
    },
    countdown () {
      this.timeleft--
    },
    finish () {
      if (!this.break) {
        this.finishedItems.push({
          name: this.currentItem,
          id: this.id++
        })
      }
      // 目前的狀態清空
      this.currentItem = ''
      if (this.items.length > 0) {
        // 如果還有事項，休息時間為 true
        this.break = !this.break
      }
      this.timeleft = this.break ? timeBreak : time
    },
    delFinishedItem (id) {
      const i = this.finishedItems.findIndex(item => item.id === id)
      this.finishedItems.splice(i, 1)
    }
  },
  persist: {
    key: 'Pomodoro-list'
  }
})
