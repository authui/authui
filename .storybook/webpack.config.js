const { resolve } = require('path');
module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        include: [
            resolve(__dirname, '../src'),
        ],
        use: [
            require.resolve('ts-loader'),
            require.resolve('react-docgen-typescript-loader')
        ]
    });
    config.resolve.alias = {
      "react-native": "react-native-web"
    }
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
