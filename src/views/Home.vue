<template>
    <div class="home">
        <!-- <div class="container m-auto" v-if="resultPosts && resultPosts.posts">
            <BasePost v-for="post in resultPosts.posts.data" :post="post" :key="post.id"></BasePost>
        </div> -->
        <h1 class="w-4/5 m-auto mt-5 text-4xl">输入要格式化的文字</h1>
        <textarea type="text" class=" block w-4/5 m-auto mt-5" v-model="text" rows="5" @change="textReplace" />
        <div class="h-40 flex justify-center items-center">
            <button @click="copyText"
                class="block m-auto my-4 hover:border hover:duration-75 hover:w-52 hover:h-16 hover:text-2xl bg-green-300 text-gray-800 shadow-xl  w-48 h-12 text-xl ">
                复制文字</button>
        </div>
        <div class="w-4/5 m-auto my-5">{{ text }}</div>
    </div>
</template>
  
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
const text = ref('')
const message = useMessage()
const textReplace = () => {
    text.value = text.value.replace(/\s*/g, '').replace(/\*\*/g, '')
        .replace(/([^1-9])?(\d+)\./g, (match, before, number) => {
            return (before ? before + '<br>' : '') + number + '、';
        })
}

const copyText = () => {
    if (text.value.trim() === '') {
        message.warning('文字内容不能为空')
    } else {
        const tempInput = document.createElement("textarea");
        tempInput.value = text.value;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        message.success('复制成功')
    }
};

</script>
  
<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>