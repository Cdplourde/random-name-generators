// const fs = require('fs')
// const path = require('path')

// let ENV_DEV = true

// // Development Environment
// let port = 3000
// let host = 'localhost'
// let https = false
// if (ENV_DEV == false) {
//   port = 3000
//   host = '<domain-name>'
//   https =  {
//         key: fs.readFileSync(path.resolve(__dirname,
//         './../../ssl/keys/<ssl-key-file-name>.key')),
//   cert: fs.readFileSync(path.resolve(__dirname,
//         './../../ssl/certs/<ssl-crt-file-name>.crt'))
//   }
// }

export default {
  mode: 'universal',
  // env: {

  // },
  // server: {
  //   port: port,
  //   host: host,
  //   timing: false,
  //   https: https
  // },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-158090632-1'
      }
    ]
  ],
  debug: {
    enabled: true,
    sendHitTask: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-purgecss'
  ],
  /*
   ** PurgeCSS settings
   */
  purgeCSS: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production' &&
        require('@fullhuman/postcss-purgecss')({
          content: ['./public/index.html'],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
