<template>
  <svg
    aria-hidden="true"
    class="text-[22px] hover:outline-none"
    :width="props.size"
    :height="props.size"
  >
    <use :xlink:href="symbolId" :fill="props.color" :stroke="props.stroke" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  stroke: {
    type: String,
    default: 'none'
  },
  size: {
    type: String,
    default: '1em'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
