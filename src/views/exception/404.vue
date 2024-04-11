<template>
  <a-result status="404" title="404" sub-title="抱歉，访问的页面不存在！">
    <template #extra>
      <a-button type="primary" @click="goBack"> 返回 </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception404Page',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
