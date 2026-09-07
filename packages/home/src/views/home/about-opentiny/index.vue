<template>
  <div class="product-suite">
    <div>
      <div class="suite-title">OpenTiny 全家桶</div>
      <div class="suite-desc">
        <p>提供组件库、低代码引擎和AI应用开发工具，</p>
        <p>帮助开发者快速构建企业级Web应用，并将现有应用升级为可对话、可操作的智能应用。</p>
      </div>
      <div class="suite-grid" ref="suiteGrid">
        <div
          class="suite-card"
          :class="{ 'is-expanded': !isMobile && hoveredIndex === index, 'is-collapsed': !isMobile && hoveredIndex !== -1 && hoveredIndex !== index }"
          :style="getCardBgStyle(index)"
          v-for="(item, index) in cardOptions"
          tabindex="0"
          :key="index"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
          @focusin="handleFocusIn(index)"
          @click="handleClick(index)"
        >
          <div class="card-info">
            <div class="card-name">{{ item.title }}</div>
            <div class="card-summary">{{ item.subTitle }}</div>
            <div class="card-badge">
              <tiny-tag type="info" max-width="200px"><img style="margin-right: 4px;" :src="getIconUrl('security')" /><span class="tag-desc">{{ item.tag }}</span></tiny-tag>
            </div>
          </div>
          <div class="card-visual">
            <!-- ========== AI应用开发 ========== -->
            <div v-if="index === 0" class="card-preview preview-ai">
              <div class="ai-top">
                <div class="ai-card-light" v-for="(card, i) in item.topCards" :key="i">
                  <div class="ai-card-header">
                    <img :src="card.icon" />
                    <span class="ai-brand">{{ card.brand }}</span>
                  </div>
                  <div class="ai-card-title">{{ card.title }}</div>
                  <div class="ai-card-desc" v-html="card.desc"></div>
                  <a class="ai-card-link" :href="card.link" target="_blank" rel="noopener noreferrer" @click.stop>
                    了解详情
                  </a>
                </div>
              </div>
              <div class="ai-bottom">
                <div class="ai-card-dark" v-for="(card, i) in item.bottomCards" :key="i">
                  <div class="ai-card-header-dark">
                    <img :src="card.icon" />
                    <span class="ai-brand-dark">{{ card.brand }}</span>
                  </div>
                  <div class="ai-card-subtitle">{{ card.title }}</div>
                  <div class="ai-card-subdesc">{{ card.desc }}</div>
                  <a class="ai-card-sublink" :href="card.link" target="_blank" rel="noopener noreferrer" @click.stop>
                    了解详情
                  </a>
                </div>
              </div>
            </div>

            <!-- ========== 前端应用模板 ========== -->
            <div v-if="index === 1" class="card-preview preview-template">
              <div class="template-card" v-for="(card, i) in item.cards" :key="i" :style="getFrontBgStyle(i)">
                <div class="template-header">
                  <img :src="card.icon" />
                  <span class="template-brand">{{ card.brand }}</span>
                </div>
                <div class="template-title">{{ card.title }}</div>
                <div class="template-desc">{{ card.desc }}</div>
                <a class="template-link" :href="card.link" target="_blank" rel="noopener noreferrer" @click.stop>
                  了解详情
                </a>
              </div>
            </div>

            <!-- ========== 跨端UI组件库 ========== -->
            <div v-if="index === 2" class="card-preview preview-ui">
              <div class="ui-card" v-for="(card, i) in item.cards" :key="i" :style="getUIBgStyle(i)">
                <div class="ui-header">
                  <img :src="card.icon" />
                  <span class="ui-brand">{{ card.brand }}</span>
                </div>
                <div class="ui-title">{{ card.title }}</div>
                <div class="ui-desc">{{ card.desc }}</div>
                <a class="ui-link" :href="card.link" target="_blank" rel="noopener noreferrer" @click.stop>
                  了解详情
                </a>
              </div>
            </div>

            <!-- ========== 低代码应用搭建 ========== -->
            <div v-if="index === 3" class="card-preview preview-engine">
              <div class="engine-card" :style="getEngineBgStyle()">
                <div class="engine-header">
                  <img :src="item.card.icon" />
                  <span class="engine-brand">{{ item.card.brand }}</span>
                </div>
                <div class="engine-title">{{ item.card.title }}</div>
                <div class="engine-desc" v-html="item.card.desc"></div>
                <a class="engine-link" :href="item.card.link" target="_blank" rel="noopener noreferrer" @click.stop>
                  了解详情
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyTag } from '@opentiny/vue'
import useWindowSize from '@/tools/useWindowSize.js'
import './index.less'

const isGitHubBuild = import.meta.env.MODE === 'github'
const isGitHubRuntime = typeof window !== 'undefined' && window.location.hostname.includes('opentiny.github.io')
const isGitHub = isGitHubRuntime || isGitHubBuild
const basePath = isGitHub ? '/opentiny.design/' : '/'
const isTargetDomain = location.hostname === 'opentiny.design'
const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1'

// 移动端检测
const { isMobile } = useWindowSize()

const hoveredIndex = ref(-1)
let hoverTimer = null

const handleMouseEnter = (index) => {
  if (isMobile.value) return
  clearTimeout(hoverTimer)
  hoverTimer = setTimeout(() => {
    hoveredIndex.value = index
  }, 50)
}

const handleMouseLeave = () => {
  if (isMobile.value) return
  clearTimeout(hoverTimer)
  hoverTimer = setTimeout(() => {
    hoveredIndex.value = -1
  }, 500)
}

const handleFocusIn = (index) => {
  if (isMobile.value) return
  hoveredIndex.value = index
}

const handleClick = (index) => {
  if (isMobile.value) return
  hoveredIndex.value = index
}

const getIconUrl = (name) => new URL(`../../../assets/images/new-icon/floor2/${name}.svg`, import.meta.url).href;
const getIconAppUrl = (name) => new URL(`../../../../../common/src/assets/appIcon/${name}.svg`, import.meta.url).href;

const cardOptions = [
  {
    title: 'AI 应用开发',
    subTitle: 'AI 交互组件/AI 应用开发SDK /生成式界面SDK /AI 扩展插件/MCP 接入服务',
    tag: '加速企业应用智能化改造',
    topCards: [
      {
        brand: 'TinyRobot',
        title: 'AI 交互组件',
        desc: '提供丰富组件，高效搭建 Web 页面',
        link:`${basePath}tiny-robot`,
        icon: getIconAppUrl('tiny-robot-white')
      },
      {
        brand: 'GenUI-SDK',
        title: '生成式界面',
        desc: '根据对话数据动态，生成交互界面',
        link: `https://docs.opentiny.design/genui-sdk/guide/quick-start`,
        icon: getIconAppUrl('genui-sdk-white')
      }
    ],
    bottomCards: [
      {
        brand: 'NEXT SDKs',
        title: '前端 AI 应用开发',
        desc: '快速接入模型，工具和智能交互能力',
        link: `${basePath}next-sdk`,
        icon: getIconAppUrl('next-sdk')
      },
      {
        brand: 'AI-Extension',
        title: 'AI 扩展插件',
        desc: '为现有应用快速增加 AI 和 MCP 能力',
        link: `${basePath}ai-extension`,
        icon: getIconAppUrl('ai-extension')
      },
      {
        brand: 'WebAgent',
        title: 'MCP 接入服务',
        desc: '统一链接和管理 MCP 工具服务',
        link: 'https://docs.opentiny.design/web-agent/guide/getting-started.html',
        icon: getIconAppUrl('web-agent')
      }
    ]
  },
  {
    title: '前端应用开发模板',
    subTitle: '提供可直接复用的企业应用模板',
    tag: '开箱即用、前后台分离',
    cards: [
      {
        brand: 'TinyPro Vue',
        title: 'Vue 技术栈企业级开发应用模板',
        desc: '基于 TinyVue 组件库企业级中后台前端/设计解决方案',
        link: 'https://opentiny.design/vue-pro',
        icon: getIconAppUrl('tiny-pro')
      },
      {
        brand: 'TinyPro Angular',
        title: 'Angular 技术栈企业级开发应用模板',
        desc: '基于 TinyNG 组件库企业级中后台前端/设计解决方案',
        link: 'https://opentiny.design/ng-pro',
        icon: getIconAppUrl('tiny-pro-ng')
      },
      {
        brand: 'TinyCLI',
        title: '前端工程化的核心工具',
        desc: '提供一系列健壮的工具、套件、插件和工作流',
        link: '/tiny-cli/home',
        icon: getIconAppUrl('tiny-cli')
      }
    ]
  },
  {
    title: '跨端UI组件库',
    subTitle: '提供丰富组件，高效搭建Web页面',
    tag: '组件丰富、功能强大',
    cards: [
      {
        brand: 'TinyVue',
        title: '企业级 Vue 组件库',
        desc: '跨端、跨框架的企业级 UI 组件库',
        link: isTargetDomain ? `${basePath}tiny-vue` : isLocal ? '/' : `${location.protocol}//${location.hostname}/tinyvue`,
        icon: getIconAppUrl('tiny-vue')
      },
      {
        brand: 'TinyNg',
        title: '企业级 Angular 组件库',
        desc: 'PC 端产品，70+ 开箱即用组件',
        link: `https://opentiny.design/tiny-ng/overview`,
        icon: getIconAppUrl('tiny-ng')
      },
      {
        brand: 'TinyCharts',
        title: '专业图表组件库',
        desc: '依赖于 ECharts，全量图表库',
        link: 'https://opentiny.design/tiny-charts/QuickStart',
        icon: getIconAppUrl('tiny-chart')
      },
      {
        brand: 'TinyEditor',
        title: '富文本编辑器',
        desc: '支持 JS/Vue/React/Angular',
        link: location.hostname === 'opentiny.design' ? `https://docs.opentiny.design/tiny-editor/guide/quick-start.html` : 'https://opentiny.github.io/tiny-editor',
        icon: getIconAppUrl('tiny-editor')
      }
    ]
  },
  {
    title: '低代码应用搭建',
    subTitle: '可视化搭建/开放扩展能力',
    tag: '支持实时定制低代码平台',
    card: {
      brand: 'TinyEngine',
      title: '开源低代码引擎',
      desc: '支持在线实时构建<br/>支持设计器命令二次开发<br/>支持插件灵活扩展',
      link:  isTargetDomain ? `${basePath}tiny-engine` : isLocal ? '/' : `${location.protocol}//${location.hostname}/tiny-engine`,
      icon: getIconAppUrl('tiny-engine')
    }
  }
]


const getImgUrl = (name) => new URL(`../../../assets/images/new-icon/floor2/${name}.webp`, import.meta.url).href
const getImgFrontUrl = (name) => new URL(`../../../assets/images/new-icon/floor2/${name}.svg`, import.meta.url).href

// 每个卡片的渐变色
const gradients = [
  'linear-gradient(157.34deg, rgba(224, 240, 255, 1) 17.524%, rgba(243, 244, 251, 1) 53.201%, rgba(243, 244, 251, 1) 92.235%)',
  'linear-gradient(135deg, rgba(239, 243, 255, 1) -0.086%, rgba(242, 246, 254, 1) 43.63%, rgba(243, 244, 251, 1) 100%)',
  'linear-gradient(180deg, rgba(244, 248, 255, 1) 0%, rgba(236, 233, 245, 1) 100%)',
  'linear-gradient(135deg, rgba(245, 241, 255, 1) 20%, rgba(245, 241, 255, 1) 20%, rgba(225, 233, 246, 1) 80%)'
]

// 悬浮展开状态：只显示新的渐变（颜色更鲜明/方向不同）
const hoverGradients = [
  'linear-gradient(160deg, rgba(200, 230, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(243, 244, 251, 1) 100%)',
  'linear-gradient(160deg, rgba(255, 207, 207, 0.2) 0%, rgba(255, 255, 255, 1) 20%, rgb(243, 244, 251, 1) 100%)',
  'linear-gradient(160deg, rgba(207, 200, 255, 0.2) 0%, rgba(255, 255, 255,1) 20%, rgba(243, 244, 251, 1) 100%)',
  'linear-gradient(160deg, rgba(230, 238, 253, 0.2) 0%, rgba(255, 255, 255, 1) 20%, rgb(243, 244, 251, 1) 100%)',
]


// 动态计算卡片背景：默认"图片+渐变"叠加，悬浮时只显示渐变
const getCardBgStyle = (index) => {
  // 悬浮展开（PC hover 状态）：使用悬浮渐变
  if (hoveredIndex.value === index) {
    return {
      backgroundImage: hoverGradients[index],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      border: '1px solid #f0f0f0'
    }
  }

  // 移动端：去掉背景图，只保留渐变
  if (isMobile.value) {
    return {
      backgroundImage: gradients[index],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }

  // PC 默认状态：图片在上层，默认渐变在下层
  return {
    backgroundImage: `url(${getImgUrl(`bg-${index + 1}`)}), ${gradients[index]}`,
    backgroundSize: 'auto 100%, cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat, no-repeat'
  }
}

// 每个卡片的渐变色
const gradientsFronts = [
  'linear-gradient(135deg, rgba(238, 245, 255, 0.6) 20%, rgba(238, 245, 255, 0.6) 20%, rgba(228, 248, 230, 0.6) 90%)',
  'linear-gradient(135deg, rgba(255, 243, 230, 0.6) 20%, rgba(255, 243, 230, 0.6) 20%, rgba(255, 207, 207, 0.6) 100%)',
  'linear-gradient(135deg, rgba(225, 236, 255, 0.6) 20%, rgba(225, 236, 255, 0.6) 20%, rgba(222, 224, 255, 0.6) 100%)'
]

const getFrontBgStyle = (index) => {
  const gradientFront = gradientsFronts[index]

  if (isMobile.value) {
    return {
      backgroundImage: `url(${getImgFrontUrl(`front-bg-${index + 1}`)}), ${gradientFront}`,
      backgroundSize: '50%, cover',
      backgroundPosition: 'right bottom',
      backgroundRepeat: 'no-repeat'
    }
  }
  // 默认状态：图片在上层，渐变在下层（多层背景）
  return {
    backgroundImage: `url(${getImgFrontUrl(`front-bg-${index + 1}`)}), ${gradientFront}`,
    backgroundSize: 'auto 99%, cover',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat'
  }
}

// 每个卡片的渐变色
const gradientsUIs = [
  'linear-gradient(-45deg, rgba(0, 129, 255, 0.28) -0.036%, rgba(238, 235, 255, 0.33) 100%)',
  'linear-gradient(145deg, rgba(255, 243, 230, 1) 20%, rgba(255, 243, 230,1) 20%, rgba(255, 207, 207, 1) 100%)',
  'linear-gradient(135deg, rgba(253, 242, 255, 1) 20%, rgba(253, 242, 255, 1) 20%, rgba(223, 211, 255, 1) 100%)',
  'linear-gradient(135deg, rgba(255, 247, 228, 0.6) 10%, rgba(255, 247, 228, 0.6) 20%, rgba(193, 236, 255, 1) 100%)'
]

const getUIBgStyle = (index) => {
  const gradientsUI = gradientsUIs[index]
  // 默认状态：图片在上层，渐变在下层（多层背景）
  return {
    backgroundImage: `url(${getImgFrontUrl(`ui-bg-${index + 1}`)}), ${gradientsUI}`,
    backgroundSize: 'auto 82%, cover',
    backgroundPosition: '100%',
    backgroundRepeat: 'no-repeat, no-repeat'
  }
}

const getEngineBgStyle = () => {
  if (isMobile.value) {
    return {
      backgroundImage: `url(${getImgFrontUrl('engine-bg-1')}), linear-gradient(-45deg, rgba(222, 224, 255, 1) 0%, rgba(230, 238, 253, 1) 99.917%)`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }
  return {
    backgroundImage: `url(${getImgFrontUrl('engine-bg-1')}), linear-gradient(-45deg, rgba(222, 224, 255, 1) 0%, rgba(230, 238, 253, 1) 99.917%)`,
    backgroundSize: 'auto',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat'
  }
}
</script>