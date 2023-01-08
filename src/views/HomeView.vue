<template lang="pug">
v-row#home
  v-col(cols="12")
    h1.missionName {{ currentText }}
    h1.missionTime {{ currentTime }}
  v-col(cols="12")
    v-btn(v-if="status !== 1" icon="mdi-play" variant="text" @click="startTimer")
    v-btn(v-if="status === 1" icon="mdi-pause" variant="text" @click="pauseTimer")
    v-btn(v-if="currentItem.length > 0" icon="mdi-skip-next" variant="text" @click="finishTimer")
</template>

<script setup>
import { ref, computed } from 'vue'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { currentItem, items, timeleft } = storeToRefs(list)
const { start, countdown, finish } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

/*
  0 = 停止
  1 = 倒數中
  2 = 暫停
*/
const status = ref(0)

let timer
const startTimer = () => {
  if (status.value === 0 && items.value.length > 0) {
    // 將待辦事項[items]的第一個事項拿出來放在目前事項[currentItem]
    start()
  }
  if (currentItem.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timeleft.value === 0) {
        finishTimer()
      }
    }, 1000)
  }
}

const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = 0
  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()
  if (notify.value) {
    // eslint-disable-next-line
    const notification = new Notification("太爽啦~完成事項ㄌ", {
      body: currentText.value,
      icon: 'https://github.com/lilmax922.png'
    })
  }
  finish()
  // 循環下一個事項
  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  return currentItem.value.length > 0
    ? currentItem.value
    : items.value.length
      ? "LET'S START ─=≡Σ((( つ•̀ω•́)つ"
      : 'NO MISSION YET'
})

const currentTime = computed(() => {
  // .padStart(補的長度, 補甚麼字) 插入到目標字串的起頭(左側)
  const m = Math.floor(timeleft.value / 60)
    .toString()
    .padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})
</script>
