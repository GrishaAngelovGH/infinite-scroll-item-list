const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components/'),
      'icons': path.resolve(__dirname, 'src/assets/icons/'),
      'images': path.resolve(__dirname, 'src/assets/images/'),
      'slices': path.resolve(__dirname, 'src/slices/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|woff|eot|ttf)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new InterpolateHtmlPlugin({
      'PUBLIC_URL': '.'
    })
  ]
}