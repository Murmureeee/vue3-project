<template>
  <div
    class="flex h-screen w-full items-center justify-center bg-gradient-to-r from-[#4180D8] to-[#74B5D6]"
  >
    <div class="mx-auto w-[500px] rounded-xl bg-white px-14 py-12 shadow-2xl">
      <div class="px-16 pb-14 text-center text-[40px] font-bold">{{ title }}</div>
      <a-form
        :model="formState"
        name="normal_login"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <div class="mb-3 text-lg text-[#343434]">账号密码登录</div>
        <a-form-item name="username" :rules="[{ required: true, message: '请输入你的用户名!' }]">
          <a-input v-model:value="formState.username" size="large">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: '请输入你的密码!' }]">
          <a-input-password v-model:value="formState.password" size="large">
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-form-item name="checked" no-style>
            <a-checkbox v-model:checked="formState.checked">记住密码</a-checkbox>
          </a-form-item>
        </a-form-item>

        <a-form-item>
          <a-button class="w-full" size="large" type="primary" html-type="submit"> 登录 </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { aesEncrypt, encrypted } from '@/utils/aes'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { computed, defineComponent, reactive, onBeforeMount } from 'vue'
defineComponent({
  name: 'LoginPage'
})

const formState = reactive({
  username: '',
  password: '',
  checked: false
})

const title = computed(() => {
  return `${import.meta.env.VITE_APP_TITLE}`
})

const onFinish = async (value) => {
  console.log('111', value)
  // const flag = await userStore.Authenticate(formState)
  const flag = true
  if (flag) {
    // 记住密码
    if (formState.checked) {
      const usernameAes = aesEncrypt(formState.username) // 加密
      const passwordAes = aesEncrypt(formState.password)
      localStorage.setItem('username', usernameAes)
      localStorage.setItem('password', passwordAes)
    } else {
      localStorage.removeItem('username')
      localStorage.removeItem('password')
    }
  }
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
onBeforeMount(() => {
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  if (username) {
    const _username = encrypted(username)
    const _password = encrypted(password)
    formState.username = _username
    formState.password = _password
    formState.checked = true
  }
})
</script>
