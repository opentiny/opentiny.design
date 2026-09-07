import { computed } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/layout.vue'
import { VITE_CONTEXT, isTinyCloud, menuPathMap } from './shared'
import { $t, $t2, geneTitle, getI18n, pathJoin } from './tools'

const Resource = () => import('@/views/resource/index.vue')
const Guide = () => import('@/views/guide/index.vue')
const ComponentOverview = () => import('@/views/overview/overview.vue')
const HomePage = () => import('@/views/home/index.vue')

const Docs = () => import('@/views/docs/docs.vue')
const Developing = () => import('@/views/developing/index.vue')
const Tools = () => import('@/views/tools/index.vue')
const IconPage = () => import('@/views/icon/index.vue')
const tinyVueHome = () => import('@/views/tiny-vue-home/index.vue')
const tinyRobotHome = () => import('@/views/tiny-robot-home/index.vue')
const aiExtensionHome = () => import('@/views/ai-extension-home/index.vue')
const nextSdksHome = () => import('@/views/next-sdks-home/index.vue')
const genuiSdkHome = () => import('@/genui-sdk/index.js')
const nextPage = () => import('@/views/home/next-page/index.vue')
const allProducts = () => import('@/views/home/all-products/index.vue')
const langKey = computed(() => $t2('zh-CN', 'en-US'))

export const rootRoutes = [
  {
    path: VITE_CONTEXT,
    component: Layout,
    children: [
      {
        path: '',
        component: HomePage,
        name: 'home',
        meta: { title: geneTitle('') }
      },
      {
        path: 'tiny-robot',
        component: tinyRobotHome,
        name: 'tiny-robot',
        meta: { title: geneTitle('') }
      },
      {
        path: 'ai-extension',
        component: aiExtensionHome,
        name: 'ai-extension',
        meta: { title: geneTitle('') }
      },
      {
        path: 'next-sdk',
        component: nextSdksHome,
        name: 'next-sdk',
        meta: { title: geneTitle('') }
      },
      {
        path: 'genui-sdk',
        component: genuiSdkHome,
        name: 'genui-sdk',
        meta: { title: geneTitle('') }
      },
      {
        path: 'next-page',
        component: nextPage,
        name: 'next-page',
        meta: { title: geneTitle('OpenTiny NEXT') }
      },
      {
        path: 'all-products',
        component: allProducts,
        name: 'all-products',
        meta: { title: geneTitle('') }
      },
      {
        path: 'opentiny-design',
        children: [
          {
            path: '',
            redirect: {
              path: `${VITE_CONTEXT}opentiny-design/design-principle`
            }
          },
          {
            path: 'tiny-vue',
            component: tinyVueHome,
            name: 'tiny-vue',
            meta: { title: geneTitle('') }
          },
          {
            path: 'guide',
            children: [
              {
                path: '',
                redirect: {
                  path: `${VITE_CONTEXT}opentiny-design/guide/installation`
                }
              },
              {
                path: ':docId',
                component: Guide,
                name: 'guide',
                meta: { title: geneTitle('指南') },
                props: (route) => {
                  const {
                    params: { docId }
                  } = route

                  return {
                    mdPath: `tinydoc-design/guide/${langKey.value}/${docId}.md`
                  }
                }
              }
            ],
            meta: { title: geneTitle('指南') },
            props: (route) => {
              const {
                params: { docId },
                path
              } = route
              const { mdPath } = menuPathMap.value.get(path) || {}
              return {
                mdPath: getI18n(mdPath)
              }
            }
          },
        ]
      },
      {
        name: 'not-found',
        path: ':pathMatch(.*)*',
        redirect: ({ path }) => {
          if (sessionStorage.getItem('opentiny_design_reloaded') !== 'true') {
            sessionStorage.setItem('opentiny_design_reloaded', 'true')
            return location.reload()
          }
          sessionStorage.removeItem('opentiny_design_reloaded')
          return { path: VITE_CONTEXT }
        }
      }
    ]
  }
]
const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: rootRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

const removeEmptyHash = async () => {
  const originReplaceState = history.replaceState
  function replaceState(...args) {
    const urlIndex = 2
    if (typeof args[urlIndex] === 'string') {
      args[urlIndex] = args[urlIndex].replace(/#\/?$/, '')
    }
    return originReplaceState.apply(this, args)
  }
  history.replaceState = replaceState
}

removeEmptyHash()

// 为浏览器添加title
router.afterEach((to, from) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
  isTinyCloud.value = to.path.startsWith(`${VITE_CONTEXT}opentiny-design/design-develop/console/tiny-cloud/`)

  window.__checkUnderlineMenu() // 更新header中的下划线
})
export { router }
