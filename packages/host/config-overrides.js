const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

module.exports = function override (config) {
  config.output.publicPath = 'auto'
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        commonComponents:
          'commonComponents@http://localhost:3601/remoteEntry.js',
        remote: 'remote@http://localhost:3602/remoteEntry.js'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        }
      }
    })
  )
  return config
}
