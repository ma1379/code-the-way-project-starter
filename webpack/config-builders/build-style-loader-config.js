import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildStyleLoaderConfig = (production = false) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: false,
    },
  };

  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['autoprefixer'],
      },
      sourceMap: false,
    },
  };

  const sassLoader = {
    loader: 'sass-loader',
    options: { sourceMap: false },
  };

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            cssLoader,
          ],
        },
        {
          test: /\.scss$/,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            postCssLoader,
            sassLoader,
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        chunkFilename: '[name]-[id].css?v=[contenthash]',
        filename: '[name].css?v=[contenthash]',
      }),
    ],
  };
};
