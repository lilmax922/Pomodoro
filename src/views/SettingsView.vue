<template lang="pug">
v-row#settings
  v-col(cols="12")
    h1.text-center Ringtones
  v-col(cols="12")
    v-table
      thead
        tr
          th.text-center Ringtones
          th.text-center Play
          th.text-center Choose
      tbody
        tr(v-for="alarm in alarms" :key="alarm.id")
          td {{ alarm.name }}
          td
            audio(:src="alarm.file" controls)
          td
            v-radio-group(v-model="selectedAlarms")
             v-radio(:value="alarm.id")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
// 如果要對 pinia 的東西做解構，就要從 pinia 引用 storeToRefs
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarms } = storeToRefs(settings)
</script>
