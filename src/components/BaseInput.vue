<script setup lang='ts'>
import { PropType } from 'vue';
import { emitter } from '../views/Login.vue'
import { onMounted } from 'vue';
interface RuleProp {
  type: 'username' | 'email' | 'password' | 'required',
  message?: string,
  error?: boolean,
}
let props = defineProps({
  label: {
    type: String,
    default: 'label'
  },
  modelValue: {
    type: String,
    default: ''
  },
  rules: {
    type: Array as PropType<RuleProp[]>,
    default: () => []
  }
})
let emits = defineEmits(['update:modelValue'])
let inputData = reactive({
  value: props.modelValue || '',
  message: '',
  error: false,
})

const inputHandler = (e: any) => {
  inputData.value = e.target.value
  emits('update:modelValue', e.target.value)
}
const validateHandler = () => {
  if (props.rules) {
    let allPassed = props.rules.every(rule => {
      let passed = false
      inputData.message = rule.message || ''
      switch (rule.type) {
        case 'required':
          passed = inputData.value.trim().length > 0
          break
        case 'username':
          passed = inputData.value.trim().length < 12
          break
        case 'email':
          passed = /\S+@\S+\.\S+/.test(inputData.value.trim())
          break
        default:
          break
      }
      return passed
    })
    inputData.error = !allPassed
    return allPassed
  }
  return true
}
onMounted(() => {
  emitter.emit('validate-created', validateHandler)
})
</script>
<template>
  <div class="relative z-0 w-full mb-8 group">
    <input type="text" :name="label" :id="label" :value="inputData.value" @input="inputHandler" @blur="validateHandler"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" " required />
    <label :for="label"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      {{ label }}
    </label>
    <span v-if="inputData.error" class="absolute bottom-[-20px] left-0 text-red-500 text-xs">
      {{ inputData.message }}
    </span>
  </div>
</template>
<style scoped></style>