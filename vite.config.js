import {defineConfig} from 'vite'
export default defineConfig({
    optimizeDeps: {
        exclude:[]
    },
    css: {
        modules: {// 配置css模块化
            localsConvention: 'camelCase',// 默认值：dashesOnly
        },
        preprocessorOptions: {// css预处理器配置

        }
    }
})