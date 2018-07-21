const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: 'main'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js?[hash:8]',
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    },
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        include: path.resolve('src')
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
  ]
};

module.exports = config;