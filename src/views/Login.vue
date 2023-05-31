<script lang='ts'>
import mitt from 'mitt'
import { defineComponent } from 'vue';
export const emitter = mitt()
export default defineComponent({
  setup() {
    let userInfo = reactive({
      username: '',
      email: '',
      password: '',
    })
    let usernameRules = [
      {
        type: 'required',
        message: '用户名不能为空',
      },
      {
        type: 'username',
        message: '用户名长度不能超过12',
      }
    ]
    let emailRules = [
      {
        type: 'required',
        message: '邮箱不能为空',
      },
      {
        type: 'email',
        message: '邮箱格式不正确',
      }
    ]
    const submitHandler = (allPassed: boolean) => {
      if (allPassed) {
        console.log('submit')
      }
    }
    return {
      userInfo,
      usernameRules,
      emailRules,
      submitHandler
    }
  }
})
</script>
<template>
  <div class="h-full flex justify-center items-center">
    <From @from-submit="submitHandler">
      <h2 class="mt-2 mb-4 text-2xl">注册</h2>
      <BaseInput v-model="userInfo.username" :rules="usernameRules" label="用户名"></BaseInput>
      <BaseInput v-model="userInfo.email" :rules="emailRules" label="邮箱"></BaseInput>
    </From>
  </div>
</template>
<style scoped></style>