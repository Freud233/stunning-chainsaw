<script setup lang='ts'>
import { emitter } from '../views/Login.vue'
let emits = defineEmits(['from-submit'])
let inputValidateFuncArray = [] as (() => boolean)[]
let validateCallback = func => {
  inputValidateFuncArray.push(func)
}
emitter.on('validate-created', validateCallback)
const submitHandler = async () => {
  let allPassed = inputValidateFuncArray.map(func => func()).every(passed => passed)
  emits('from-submit', allPassed)
}

</script>
<template>
  <form class="w-96 rounded-xl ring-1 p-8">
    <slot></slot>
    <slot name="button">
      <button type="submit" @click.prevent="submitHandler" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
            text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">注册</button>
    </slot>
  </form>
</template>
<style scoped></style>