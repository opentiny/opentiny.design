import packageJson from '../package.json'

export function inertDepsVersion() {
  if (typeof document === 'undefined') return

  const {
    npm_package_devDependencies_vite: ViteVersion,
    npm_package_dependencies_vue: VueVersion,
  } = process.env
  const version = packageJson.version

  document.body.setAttribute('data-vite-version', ViteVersion || 'dev')
  document.body.setAttribute('data-vue-version', VueVersion || 'dev')
  document.body.setAttribute('data-version', version)
}
