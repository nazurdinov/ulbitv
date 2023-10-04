import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOptions } from './types/config'

export function BuildDevServer ({ port }: BuildOptions): DevServerConfiguration {
  return {
    port,
    open: false,
    historyApiFallback: true,
    client: {
      overlay: false
    }
  }
}
