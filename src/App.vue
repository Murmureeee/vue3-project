<template>
  <a-config-provider :locale="locale">
    <a-watermark :content="content" class="h-full w-full">
      <RouterView />
    </a-watermark>
  </a-config-provider>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

defineComponent({
  name: 'App'
})

const content = ref(['水印', '内容自定义'])

const locale = ref(zhCN)
</script>
