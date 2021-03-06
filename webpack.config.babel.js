import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackTemplate from 'html-webpack-template'
import path from 'path'
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin'
import webpack from 'webpack'

export default {
  'devServer': {
    'contentBase': './src',
    'historyApiFallback': true,
    'port': 3000
  },
  'devtool': 'source-map',
  'entry': [
    './src/index'
  ],
  'resolve': {
    'modules': [
      'node_modules'
    ]
  },
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'use': [
          'babel-loader'
        ]
      },
      {
        'test': /\.scss$/,
        'use': [
          'style-loader',
          'css-loader',
          {
            'loader': 'sass-loader',
            'options': {
              'includePaths': [
                path.join(__dirname, '/src/styles'),
                path.join(__dirname, '/node_modules/')
              ]
            }
          }
        ]
      },
      {
        'test': /(\.css)$/,
        'use': [
          'style-loader',
          'css-loader'
        ]
      },
      {
        'test': /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        'use': [
          'file-loader'
        ]
      },
      {
        'test': /\.(woff|woff2)$/,
        'use': [{
          'loader': 'url-loader',
          'options': {
            'prefix': 'font',
            'limit': 5000
          }
        }]
      },
      {
        'test': /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        'use': [{
          'loader': 'url-loader',
          'options': {
            'limit': 10000,
            'mimetype': 'application/octet-stream'
          }
        }]
      },
      {
        'test': /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        'use': [{
          'loader': 'url-loader',
          'options': {
            'limit': 10000,
            'mimetype': 'image/svg+xml'
          }
        }]
      },
      {
        'test': /\.xml$/,
        'use': [{
          'loader': 'file-loader'
        }]
      },
      {
        'test': /\.rdfs$/,
        'use': [{
          'loader': 'file-loader',
          'query': {
            'name': '[name].[ext]'
          }
        }]
      },
      {
        'test': /\.pdf$/,
        'use': [{
          'loader': 'file-loader',
          'query': {
            'name': '[name].[ext]'
          }
        }]
      }
    ]
  },
  'output': {
    'filename': 'index_bundle.js',
    'path': path.join(__dirname, '/dist'),
    'publicPath': '/'
  },
  'plugins': [
    new HtmlWebpackPlugin({
      'appMountId': 'root',
      'filename': 'index.html',
      'hash': true,
      'inject': false,
      'mobile': true,
      'template': HtmlWebpackTemplate,
      'title': 'Glambulator'
    }),
    new FaviconsWebpackPlugin({
      'logo': path.join(__dirname, '/src/assets/favicon.ico'),
      'prefix': 'icons-[hash]/',
      'emitStats': true,
      'statsFilename': 'iconstats-[hash].json',
      'persistentCache': true,
      'inject': true,
      'icons': {
        'android': true,
        'appleIcon': true,
        'appleStartup': true,
        'coast': false,
        'favicons': true,
        'firefox': true,
        'opengraph': false,
        'twitter': true,
        'yandex': false,
        'windows': true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      'compress': {
        'warnings': false,
        'reduce_vars': false
      },
      'output': {
        'comments': false
      },
      'sourceMap': true
    })
  ],
  'target': 'web'
}
