<template>
  <div @contextmenu.prevent="(e) => onContextMenu(e)">
    <CommonImage class="h-8 w-8" />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import CommonImage from '@/components/common/CommonImage.vue'
import ContextMenu from '@imengyu/vue3-context-menu'

defineComponent({
  name: 'BaseHeader'
})

const onContextMenu = (e) => {
  e.preventDefault()
  // 这个函数与 this.$contextmenu 一致
  ContextMenu.showContextMenu({
    x: e.x,
    y: e.y,
    items: [
      {
        label: 'A menu item',
        onClick: () => {
          console.log('1111')
        }
      },
      {
        label: 'A submenu',
        children: [{ label: 'Item1' }, { label: 'Item2' }, { label: 'Item3' }]
      }
    ]
  })
}
</script>
