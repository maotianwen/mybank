const webpack = require('webpack');
const path = require('path');

module.exports = {
  publicPath: './',
  outputDir: '/Users/vscode/graduation-project/demo/final',

  // transpileDependencies: ['swiper', 'dom7'],
  configureWebpack: {
    devServer: {
      disableHostCheck: true
    },
    plugins: [
      // new webpack.ProvidePlugin({
      //   CanvasKeyFrames: 'canvaskeyframes',
      // }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75, // 换算的基数
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          }),
          require('autoprefixer')()
        ]
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/reset/reset.less')]
    }
  }
};
