import { type Configuration } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolve'
import { BuildDevServer } from './BuildDevServer'

export function buildWebpackConfig (options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,

    entry: paths.entry,

    output: {
      filename: '[name].[contenthash:4].js',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options)
    },

    resolve: buildResolvers(options),

    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: BuildDevServer(options)
  }
}
