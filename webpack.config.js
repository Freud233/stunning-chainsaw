module.exports = {
  module: {
    rules: [
      {
        test: /\.(otf)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'assets/fonts',
        },
      },
    ],
  },
};
