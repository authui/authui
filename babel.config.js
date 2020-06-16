module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  "ignore": [
    "/node_modules/"
  ],
  "plugins": [
    [
      "react-native-web",
      {
        "commonjs": true
      }
    ]
  ]
};
