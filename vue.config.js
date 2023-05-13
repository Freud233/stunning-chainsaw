module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [require('unplugin-vue-components/webpack')({})],
  },
};
