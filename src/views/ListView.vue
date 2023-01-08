<template lang="pug">
v-row#list
  v-col(cols="12")
    h1.text-center TO-DO LIST
  v-col(cols="12")
    v-text-field(ref="input" v-model="newItem" label="Add an New Mission" clearable counter maxlength="20" :rules="[rules.required,rules.length]" @keydown.enter="onInputSubmit")
      template(#append)
        v-btn(icon="mdi-plus" variant="text" @click="onInputSubmit")
    v-table
      thead
        tr.list-tr
          th Mission Name
          th Settings
      tbody
        tr(v-if="items.length === 0")
          td.text-center(colspan="2") No Mission yet...
        tr(v-for="item in items" v-else :key="item.id" :ref="editInputs")
          td
            v-text-field(v-if="item.edit" v-model="item.model" autofocus :rules="[rules.required,rules.length]")
            span(v-else) {{ item.name }}
          td
            span(v-if="item.edit")
              v-btn(icon="mdi-check" variant="text" color="seagreen" @click="confirmEditItem(item.id)")
              v-btn(icon="mdi-undo" variant="text" color="deeporange" @click="undoEditItem(item.id)")
            span(v-else)
              v-btn(icon="mdi-pencil" variant="text" color="seagreen" @click="editItem(item.id)")
              v-btn(icon="mdi-delete" variant="text" color="deeporange" @click="delItem(item.id)")
  v-divider
  v-col(cols="12")
    h1.text-center DONE
  v-col(cols="12")
    v-table
      thead
        tr
          th Mission Name
          th Settings
      tbody
        tr(v-if="finishedItems.length === 0")
          td.text-center(colspan="2") No Mission yet...
        tr(v-for="item in finishedItems" v-else :key="item.id" :ref="editInputs")
          td {{ item.name }}
          td
            v-btn(icon="mdi-delete" variant="text" color="deeporange" @click="delFinishedItem(item.id)")
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'

const list = useListStore()
// 因為 function 本身就是一個動作(不需要響應性)，所以不用用 storeToRefs 解構
const {
  addItem,
  editItem,
  delItem,
  confirmEditItem,
  undoEditItem,
  delFinishedItem
} = list
// 如果是 state 用 storeToRefs 解構
const { items, finishedItems } = storeToRefs(list)

const newItem = ref('')
const input = ref(null)
const editInputs = ref([])

const rules = {
  required (v) {
    // v為傳入的值，!v轉為 false(Boolean)，!!v 轉為正
    return !!v || '欄位必填'
  },
  length (v) {
    return v.length >= 2 || '必須兩個字以上'
  }
}

/*
  exposed:外層可以呼叫內層的 function 或 變數
  抓到 input.value後去呼叫此元件內部的 validate()，因為 validate()有被 exposed 所以可以從外部呼叫子元件內的 function
*/
const onInputSubmit = async () => {
  const valid = await input.value.validate()
  // valid.length 是錯誤訊息的陣列長度，所以 > 0 就是有錯誤訊息，直接 return。
  console.log(valid)
  if (valid.length > 0) return
  // newItem.value 就是輸入進來的值
  addItem(newItem.value)
  console.log(input.value.$el)
  /*
    解決輸入事項後點擊輸入框以外的地方一樣會跳出欄位必填的 bug
    用 $el 抓到那個元件的 html
    blur() 取消 focus
  */
  input.value.$el.querySelector('input').blur()
  input.value.reset()
}
</script>
