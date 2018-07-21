const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
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
    }
  },
  resolve: {
    modules: [
      path.resolve('src'),
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      // {
      //   test: /\.(sass|scss)$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //       },
      //     },
      //     {
      //       loader: 'postcss-loader',
      //     },
      //     {
      //       loader: 'sass-loader'
      //     },
      //   ],
      //   include: path.resolve('src'),
      // },
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        include: path.resolve('src')
      }
      // {
      //   test: /\.(jpe?g|png|gif|ico)$/,
      //   include: path.resolve('src/images'),
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 3000,
      //         name: '[path][name].[ext]?[hash:8]'
      //       }
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //           quality: 65
      //         },
      //         optipng: {
      //           enabled: false,
      //         },
      //         pngquant: {
      //           quality: '65-90',
      //           speed: 4
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         }
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
};

module.exports = config;