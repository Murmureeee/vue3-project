<template>
  <div>
    <Header />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import Header from '@/components/base/Header.vue'

defineComponent({
  name: 'BaseLayout'
})
</script>
