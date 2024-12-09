const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: '申请端-远程会诊平台'
    }
  }
})

module.exports = {
  devServer: {
      client: {
          overlay: false,
      },
  },
};
