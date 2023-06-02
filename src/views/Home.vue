<template>
    <div class="home">
        <div class="container  m-auto ">
            <BasePost v-for="post in posts" :post="post" @click=""></BasePost>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { getPosts } from '../request/posts.js'
const posts = ref([])
const message = useMessage()
onMounted(async () => {
    let result = await getPosts()
    console.log(result);
    if (result.status !== 200) {
        message.error(result.statusText)
        return
    }
    message.success('获取文章成功')
    posts.value = result.data.data
})
</script>
  
<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>