<script setup lang='ts'>
import { createPost } from '../request/posts';
import BaseMarkdown from '../components/BaseMarkdown.vue';
let title = ref('你好')
let content = ref('loreamsdfasdfasdfa')
const titleRules = [
  {
    type: 'required',
    message: '标题不能为空'
  }
]
const savePost = async () => {
  console.log(title.value, content.value);
  let res = await createPost({ data: { title: title.value, content: content.value, author: 'EMINEM', lastModifiedTime: new Date(), publishTime: new Date() } })
}
</script>
<template>
  <BaseHeader>
    <template v-slot>
      <button type="button"
        class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">draft</button>
      <button type="button" @click="savePost"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        save
      </button>

    </template>
  </BaseHeader>
  <div class="container m-auto">
    <BaseInput v-model="title" :label="'标题'" :rules="titleRules" :class="'mt-2'" />
    <BaseMarkdown v-model="content" />
  </div>
</template>
<style scoped></style>