<template>
  <a-spin :indicator="indicator" :spinning="modelValue" :tip="tip">
    <slot />
  </a-spin>
</template>
<script setup>
import { defineComponent, h, toRefs } from 'vue'
import { LoadingOutlined } from '@ant-design/icons-vue'

defineComponent({
  name: 'CommonLoading'
})

const props = defineProps({
  size: {
    type: [Number, String],
    default: 24
  },
  tip: {
    type: String,
    default: '加载中...'
  }
})

const { size, tip } = toRefs(props)

const indicator = h(LoadingOutlined, {
  style: {
    fontSize: typeof size.value === 'string' ? size.value : `${size.value}px`
  },
  spin: true
})

const modelValue = defineModel()
</script>
