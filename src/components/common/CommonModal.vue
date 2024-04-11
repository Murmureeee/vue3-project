<template>
  <a-modal
    v-model:open="modelValue"
    :title="title"
    :centered="centered"
    :width="modalWidth"
    :closable="closable"
    class="common-modal"
  >
    <slot></slot>
    <template #footer>
      <slot name="footer"> </slot>
    </template>
  </a-modal>
</template>

<script setup>
import { computed, defineComponent, toRefs } from 'vue'

defineComponent({
  name: 'CommonModal'
})

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'small',
    validator: (value) => {
      return ['small', 'normal', 'large'].indexOf(value) > -1
    }
  },
  closable: {
    type: Boolean,
    default: true
  },
  centered: {
    type: Boolean,
    default: true
  }
})

const { title, size, closable, centered } = toRefs(props)

const modalWidth = computed(() => {
  let widthSize = 0
  if (size.value === 'small') widthSize = 520
  if (size.value === 'normal') widthSize = 1000
  if (size.value === 'large') widthSize = 1500
  return `${widthSize}px`
})

const modelValue = defineModel()
</script>

<style lang="scss">
.common-modal {
  .ant-modal-content {
    padding: 10px 12px;
  }
  .ant-modal-body {
    max-height: 60vh;
    overflow: auto;
  }
}
</style>
