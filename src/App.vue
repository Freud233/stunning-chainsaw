<script setup lang="ts">
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite()
})

</script>

<template>
    <n-config-provider class="h-full">
        <router-view></router-view>
        <n-global-style />
    </n-config-provider>
</template>

