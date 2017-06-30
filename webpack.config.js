const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const neat = require('bourbon-neat').includePaths

const nodeEnv = process.env.NODE_ENV || 'development'
const isProduction = nodeEnv === 'production'

const commonPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new HtmlWebpackPlugin({
    template: 'index.html'
  }),
  new CopyWebpackPlugin([{
    from: 'src/assets',
    to: './assets'
  }])
]

const prodPlugins = [
  new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].min.js',
    minChunks (module, count) {
      const context = module.context
      return context && context.indexOf('node_modules') >= 0
    }
  })
]

module.exports = {
  devtool: isProduction ? false : 'source-map',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: isProduction ? commonPlugins.concat(prodPlugins) : commonPlugins,
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        include: path.join(__dirname, 'src/assets'),
        use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: neat
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
      { test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
      { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]' }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    overlay: true
  }
}
