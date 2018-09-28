const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");


module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules[0].test = /\.(ts|tsx)$/;
  config.module.rules[0].query.presets = ["babel-preset-env"];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(".ts", ".tsx");
  // [ts-loader, babel-loader, ...]

  return config;
};