<template>
    <div class="home">
        <div class="container m-auto" v-if="resultPosts && resultPosts.posts">
            <BasePost v-for="post in resultPosts.posts.data" :post="post" :key="post.id"></BasePost>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { useGetPosts } from '../graphql'
const resultPosts = useGetPosts()
</script>
  
<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>