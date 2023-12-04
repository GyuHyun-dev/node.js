const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'

module.exports = defineConfig({
  transpileDependencies: true,
  // 개발하는동안 쓰는 서버
  devServer : {
    port :8080,
    proxy :{
      '^/api':{
        target,
        changeOrigin : true,
        ws : false,
        pathRewirte : { '^/api' : '/'}  // ^/api를 빼고 / 로 경로 재설정
      }
    }
  }
})