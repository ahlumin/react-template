const path = require("path");

module.exports = async ({ config }) => {
  config.resolve = {
    modules: [path.resolve("node_modules"), path.resolve("src")],
    extensions: [".js"]
  };

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[hash:8]_[local]"
        }
      },
      "postcss-loader",
      "sass-loader"
    ]
  });

  return config;
};
