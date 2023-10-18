import { buildWebpackConfig } from './config/build/BuildWebpackOptions'
import path from 'path'
import { type BuildEnv } from './config/build/types/config'
import { type Configuration } from 'webpack'

export default (env: BuildEnv): Configuration => {
  const buildPath = {
    entry: {
      main: path.resolve(__dirname, 'src', 'index.tsx')
    },
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'
  const baseUrl = isDev ? 'http://localhost:8000' : 'http://prod.com'

  const config = buildWebpackConfig({
    mode,
    paths: buildPath,
    port: PORT,
    isDev,
    baseUrl
  })

  return config
}
