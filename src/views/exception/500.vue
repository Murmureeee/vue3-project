<template>
  <a-result status="500" title="500" sub-title="抱歉，服务器出现错误！">
    <template #extra>
      <a-button type="primary" @click="toHome"> 返回 </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception500Page',
  methods: {
    toHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
