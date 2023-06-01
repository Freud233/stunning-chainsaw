<script setup lang="ts">
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite()
})

</script>

<template>
    <n-config-provider class="min-h-screen flex flex-col">
        <router-view></router-view>
        <n-global-style />
    </n-config-provider>
</template>

