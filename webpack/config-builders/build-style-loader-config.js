import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildStyleLoaderConfig = (production = false) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: false,
    },
  };

  const cssModulesLoader = {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      modules: {
        localIdentName: production
          ? '[contenthash:base64:5]'
          : '[name][local][contenthash:base64:5]',
      },
      sourceMap: !production,
    },
  };

  const sassLoader = {
    loader: 'sass-loader',
    options: { sourceMap: !production },
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
            cssModulesLoader,
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
