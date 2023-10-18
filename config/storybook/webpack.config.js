import path from 'path'
import buildCssLoader from '../build/loaders/buildCssLoader'
import buildSvgLoader from '../build/loaders/buildSvgLoader'

module.exports = async ({ config, mode }) => {
  config.resolve.preferAbsolute = true
  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))

  config.resolve.alias = {
    entities: path.resolve(__dirname, '..', '..', 'src/entities/')
  }

  config.module.rules.push(buildCssLoader())

  // remove existing loader for svg files
  config.module.rules = config.module.rules.filter((rule) => !/svg/.test(rule.test))

  config.module.rules.push(buildSvgLoader())
  return config
}
