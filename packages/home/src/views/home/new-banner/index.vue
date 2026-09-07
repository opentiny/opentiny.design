<template>
  <div class="news-section">
    <div class="section-hero" id="news-anchor">
      <!-- 浮动光晕背景 -->
      <div class="glow-layer">
        <div class="glow-orb"></div>
      </div>
      <div class="hero-title">企业级前端AI应用开发平台</div>
      <div class="hero-subtitle">
        <span class="typewriter-text">{{ subtitleText }}</span>
      </div>

      <div role="button" class="hero-search" @click="searchClick"  @keydown.enter="searchClick" @keydown.space.prevent="searchClick">
        <span class="search-text">有什么可以帮助您，我可以 帮您处理工作</span>
        <div class="search-icon"></div>
      </div>
      <div class="hero-actions">
        <tiny-button type="primary" round size="medium" @click="handleClick('find')">
          探索智能化
          <i class="btn-arrow btn-arrow-light"></i>
        </tiny-button>
        <tiny-button round size="medium" @click="handleClick('cmp')">
          组件库
          <i class="btn-arrow btn-arrow-dark"></i>
        </tiny-button>
      </div>
    </div>

    <div class="section-body">
      <div class="card-list">
        <div class="card-grid">
          <tiny-tooltip
            v-for="item in cardList"
            :key="item.id"
            :content="item.title"
            placement="top"
            effect="light"
          >
            <div
              class="info-card"
              @click="cardFn(item.href)"
            >
              <p :title="item.title">
                <a
                  :href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ item.title }}
                </a>
              </p>
              <span :title="item.desc">{{ item.desc }}</span>
              <div class="card-meta">{{ item.date }}</div>
            </div>
          </tiny-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { Button as TinyButton, Tooltip as TinyTooltip } from '@opentiny/vue'
import './index.less'

const router = useRouter()
let timer = null

const isGitHubBuild = import.meta.env.MODE === 'github'
const isGitHubRuntime = typeof window !== 'undefined' && window.location.hostname.includes('opentiny.github.io')
const isGitHub = isGitHubRuntime || isGitHubBuild
const basePath = isGitHub ? '/opentiny.design/' : '/'

const subtitleText = ref('')

onMounted(() => {
  const text = '企业级前端开源 | 覆盖设计，开发，搭建与智能化升级'
  let i = 0
  timer = setInterval(() => {
    if (i < text.length) {
      subtitleText.value += text[i]
      i++
    } else {
      clearInterval(timer)
    }
  }, 80)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})

const cardFn = (link) => {
  window.open(link, '_blank', 'noopener,noreferrer')
}

const searchClick = () => {
  window.open(`${basePath}tiny-robot`, '_blank', 'noopener=yes,noreferrer=yes')
}

const handleClick = (msg) => {
  if (msg === 'find') {
    router.push({ name: 'next-page' })
  } else {
    window.open(`/opentiny-design/tiny-vue`, '_blank', 'noopener=yes,noreferrer=yes')
  }
}

const cardList = [
  {
    id: 1,
    title: '直播分享|收官篇：从开发到运行，打造AI智能应用全链路',
    href: 'https://www.bilibili.com/video/BV14SMv6NE1d/?spm_id_from=333.337.search-card.all.click',
    desc: 'TinyVue、TinyRobot、GenUI、WebMCP、WebAgent等核心能力，展示AI从生成页面、理解页面到调用工具、完成业务操作的全链路实践。',
    date: '2026-07-08'
  },
  {
    id: 2,
    title: 'GenUI SDK v1.3.0 发布：多框架兼容，一键换物料，渲染器 & 演练场全面增强',
    href: 'https://mp.weixin.qq.com/s/syIEFHTO4VhrkhWK2ajyEA',
    desc: '解耦发包、物料体系可插拔、渲染器能力强化、多框架协同渲染、演练场全方位升级五大核心方向迭代。彻底解决旧版耦合度高、框架适配弱、自定义拓展受限等痛点。',
    date: '2026-08-11'
  },
  {
    id: 3,
    title: 'TinyRobot v0.5.0 版本发布：Agent Skills、导航、自定义布局等多项全新能力同步上线！',
    href: 'https://mp.weixin.qq.com/s/MVQmOXyadS2zlJhOEaR3wA',
    desc: '"搭一个 AI 聊天应用"这件事变得更简单了，提供从对话 UI、流式渲染到会话管理的完整能力，使开发者无需自研复杂交互逻辑，即可构建体验一致、可扩展的 AI 产品。',
    date: '2026-07-21'
  }
]
</script>