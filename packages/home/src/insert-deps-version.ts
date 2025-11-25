import { version as vueVersion } from 'vue'
import { version as homeVersion } from '../package.json'

export function inertDepsVersion() {
  document.body.setAttribute('data-vue-version', vueVersion)
  document.body.setAttribute('data-version', homeVersion)
}
