const path = require('path');

const SRC = path.resolve(__dirname, 'node_modules');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.mp3$/,
    include: SRC,
    loader: 'file-loader'
  })

  return config
}
