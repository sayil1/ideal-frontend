// webpack.config.js
/* eslint-disable */
module.exports = {
  
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require('sass'),
              fiber: require('fibers'),
              indentedSyntax: true // optional
            },
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
    ],
    chainWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        config.module.rule('vue').uses.delete('cache-loader');
        config.module.rule('js').uses.delete('cache-loader');
        config.module.rule('ts').uses.delete('cache-loader');
        config.module.rule('tsx').uses.delete('cache-loader');
      }
    }
    
  }