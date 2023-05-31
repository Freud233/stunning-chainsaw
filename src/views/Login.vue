<script lang='ts'>
import mitt from 'mitt'
import { defineComponent } from 'vue';
export const emitter = mitt()
type validateFunc = () => boolean
export default defineComponent({
  setup() {
    const submitHandler = async () => {
      let allPassed = inputValidateFuncArray.map(func => func()).every(passed => passed)
      console.log(allPassed);
    }
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
    let inputValidateFuncArray: validateFunc[] = []
    let validateCallback = func => {
      inputValidateFuncArray.push(func)
    }
    emitter.on('validate-created', validateCallback)
    return {
      userInfo,
      usernameRules,
      emailRules,
      submitHandler,
    }
  }
})
</script>
<template>
  <div class="h-full flex justify-center items-center">
    <form class="w-96 rounded-xl ring-1 p-8 ">
      <h2 class="mt-2 mb-4 text-2xl">注册</h2>
      <BaseInput v-model="userInfo.username" :rules="usernameRules" label="用户名"></BaseInput>
      <BaseInput v-model="userInfo.email" :rules="emailRules" label="邮箱"></BaseInput>
      <div class="relative z-0 w-full mb-6 group">
        <input type="password" name="floating_password" id="floating_password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input type="password" name="repeat_password" id="floating_repeat_password" v-model="userInfo.password"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="floating_repeat_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm
          password</label>
      </div>
      <button type="submit" @click.prevent="submitHandler"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  </div>
</template>
<style scoped></style>