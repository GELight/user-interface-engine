const packageJson = require('./package.json')
const config = require('./config.js')

const host = config.host + ':' + config.port;

module.exports = {
  
  assetsDir: host + '/' + packageJson.name + '/',

  /*
  chainWebpack: config => {
    config.plugins.delete('preload-simpleSearch')

    config
      .plugin('html-simpleSearch')
      .tap(args => {
        
        if (process.env.NODE_ENV === 'production') {
          args[0].minify.removeAttributeQuotes = false
        }
        
        return args
      })

      config
      .plugin('html-search')
      .tap(args => {
        
        if (process.env.NODE_ENV === 'production') {
          args[0].minify.removeAttributeQuotes = false
        }
        
        return args
        })
    
        config
        .plugin('html-details')
        .tap(args => {
          
          if (process.env.NODE_ENV === 'production') {
            args[0].minify.removeAttributeQuotes = false
          }
          
          return args
        })
  },

  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  pages: {
    simpleSearch: 'src/pages/orders/simple-search/main.js',
    search: 'src/pages/orders/search/main.js',
    details: 'src/pages/orders/details/main.js'
  }
  */

}
