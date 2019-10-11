/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        pallet: {
          text: '#00cda2',
          background: '#343c45',
          main: '#27333e',
          sidebar: '#1a242e',
          navbar: '#10171e'
        }
      },
      fontFamily: {
        main: 'Saira'
      },
      margin: {
        '72': '18rem'
      }
    }
  },
  variants: {},
  plugins: []
}
