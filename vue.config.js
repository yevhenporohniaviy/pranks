module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pranks/'
    : '/',

  transpileDependencies: [
    'vuetify'
  ]
}
