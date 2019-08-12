module.exports = {
  pwa: {
    name: '亲苍霞',
    themeColor: '#4B91E1', // 主题色
    msTileColor: '#4B91E1' // Window 磁贴颜色
  },
  // 代理 '/api' 请求，参考 webpack 官方文档的配置
  devServer: {
    proxy: {
      '^/api': {
        changeOrigin: true,
        target: 'http://47.106.151.144:8080',
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },

  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  runtimeCompiler: false,
  productionSourceMap: true,
  parallel: true
}