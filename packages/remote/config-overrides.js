const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies
const paths = require('react-scripts/config/paths')

module.exports = function override (config) {
  config.output.publicPath = 'auto'
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.js'
      },
      remotes: {
        commonComponents:
          'commonComponents@http://localhost:3601/remoteEntry.js'
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
