// const TerserPlugin = require("terser-webpack-plugin");
const { resolve } = require('path');
// eslint-disable-next-line node/no-missing-require
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const path = require('path')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: '[name].buildle.js',
    clean: true

  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    stdin: true,
  },
  resolve: {
    alias: {
        '@': resolve(__dirname, 'src'),
    },
  extensions: ['.js', '.json'],

  },
  module: {
    rules: [{
        test: /\.js$/,
        // exclude: /node_modules/,
        include: path.join(__dirname, './src1'),
        use: ['babel-loader']
    }]
  },
  cache: false,
  optimization: {
    usedExports: true,// 是否启用标记
    minimize: false, // 是否压缩
    splitChunks: {
      // async异步导入
      // initoal同步导入
      // all 异步/同步
      chunks: 'all',
      minSize: 20000,  // 最小尺寸，拆分出来的一个包的大小最小为minSize 默认 20kb
      maxSize: 20000,  // 将大于maxSize的包，拆成不小于minSize的包 默认 0， 一般会设置和minSize一样
      minChunks: 2,    // 引入的包，至少被导入几次 默认 1次
      cacheGroups: {   // 缓存分组
        vendor: {  // 第三方打包到vendor
          test: /[\/]node_modules[\/]/,  // 匹配node_modules
          filename: 'js/[id]_vendors.js',  // 与name属性区别是 filename可用占位符, name固定名称
          // name: 'js/check_vendors.js',
          priority: -10  // 当所有打包条件都满足时，按priority优先级来打包，大的先打包
        },
        default: {  // 默认打包，当其他条件不满足
          minChunks: 2,
          filename: 'js/[id]_common.js',  // 一般是多入口会打包common.js
          priority: -20
        }
      }
    }
  },
  plugins: [
    new SpeedMeasurePlugin()
  ]
};
// minimizer: [
    //   new TerserPlugin({
    //     parallel: true,
    //     terserOptions: {
    //       sourceMap: {
    //         root: "http://example.com/src",
    //         content: "content from compiled.js.map",

    //         filename: "out.js",
    //         url: "out.js.map"
    //     }
    //       // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
    //     },
    //   }),
    // ],
