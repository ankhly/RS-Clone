const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devServer = (isDevelopment) => !isDevelopment ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/assetsStatic',
    },
    devMiddleware: { index: 'index.html' },
  },
};

const esLintPlugin = (isDevelopment) => isDevelopment ? [] : [
  new ESLintPlugin({ extensions: ['ts', 'js'] })
];

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: '[name].[contenthash].js',
    // or just bundle.js // [name] for multipage building (entry > 1)
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assetsDynamic/[hash][ext]', // from: 'assets'
    // 1. assets from CSS/SCSS { path to "local directory" in "src" - url('path to img') } (Dynamic assets)
    // 2. assets from JS { path to "local directory" in "src" - import img from 'path to img' }
    // 3. assets from TS { path to "local directory" in "src" import img from 'path to img' } (with types.d.ts) (Dynamic assets)
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
      // if add 'filename' - add 'devMiddleware: { index: 'main.html' }' for devServer
      // [name] for match '[name].html' and '[name].js/css'
      // for multipage building (entry > 1) create array pages and add HtmlWebpackPlugin according to array
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    // or just style.css // [name] for multipage building (entry > 1)
    new CopyPlugin({ // from: 'public'
      // 1. assets from HTML { path to "copy directory" in "dist" } (Static assets)
      // 2. assets from JS/TS in HTML tag `<img src=''>` { path to "copy directory" in "dist" } (Static assets)
      patterns: [{
        from: './public',
        to: 'assetsStatic',
        noErrorOnMissing: true,
      }],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ...esLintPlugin(development),
  ],
  ...devServer(development),
});
