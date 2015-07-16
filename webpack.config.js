var webpack = require('webpack');  
module.exports = {  
  entry: [
    'webpack/hot/only-dev-server',
    "./src/index.js"
  ],

  output: {
    path: __dirname + '/build',
    filename: "app.js"
  },

  devtool: 'sourcemap',

  jshint: {
    esnext: true
  },

  module: {

    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],

    loaders: [
      { 
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          stage: 1
        }
      },
      { 
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      { 
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      { 
        test: /\.(png|jpg|woff)$/,
        loader: "url-loader?limit=100000"
      }, 
      { 
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  },
  
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};