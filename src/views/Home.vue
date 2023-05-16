<template>
    <!-- 横幅 -->
    <!-- <div id="sticky-banner" tabindex="-1"
        class="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="flex items-center mx-auto">
            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                            d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z">
                        </path>
                    </svg>
                    <span class="sr-only">Light bulb</span>
                </span>
                <span>New brand identity has been launched for the <a href="https://flowbite.com"
                        class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Flowbite
                        Library</a></span>
            </p>
        </div>
        <div class="flex items-center">
            <button data-dismiss-target="#sticky-banner" type="button"
                class="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Close banner</span>
            </button>
        </div>
    </div> -->
    <!-- 卡片 -->
    <div class="bg-[#0F9D58] main flex flex-wrap justify-around p-2">
        <div v-for="post in posts" :key="post.id" class="max-w-sm mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800
                                dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
            </a>
            <p class="mb-3 font-normal  h-24 text-gray-700 dark:text-gray-400">{{ post.content }}</p>
            <a href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div> <!-- banner -->
    <div class=" w-4/5 m-auto mt-4 mb-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
const posts = [
    {
        id: 1,
        title: '这是我的第一篇博客',
        content: '这是我在我的个人博客网站上发布的第一篇博客。欢迎来访问我的网站！',
        author: 'John Doe',
        date: '2021-01-01'
    },
    {
        id: 2,
        title: '如何使用 React 构建 Web 应用',
        content: 'React 是一种非常流行的 JavaScript 库，用于构建 Web 应用程序。在这篇博客中，我将介绍如何使用 React 来创建一个简单的 Web 应用程序。',
        author: 'Jane Smith',
        date: '2021-02-15'
    },
    {
        id: 3,
        title: 'JavaScript 中的箭头函数',
        content: '箭头函数是 ES6 中引入的新特性。它们可以让你写出更简洁和清晰的代码。在这篇博客中，我将介绍箭头函数的语法和用法。',
        author: 'John Doe',
        date: '2021-03-10'
    },
    {
        id: 4,
        title: 'Node.js 中的文件操作',
        content: 'Node.js 是一个非常流行的 JavaScript 运行时环境，可以用于编写服务器端应用程序。在这篇博客中，我将介绍 Node.js 中的文件操作。',
        author: 'Jane Smith',
        date: '2021-04-22'
    },
    {
        id: 5,
        title: '学习 CSS 布局',
        content: 'CSS 是一种用于控制网页布局和样式的语言。在这篇博客中，我将介绍如何使用 CSS 来创建不同类型的布局。',
        author: 'John Doe',
        date: '2021-05-13'
    }
];

const authors = [
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: '我是一名 Web 开发者，热衷于 JavaScript 和 React。欢迎访问我的个人网站'
    },
    {
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        bio: '我是一名全栈开发工程师，擅长使用 Node.js 和 React 构建 Web 应用程序。'
    }
];
</script>

<style scoped></style>
