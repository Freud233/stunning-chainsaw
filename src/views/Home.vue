<template>
    <div class="home">
        <div class="container  m-auto ">
            <BasePost v-for="post in posts" :post="post" @click=""></BasePost>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {getPosts} from '../request/posts.js'
const posts = ref([])
onMounted(async() => {
    let {data} = await getPosts()
    console.log(data);
    posts.value = data.data
})
</script>
  
<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>