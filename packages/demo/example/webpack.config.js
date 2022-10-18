// const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: 'buildle.js'
  },
  cache: false,
  optimization: {
    usedExports: true,// 是否启用标记
    minimize: true, // 是否压缩
  }
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
