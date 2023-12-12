const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer : {
    port : 8080,
    proxy : {
      '^/api' : {   //   /api 로 들어가는 주소는 허용한다
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : { '^/api' :'/' }

      }
    }
  }
})
