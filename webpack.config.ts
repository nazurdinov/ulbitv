import { buildWebpackConfig } from "./config/build/BuildWebpackOptions";
import path from "path";
import { BuildEnv } from "./config/build/types/config";


export default (env: BuildEnv) => {


  const buildPath = {
    entry: {
      main: path.resolve(__dirname, 'src', 'index.tsx'),
    },
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'

  const config = buildWebpackConfig({
    mode: mode,
    paths: buildPath,
    port: PORT,
    isDev
  })

  return config
}