// const checkENVs = require('./src/helpers/check-envs');
// If exists launch argument  '-p';
const productionArg = process.argv.indexOf('-p') !== -1;
const inProduction = productionArg ? 'production' : 'development';
// const buildArgs = require('minimist')(process.argv.slice(2));
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin'); // creates json with dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates index.html with all dep..s
const JavaScriptObfuscator = require('webpack-obfuscator');

// generate index.html in dev-mode
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

// exclude js/css from finish version of index.html
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

// Main config
function getConfig(env = {}) {
  const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
      main: ['webpack-dev-server/client'], // for dev mode
      // app: ['babel-polyfill', 'formdata-polyfill', './app'], // entry point
      app2: ['babel-polyfill', './js/index.js'], // entry point
      common_css: [
        './styles/main',
        './styles/reset',
        // './styles/helpers/font-awesome.less'
      ] // global styles sets
    },
    output: {
      path: path.resolve(__dirname, './www/assets'), // for bundle files
      filename: '[name].bundle.[hash].js', // file mask
      chunkFilename: '[name].[hash].js',
      publicPath: inProduction === 'production' ? '/assets/' : '/assets/' // for dev-mode
    },
    devServer: {
      // historyApiFallback: true,
      // https: true,
      hot: true,
      // host: env.hostname ? env.hostname : 'Error reason in host name',
      inline: true,
      // port: 443,
      contentBase: path.resolve(__dirname, 'www/') // for dev-mode
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', 'less', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            {
              loader: 'url-loader',
              // options: {
              //   limit: 65000
              // } // Convert images < 65k to base64 strings
            }
          ]
        },
        // fonts
        {
          test: /\.(svg|ttf|eot|woff|woff2)$/,
          loader: 'file-loader?name=../fonts/[name].[ext]'
        },
        // js/jsx/es6
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'es2016', 'es2017', 'react', 'stage-0']
                // ignore: '/node_modules/' // ------------------
              }
            }
          ]
        },
        // css
        {
          test: /\.css$/,
          // include: path.resolve(__dirname, 'src'),
          // use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
          use: ExtractTextPlugin.extract({
            // exclude: /node_modules/,
            fallback: 'style-loader',
            // use: ['css-loader[contenthash]?sourceMap', 'postcss-loader'],
            use: ['css-loader?sourceMap', 'postcss-loader']
          })
        },
        // sass/scss
        {
          test: /\.(scss|sass)$/,
          include: path.resolve(__dirname, 'src'),
          use: ExtractTextPlugin.extract({
            // exclude: /node_modules/,
            fallback: 'style-loader',
            use: ['css-loader?sourceMap', 'postcss-loader', 'sass-loader']
          })
        },
        // less
        {
          test: /\.less$/,
          include: path.resolve(__dirname, 'src'),
          use: ExtractTextPlugin.extract({
            // exclude: /node_modules/,
            fallback: 'style-loader',
            use: ['css-loader?sourceMap', 'postcss-loader', 'less-loader']
          })
        },
        // {test: /\.jade$/, use: [{loader: 'jade-loader'}]}
        {test: /\.html$/, use: [{loader: 'html-loader'}]}
      ]
    },
    plugins: [
      // new CleanWebpackPlugin(['./www/rd2hash/assets/*.*']), // clean folder before  every bundling
      new CleanWebpackPlugin(['./www/assets/*.*']), // clean folder before  every bundling
      new CleanWebpackPlugin(['./www/index.html', './www/dpa.html', './www/terms.html']), // clean file before every bundling
      // new CleanWebpackPlugin(['./www/dpa.html']), // clean file before every bundling
      // new CleanWebpackPlugin(['./www/rd2hash/index.html']), // clean file before every bundling
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        /** Add all required variables for checking, in arrForCheckEnvs of checkENVs function! */
        'process.env': {
          // process.env.NODE_ENV in JavaScript
          'NODE_ENV': JSON.stringify(inProduction),
           }
      }),
      new ExtractTextPlugin({
        filename: '[name].bundle.[contenthash].css',
        allChunks: true
      }),
      // new AssetsPlugin({
      //   filename: 'assets.json',
      //   path: `${__dirname}/www/assets`
      // }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'www/template.html'),
        filename: '../index.html',
        minify: false,
        alwaysWriteToDisk: true,
        excludeAssets: [/main.bundle.*.js/, /common_css.bundle.*.js/]
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'www/template-dpa.html'),
        filename: '../dpa.html',
        minify: false,
        alwaysWriteToDisk: true,
        excludeAssets: [/main.bundle.*.js/, /common_css.bundle.*.js/]
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'www/template-terms.html'),
        filename: '../terms.html',
        minify: false,
        alwaysWriteToDisk: true,
        excludeAssets: [/main.bundle.*.js/, /common_css.bundle.*.js/]
      }),
      new HtmlWebpackExcludeAssetsPlugin(),
      new HtmlWebpackHarddiskPlugin({
        outputPath: path.resolve(__dirname, 'www/assets')
      })
    ],
    devtool: 'source-map'
  };

  if (inProduction === 'production') {
    config.devtool = false;

    const ugly = new webpack.optimize.UglifyJsPlugin({
      comments: false,
      minimize: true,
      beautify: false,
      compress: {
        warnings: false,
        drop_console: true // disable console
      },
      sourceMap: false
    });
    // config.devtool = false;

    const obfuscator = new JavaScriptObfuscator({
      compact: true,
      identifierNamesGenerator: 'hexadecimal'
    }, []);

    config.plugins.push(ugly);
    // config.plugins.push(obfuscator);

  }
  return config;
}


// https://webpack.js.org/guides/environment-variables/
module.exports = env => {
  // checkENVs(env, inProduction);
  return getConfig(env);
};
