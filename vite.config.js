import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { createHtmlPlugin } from 'vite-plugin-html'
import { visualizer } from 'rollup-plugin-visualizer'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const root = process.cwd()
  const ENV = loadEnv(mode, root)
  return defineConfig({
    plugins: [
      vue(),
      VueDevTools(),
      createHtmlPlugin({
        inject: {
          data: {
            title: ENV.VITE_APP_TITLE
          }
        }
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      }),
      // 开启打包体积分析插件
      visualizer({ open: true })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    esbuild: {
      pure: ['console.log'], // 删除 console.log
      drop: ['debugger'] // 删除 debugger
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]' // 资源文件像 字体，图片等
        }
      }
    },
    server: {
      https: false, // 是否开启 https
      port: 10086, // 端口号
      host: '0.0.0.0', // 监听所有地址
      open: true, // 服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      proxy: {} // 自定义代理规则
    }
  })
}
