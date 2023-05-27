<script setup lang='ts'>
let porps = defineProps({
  post: {
    type: Object,
    require: true
  }
})
const markdownReg = (val) => {
  return val.replace(/([#*_\\~]|[>\s-]{2,})/g, '')
}
</script>
<template>
  <router-link :to="{ name: 'Post', params: { id: post.attributes.postId } }"
    class="flex m-auto w-200 md:h-40 flex-col mt-4 items-center border-l-indigo-500 border  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.attributes.title }}</h5>
      <p class="mb-3 overflow-hidden line-clamp-3 font-normal text-gray-700 dark:text-gray-400">{{
        markdownReg(post.attributes.content) }}</p>
    </div>
  </router-link>
</template>
<style scoped></style>