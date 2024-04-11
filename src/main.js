import './assets/style/global.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 全局引入自定义右键菜单
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
// 全局注册svg
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/base/SvgIcon.vue'

window.$router = router

const app = createApp(App)

app.use(createPinia())
app.use(ContextMenu)
app.use(router)
app.component(SvgIcon)

app.mount('#app')
