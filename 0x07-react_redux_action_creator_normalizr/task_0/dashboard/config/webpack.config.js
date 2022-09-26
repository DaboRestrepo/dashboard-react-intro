const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve('./dist')
    },
    compress: true,
    port: 3000, 
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    }
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
}
