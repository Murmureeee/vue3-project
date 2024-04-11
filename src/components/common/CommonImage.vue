<template>
  <a-image
    :src="props.src"
    :preview="props.preview"
    class="h-full w-full"
    :width="props.width"
    :height="props.height"
    :fallback="getAssetsImage('common/imageError.png')"
  />
</template>

<script setup>
import { defineComponent } from 'vue'
import { getAssetsImage } from '@/utils/util'

defineComponent({
  name: 'CommonImage'
})

const props = defineProps({
  preview: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ''
  },
  height: {
    type: Number,
    default: 32
  },
  width: {
    type: Number,
    default: 32
  }
})
</script>
