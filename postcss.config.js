module.exports = {
  plugins: {
    'postcss-smart-import': {},
    // add prefixes for old and different browsers
    autoprefixer: { browsers: ['> 1%', 'ie >= 8'] },
    //  new syntax in developming http://cssnext.io/
    cssnext: {},
    //  check syntax, optimization,  etc.   http://cssnano.co/
    cssnano: {}
  }
};
