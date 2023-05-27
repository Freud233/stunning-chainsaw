<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { getPost } from '../request/posts';
let route = useRoute()
let markdown = ref('')
onMounted(async () => {
  let { data } = await getPost(route.params.id)
  markdown.value = data.data.attributes.content
})
const handleCopyCodeSuccess = (code) => {
  console.log(code)
}
</script>
<template>
  <div class="post container m-auto">
    <v-md-editor :model-value="markdown" :include-level="[2, 3]" mode="preview"
      @copy-code-success="handleCopyCodeSuccess"></v-md-editor>
  </div>
</template>
<style scoped></style>