import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import UnoCssConfig from './uno.config'
import AutoComponents from 'unplugin-vue-components/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'
import { MdExt, mdInstall } from './md.extend.config'
import Inspect from 'vite-plugin-inspect'
import importPlugin from '@opentiny/vue-vite-import'
import { visualizer } from 'rollup-plugin-visualizer'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

function _resolve(dir) {
  return path.resolve(__dirname, dir)
}

export default defineConfig(({ command, mode }) => {
  return {
    envDir: './env',
    plugins: [
      mode === 'analyze' ? visualizer({ open: true }) : undefined,
      vue({
        include: [/\.vue$/, /\.md$/],
        exclude: [/node_module/]
      }),
      importPlugin({
        options: [
          {
            libraryName: '@opentiny/vue'
          },
          {
            libraryName: `@opentiny/vue-icon`,
            customName: (name) => {
              return `@opentiny/vue-icon/lib/${name.replace(/^icon-/, '')}.js`
            }
          }
        ],
        exclude: [/genui-sdk/]
      }),
      Inspect(),
      vueJsx({
        include: [/\.js$/, /\.jsx$/, /\.ts$/, /\.tsx$/],
        exclude: [/node_module/]
      }),
      // 支持md转为vue组件：   https://github.com/antfu/vite-plugin-md#configuration--options
      Markdown({
        headEnabled: true,
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true
        },
        markdownItSetup(md) {
          mdInstall(md)
        },
        markdownItUses: MdExt
      }),
      Unocss(UnoCssConfig),
      // 自动导入和项目组件   https://github.com/antfu/unplugin-vue-components#configuration
      AutoComponents({
        // 搜索下面目录中的 *.vue  *.md 都做为vue组件
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        exclude: [/node_module/]
      }),
      viteStaticCopy({
        targets: [
          {
            src: '../home/public/downloadFile/*',
            dest: `dist/home/downloadFile`
          }
        ]
      })
    ],
    define: {
      'process.env': { TINY_MODE: 'pc' }
    },
    base: process.env.VITE_BASE || process.env.VITE_EnvName || '/',
    build: {
      outDir: `../../dist/home`,
      commonjsOptions: {
        transformMixedEsModules: true
      },
      emptyOutDir: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/genui-sdk/sites/homepage/web/dist/')) {
              const rel = id.split('/genui-sdk/sites/homepage/web/dist/')[1]
              const normalized = rel.replace(/[^a-zA-Z0-9]/g, '-').replace(/^-+|-+$/g, '')
              return `genui-sdk-${normalized}`
            }
            return undefined
          }
        }
      }
    },
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '@/genui-sdk': _resolve('../../genui-sdk/sites/homepage/web/dist'),
        '@': _resolve('src'),
        '@/components': _resolve('src/components'),
        'flexsearch': 'flexsearch/dist/flexsearch.bundle.js'
      }
    },
    server: {
      port: 3100,
      host: '0.0.0.0',
      fs: {
        strict: false,
        allow: ['..']
      }
    }
  }
})
