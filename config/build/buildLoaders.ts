import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import buildCssLoader from './loaders/buildCssLoader'
import buildSvgLoader from './loaders/buildSvgLoader'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const svgLoader = buildSvgLoader()

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoaders = buildCssLoader(isDev)

  return [
    tsLoader,
    cssLoaders,
    svgLoader,
    fileLoader
  ]
}
