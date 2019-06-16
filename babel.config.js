module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    'react-native',
    'module:metro-react-native-babel-preset'
  ]
};