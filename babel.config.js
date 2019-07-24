module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],  
  //presets: [['@babel/preset-env', {targets: {node: 'current'}}, '@babel/preset-react']],
  plugins: ["@babel/plugin-proposal-class-properties"]
  // presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};