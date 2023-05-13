const { NaiveUiResolver } = require('unplugin-vue-components/resolvers');
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        resolvers: [NaiveUiResolver()],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/],
        exclude: [/node_modules/],
      }),
    ],
  },
};
