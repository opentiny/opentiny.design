<template>
  <div class="projects-page">
    <!-- 第一部分：Hero Banner -->
    <div class="hero-banner">
      <div class="hero-content">
        <h1 class="hero-title">全部项目</h1>
        <p class="hero-desc">安全、可信、持续创新的产品与服务</p>
      </div>
    </div>

    <!-- 第二部分：内容区域 -->
    <div class="content-section">
      <!-- 左侧步骤条 -->
      <aside class="sidebar">
        <div class="content-title">产品类型</div>
        <nav class="step-nav">
          <div
            v-for="(item, index) in sections"
            :key="index"
            class="step-item"
            :class="{ active: activeIndex === index }"
            @click="scrollToSection(index)"
          >
            <span class="step-dot"></span>
            <span class="step-label">{{ item.title }}</span>
          </div>
        </nav>
      </aside>

      <!-- 右侧内容 -->
      <main class="main-content">
        <div
          v-for="(section, sIndex) in sections"
          :key="sIndex"
          :id="'section-' + sIndex"
          class="section-block"
          :ref="(el) => { if (el) sectionRefs[sIndex] = el }"
        >
          <h2 class="section-title">{{ section.title }}</h2>
          <p class="section-desc">{{ section.description }}</p>

          <div class="card-grid">
            <a
              v-for="(card, cIndex) in section.cards"
              :key="cIndex"
              class="content-card"
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-icon">
                <img :src="card.icon" :alt="card.title" />
              </div>
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-desc">{{ card.desc }}</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import './index.less'

const activeIndex = ref(0)
const sectionRefs = ref<HTMLElement[]>([])
const getIconAppUrl = (name) => new URL(`../../../../../common/src/assets/appIcon/${name}.svg`, import.meta.url).href;

const isGitHubBuild = import.meta.env.MODE === 'github'
const isGitHubRuntime = typeof window !== 'undefined' && window.location.hostname.includes('opentiny.github.io')
const isGitHub = isGitHubRuntime || isGitHubBuild
const basePath = isGitHub ? '/opentiny.design/' : '/'
const isTargetDomain = location.hostname === 'opentiny.design'
const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1'

const sections = [
  {
    title: 'AI 应用开发',
    description: 'AI 交互组件 / AI 应用开发 SDK / 生成式界面 SDK / AI 扩展插件 / MCP 接入服务',
    cards: [
      {
        title: 'TinyRobot',
        desc: '提供丰富组件，高效搭建 Web 页面',
        icon: getIconAppUrl('tiny-robot'),
        link:`${basePath}tiny-robot`
      },
      {
        title: 'GenUI-SDK',
        desc: '根据对话数据动态，生成交互界面',
        icon: getIconAppUrl('genui-sdk'),
         link: `https://docs.opentiny.design/genui-sdk/guide/quick-start`
      },
      {
        title: 'NEXT SDKs',
        desc: '快速接入模型，工具和智能交互能力',
        icon: getIconAppUrl('next-sdk'),
        link: `${basePath}next-sdk`
      },
      {
        title: 'AI-Extension',
        desc: '为现有应用快速增加 AI和MCP 能力',
        icon: getIconAppUrl('ai-extension'),
        link: `${basePath}ai-extension`
      },
      {
        title: 'WebAgent',
        desc: '统一链接和管理 MCP 工具服务',
        icon: getIconAppUrl('web-agent'),
        link: 'https://docs.opentiny.design/web-agent/guide/getting-started.html'
      }
    ]
  },
  {
    title: '低代码应用搭建',
    description: '可视化搭建/开放扩展能力',
    cards: [
      {
        title: 'TinyEngine',
        desc: '支持实时构建，二次开发，插件灵活扩展',
        icon: getIconAppUrl('tiny-engine'),
        link:  isTargetDomain ? `${basePath}tiny-engine` : isLocal ? '/' : `${location.protocol}//${location.hostname}/tiny-engine`
      }
    ]
  },
  {
    title: '跨端 UI 组件库',
    description: '提供丰富组件，高效搭建Web页面',
    cards: [
      {
        title: 'TinyVue',
        desc: '跨端、跨框架的企业级 UI 组件库',
        icon: getIconAppUrl('tiny-vue'),
        link: isTargetDomain ? `${basePath}tiny-vue` : isLocal ? '/' : `${location.protocol}//${location.hostname}/tinyvue`
      },
      {
        title: 'TinyNg',
        desc: 'Angular PC 端产品，70+ 开箱即用组件',
        icon: getIconAppUrl('tiny-ng'),
        link: `https://opentiny.design/tiny-ng/overview`
      },
      {
        title: 'TinyCharts',
        desc: '依赖于 ECharts，全量图表库',
        icon: getIconAppUrl('tiny-chart'),
        link: 'https://opentiny.design/tiny-charts/QuickStart'
      },
      {
        title: 'TinyEditor',
        desc: '支持 JS/Vue/React/Angular',
        icon: getIconAppUrl('tiny-editor'),
        link: location.hostname === 'opentiny.design' ? `https://docs.opentiny.design/tiny-editor/guide/quick-start.html` : 'https://opentiny.github.io/tiny-editor'
      }
    ]
  },
  {
    title: '前端应用开发',
    description: '提供可直接复用的企业应用模板',
    cards: [
      {
        title: 'TinyPro Vue',
        desc: '基于 TinyVue 组件库企业级中后台前端/设计解决方案',
        icon: getIconAppUrl('tiny-pro'),
        link: 'https://opentiny.design/vue-pro'
      },
      {
        title: 'TinyPro Angular',
        desc: '基于 TinyNG 组件库企业级中后台前端/设计解决方案',
        icon: getIconAppUrl('tiny-pro-ng'),
        link: 'https://opentiny.design/ng-pro'
      },
      {
        title: 'TinyCLI',
        desc: '提供一系列健壮的工具、套件、插件和工作流',
        icon: getIconAppUrl('tiny-cli'),
        link: '/tiny-cli/home'
      }
    ]
  }
]

let observer: IntersectionObserver | null = null

const scrollToSection = (index: number) => {
  activeIndex.value = index
  const el = document.getElementById('section-' + index)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => {
      window.scrollBy({ top: -80, behavior: 'smooth' })
    }, 10)
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          const index = parseInt(id.replace('section-', ''))
          activeIndex.value = index
        }
      })
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }
  )

  sectionRefs.value.forEach((el) => {
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>