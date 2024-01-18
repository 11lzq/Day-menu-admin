/*
 * @Author: kime
 * @Date: 2022-11-18 16:23:35
 * @LastEditors: kime
 * @LastEditTime: 2022-11-22 09:26:56
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',//host主机ip
        port: 5173,//端口号
        cors: true,//是否允许跨越
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5174', //接口地址
                changeOrigin: true,
                rewrite: (path) => {
                    return path.replace(/^\/api/, "/api") //是否需要对API进行处理
                }
            }
        }
    },
})
