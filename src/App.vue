<template lang="pug">
v-app
  v-main.mainBody
    v-container
      router-view(v-slot="{ Component }")
        //- 保留換頁時元件不會被銷毀
        //- 設定 include，指定要保留的元件
        keep-alive(include="HomeView")
          //- 動態元件，將元件以 is 傳入
          component(:is="Component")
  v-main.navbar
    v-btn(icon="mdi-home" variant="text" to="/")
    v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
    v-btn(icon="mdi-music-box-multiple" variant="text" to="/settings")
    v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
    v-spacer
    v-app-bar-title POMODORO
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings
</script>
