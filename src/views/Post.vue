<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import {useRoute} from 'vue-router'
import { getPost } from '../request/posts';
let route = useRoute()
let markdown = ref('')
onMounted(async () => {
  let { data } = await getPost(route.params.id)
  markdown.value = data.data.attributes.content
})
</script>
<template>
  <div class="post container m-auto">
    <v-md-editor :model-value="markdown" :include-level="[2, 3]" mode="preview"></v-md-editor>
  </div>
</template>
<style scoped></style>