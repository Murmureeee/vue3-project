<template>
  <div class="h-full w-full">
    <RouterView />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

defineComponent({
  name: 'FullScreenLayout'
})
</script>
