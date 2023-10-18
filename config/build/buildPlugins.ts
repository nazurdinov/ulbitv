import { type WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins ({ paths, isDev, baseUrl }: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:3].css',
      chunkFilename: 'css/[id].[contenthash:3].css'
    }),
    new DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
      _BASE_URL_: JSON.stringify(baseUrl)
    })
  ]
  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }
  return plugins
}
