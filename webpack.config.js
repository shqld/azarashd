module.exports = env => ({
  mode: env.isProd ? 'production' : 'development',
  entry: {},
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
})
