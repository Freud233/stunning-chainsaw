<script lang='ts'>
import mitt from 'mitt'
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser } from '../request/login'
import { setToken } from '../utils/token';
export const emitter = mitt()
export default defineComponent({
  setup() {
    const router = useRouter()
    let userInfo = reactive({
      username: '',
      email: '',
      password: '',
    })
    let confirmPassword = ref(null)
    let usernameRules = [
      {
        type: 'required',
        message: '用户名不能为空',
      },
      {
        type: 'username',
        message: '用户名长度要大于3小于12',
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
    let passwordRules = [
      {
        type: 'required',
        message: '密码不能为空',
      },
      {
        type: 'password',
        message: '密码长度不能小于6',
      }
    ]
    let passwordConfirmRules = [
      {
        type: 'required',
        message: '密码不能为空',
      },
      {
        type: 'confirmPassword',
        message: '两次密码不一致',
      }
    ]
    const submitHandler = async (allPassed: boolean) => {
      if (allPassed) {
        let data = await registerUser(userInfo)
        console.log(data);
        if (data.status === 200) {
          setToken('token', data.data.jwt)
          router.push('/')
        }
      }
    }
    return {
      userInfo,
      usernameRules,
      emailRules,
      passwordRules,
      confirmPassword,
      passwordConfirmRules,
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
      <BaseInput v-model="userInfo.password" type="password" :rules="passwordRules" label="密码"></BaseInput>
      <BaseInput v-model="confirmPassword" type="password" :otherValue="userInfo.password" :rules="passwordConfirmRules"
        label="重复输入密码">
      </BaseInput>
    </From>
  </div>
</template>
<style scoped></style>