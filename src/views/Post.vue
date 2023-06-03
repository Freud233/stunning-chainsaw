<script setup lang="ts">
import { useRoute } from 'vue-router';
import { editPost, getPost } from '../request/posts';
import { momentFormat } from '../utils/moment'
let route = useRoute();
let postData = ref({});
let isPreview = ref('preview');
const message = useMessage()
onMounted(async () => {
  let { data } = await getPost(route.params.id);
  postData.value = data.data.attributes;
});

const handleCopyCodeSuccess = (code) => {
  console.log(code);
  if (code.length > 0) {
    message.success('复制成功')
  } else {
    message.error('复制失败')
  }
};
const updatePost = async () => {
  let data = await editPost(route.params.id, { data: { ...postData.value } });
  console.log(data);
  message.success('更新成功')
};
const editorMarkdown = () => {
  if (isPreview.value === 'preview') {
    isPreview.value = 'editor'
  } else {
    updatePost()
    isPreview.value = 'preview'
  }
}
</script>
<template>
  <div class="post container m-auto flex">
    <!-- 文章内容 -->
    <div class="flex-1">
      <h1 class="text-3xl">{{ postData.title }}</h1>
      <div class="author flex items-center">
        <!-- 用户头像 -->
        <svg fill="none" class="w-10 h-10 " stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75">
          </path>
        </svg>
        <div class="meta-box">
          <span class="text-gray-500 text-sm mr-10"> 作者:&nbsp;&nbsp;{{ postData.author }}</span>
          <span class="text-gray-500 text-sm">时间:&nbsp;&nbsp;{{ momentFormat(postData.publishTime).format('YY MMM DD hh mm SS') }}</span>
        </div>
      </div>
      <v-md-editor v-model="postData.content" :include-level="[2, 3]" :mode="isPreview"
        @copy-code-success="handleCopyCodeSuccess"></v-md-editor>
      <button type="button" @click="editorMarkdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                            font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 
                                            dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {{ isPreview === 'preview' ? '编辑' : '保存' }}
      </button>
      <button @click="isPreview = 'preview'" v-show="isPreview === 'editor' ? true : false" type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                            font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 
                                            dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">取消</button>
    </div>
    <!-- 用户信息展示 -->
    <div v-if="isPreview === 'preview' ? true : false" class="w-1/5">
      <div class="bg-red-100">
        <p v-for="i in 10">这里用作展示用户信息和标题导航</p>
      </div>
      <div class="title bg-slate-500 h-96 sticky top-20 ">
        标题导航
      </div>
    </div>
  </div>
</template>
<style scoped></style>
