import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers (options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: [
      options.paths.src,
      'node_modules'
    ]
  }
}
