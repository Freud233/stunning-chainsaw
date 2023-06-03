<script setup lang="ts">
import { useRoute } from 'vue-router';
import { editPost, getPost } from '../request/posts';
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
  <div class="post container m-auto">
    <v-md-editor v-model="postData.content" :include-level="[2, 3]" :mode="isPreview"
      :height="`${isPreview === 'preview' ? 'auto' : '600px'}`" @copy-code-success="handleCopyCodeSuccess"></v-md-editor>
    <button type="button" @click="editorMarkdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                                font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 
                                                dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      {{ isPreview === 'preview' ? '编辑' : '保存' }}
    </button>
    <button v-show="isPreview === 'preview' ? false : true" type="button" @click="isPreview = 'preview'" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                                font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 
                                                dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      取消
    </button>
  </div>
</template>
<style scoped></style>
