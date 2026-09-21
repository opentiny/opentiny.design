<template>
  <div class="product-grid-page">
    <!-- 页面标题区 -->
    <div class="page-header">
      <h1 class="page-title">NEXT 智能应用开发系列产品</h1>
      <p class="page-desc">产品矩阵，确保开发一站落地</p>
    </div>

    <div class="grid-container">
      <div class="grid-row grid-row-top">
        <div
          class="grid-card card-light"
          v-for="(card, i) in topCards"
          :key="'top-' + i"
          :style="getLightStyle(i)"
        >
          <div class="card-badge">
            <img :src="getIconUrl('part-three-f')" alt="badge" />
          </div>

          <div
            class="card-bg-image"
            :style="{ backgroundImage: `url(${card.bgImage})` }"
          ></div>
          
          <div class="card-content">
            <div class="card-header">
              <img class="card-icon" :src="card.icon" :alt="card.brand" />
              <span class="card-brand">{{ card.brand }}</span>
            </div>
            <div class="card-title">{{ card.title }}</div>
            <div class="card-desc" v-html="card.desc"></div>
            <a
              class="card-link"
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              了解详情
            </a>
          </div>
        </div>
      </div>

      <div class="grid-row grid-row-bottom">
        <div
          class="grid-card card-dark"
          v-for="(card, i) in bottomCards"
          :key="'bottom-' + i"
          :style="getDarkStyle(i)"
        >
          <div
            class="card-bg-image"
            :style="{ backgroundImage: `url(${card.bgImage})` }"
          ></div>
          
          <div class="card-content">
            <div class="card-header">
              <img class="card-icon" :src="card.icon" :alt="card.brand" />
              <span class="card-brand">{{ card.brand }}</span>
            </div>
            <div class="card-title">{{ card.title }}</div>
            <div class="card-desc-large" v-html="card.desc"></div>
            <a
              class="card-link"
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              了解详情
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="more-link">
      <a
        class="card-link"
        target="_blank"
        rel="noopener noreferrer"
        @click="hrefGo"
      >
        查看更多产品
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const getBgUrl = (name: string) => 
  new URL(`../../../../assets/images/new-icon/next-page/${name}.png`, import.meta.url).href
const getIconUrl = (name: string) => 
  new URL(`../../../../assets/images/new-icon/next-page/${name}.svg`, import.meta.url).href
const getIconAppUrl = (name: string) => new URL(`../../../../../../common/src/assets/appIcon/${name}.svg`, import.meta.url).href;
const isGitHubBuild = import.meta.env.MODE === 'github'
const isGitHubRuntime = typeof window !== 'undefined' && window.location.hostname.includes('opentiny.github.io')
const isGitHub = isGitHubRuntime || isGitHubBuild
const basePath = isGitHub ? '/opentiny.design/' : '/'

const topCards = [
  {
    brand: 'TinyRobot',
    title: 'AI 交互组件',
    desc: '提供丰富组件，高效搭建 Web 页面',
    link: `${basePath}tiny-robot`,
    icon: getIconAppUrl('tiny-robot'),
    bgImage: getBgUrl('part-three-a'),
  },
  {
    brand: 'GenUI-SDK',
    title: '生成式界面',
    desc: '根据对话数据动态生成交互界面',
    link: `https://docs.opentiny.design/genui-sdk/guide/quick-start`,
    icon: getIconAppUrl('genui-sdk'),
    bgImage: getIconUrl('part-three-b'),
  },
  {
    brand: 'NEXT SDKs',
    title: '前端智能应用开发工具包',
    desc: '快速接入大模型、工具和智能交互能力',
    link: `${basePath}next-sdk`,
    icon: getIconAppUrl('next-sdk'),
    bgImage: getBgUrl('part-three-c'),
  },
]

const bottomCards = [
  {
    brand: 'AI-Extension',
    title: 'AI 扩展插件',
    desc: '为现有应用快速增加 AI 和 MCP 能力',
    link: `${basePath}ai-extension`,
    icon: getIconAppUrl('ai-extension'),
    bgImage: getBgUrl('part-three-d'),
  },
  {
    brand: 'WebAgent',
    title: 'MCP 接入服务',
    desc: '统一链接和管理 MCP 工具服务',
    link: `https://docs.opentiny.design/web-agent/guide/getting-started.html`,
    icon: getIconAppUrl('web-agent'),
    bgImage: getBgUrl('part-three-e'),
  },
]

const lightGradients = [
  'linear-gradient(-64.43deg, rgba(199, 219, 255, 1) 0%, rgba(239, 245, 255, 1) 68.75%)',
  'linear-gradient(116.57deg, rgba(251, 245, 255, 1) 10.987%, rgba(218, 199, 255, 1) 100%)',
  'linear-gradient(135.92deg, rgba(238,255, 252, 1) 6.89%, rgba(221, 235, 255, 1) 99.917%)',
]

const darkGradients = [
  'rgba(247, 248, 251, 1)',
  'rgba(247, 248, 251, 1)'
]

const getLightStyle = (index: number) => ({
  backgroundImage: lightGradients[index]
})

const getDarkStyle = (index: number) => ({
  background: darkGradients[index],
})

const hrefGo = () => {
  router.push({ name: `all-products` })
}
</script>

<style lang="less" scoped>
@import './page-three.less';
</style>