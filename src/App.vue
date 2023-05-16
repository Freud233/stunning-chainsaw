<script setup>
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite()
})
</script>

<template>
    <Header />
    <router-view></router-view>
    <Footer />
</template>

