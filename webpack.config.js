const path = require('path');
const nodeExternals = require('webpack-node-externals');

const commonConfig = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals: [nodeExternals()]
};

const commonjsConfig = {
  ...commonConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  }
};

const esmConfig = {
  ...commonConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.esm.js',
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  }
};

module.exports = [commonjsConfig, esmConfig];
