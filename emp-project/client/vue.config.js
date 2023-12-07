const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port :8080,
    proxy :{
      '^/api':{
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : { '^/api' : '/'}  // ^/api를 빼고 / 로 경로 재설정
      }
    }
  }
})
