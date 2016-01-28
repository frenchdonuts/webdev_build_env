var autoprefixer = require('autoprefixer')

module.exports = {
  entry: getEntrySources(['./js/main.js']),
  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'build/bundle.js',
  },
  devtool: 'eval',
  module: {
    preLoaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'source-map'
    }
    ],
    loaders: [
    {
      test: /\.scss$/,
      loader: 'style!css!postcss!sass'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=8192!img'
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel?presets[]=stage-0,presets[]=react,presets[]=es2015',
    }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
      sources.push('webpack-dev-server/client?http://localhost:8080')
      sources.push('webpack/hot/only-dev-server')
  }

  return sources
}
