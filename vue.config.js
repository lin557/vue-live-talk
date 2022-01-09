// 严格模式
// eslint-disable-next-line strict
'use strict'

const path = require('path')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production' ? '' : ''

const externalsData = {}

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'

  // pages: {
  //   index: {
  //     entry:
  //       process.env.NODE_ENV === 'production'
  //         ? './src/components/vue-video-monitor/index.js'
  //         : './src/main.js'
  //   }
  // },
  publicPath: BASE_URL,
  lintOnSave: true,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@c': resolve('src/components')
      }
    },
    // 打包排除这些组件
    externals: process.env.NODE_ENV === 'production' ? externalsData : {}
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 配置编译后的文件存放路径
  assetsDir: 'app',
  // 强制打包成lib时css内联进js文件
  css: {
    extract: false
  }
}
