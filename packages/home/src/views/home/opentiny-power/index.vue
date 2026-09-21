<template>
  <div class="capability-showcase">
    <div>
      <div class="showcase-title">OpenTiny系列产品组成的核心能力</div>
      <div class="showcase-subtitle">覆盖组件、低代码、生成式 UI、AI 对话、智能执行、浏览器增强与 Web 智能体</div>
      <div class="showcase-body">
        <div class="compare-panels">
          <div class="panel-left">
            <div class="panel-heading">前端应用开发能力</div>
            <div class="panel-blocks">
              <div class="capability-block" v-for="(section, idx) in leftSections" :key="idx">
                <div class="block-title">{{ section.title }}</div>
                <div class="block-tags">
                  <tiny-tag v-for="(tag, tIdx) in section.tags" :key="tIdx" :type="section.type || 'info'" :color="section.color">
                    <img class="tag-icon" :src="tag.icon" />
                    {{ tag.desc }}
                  </tiny-tag>
                </div>
                <div class="feature-list">
                  <div class="feature-item" v-for="(desc, dIdx) in section.descs" :key="dIdx">
                    <img class="feature-icon" :src="getImgPowerUrl('yes')" alt="icon" />
                    <div class="feature-text">
                      <span class="feature-label">{{ desc.label }}</span>
                      <span class="feature-value">{{ desc.value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="compare-plus" :src="getImgPowerUrl('plus-icon')" />
          <div class="panel-right">
            <div class="panel-heading">AI 智能应用开发能力</div>
            <div class="panel-blocks">
              <div class="capability-block" v-for="(section, idx) in rightSections" :key="idx">
                <div class="block-header">
                  <img class="block-icon" :src="getImgPowerUrl('yes')" alt="icon" />
                  <span class="block-title">{{ section.title }}</span>
                </div>
                <div class="block-tags">
                  <tiny-tag v-for="(tag, tIdx) in section.tags" :key="tIdx" type="info">
                    <img v-if="tag.icon" class="tag-icon" :src="tag.icon" />
                    {{ tag.desc }}
                  </tiny-tag>
                </div>
                <div class="block-summary">{{ section.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TinyTag } from '@opentiny/vue'
import './index.less'

const getImgPowerUrl = (name) => new URL(`../../../assets/images/new-icon/floor3/${name}.svg`, import.meta.url).href

const leftSections = [
  {
    title: '企业级组件库',
    tags: [{ icon: getImgPowerUrl('app-vue'), desc: 'TinyVue'}, { icon: getImgPowerUrl('app-ng'), desc:'TinyNG' } , { icon: getImgPowerUrl('app-chart'), desc:'TinyChart' }, { icon: getImgPowerUrl('app-editor'), desc: 'TinyEditor' }],
    descs: [
      { label: '跨框架兼容：', value: '一套代码同时支持 Vue2/Vue3/Angular' },
      { label: '跨端自适应：', value: 'PC + 移动端一套代码全搞定' },
      { label: '组件丰富：', value: '130+ 企业级组件，覆盖企业开发全场景' },
      { label: '高性能：', value: '内置虚拟滚动、大数据渲染也流畅' },
      { label: '多主题：', value: '多套官方主题，支持动态切换' },
      { label: '可视化图表库：', value: '企业级高性能图表库' },
      { label: '编辑器：', value: '富文本编辑器' }
    ]
  },
  {
    title: '低代码应用搭建',
    tags: [{ icon: getImgPowerUrl('app-engine'), desc: 'TinyEngine低代码引擎'}],
    color: ['rgba(2,153,49,0.08)', 'rgba(4,140,140,1)'],
    descs: [
      { label: '可视化搭建：', value: '页面、表单、大屏快速拖拽生成' },
      { label: '配置式开发：', value: '模板直接用 + 配置灵活改' },
      { label: '源码生成可二次开发：', value: '拖拽出页面源码可二次开发，直接上线' },
      { label: '物料与插件扩展：', value: '组件、插件、模板都能自定义' }
    ]
  },
  {
    title: '中后台开发套件应用模板',
    tags: [{ icon: getImgPowerUrl('app-cli'), desc: 'TinyCLI'}, { icon: getImgPowerUrl('app-pro'), desc: 'TinyPro'}],
    descs: [
      { label: '企业应用模板：', value: '一键生成项目模板、组件模板' },
      { label: '开箱即用：', value: 'Vue / Angular 都支持' }
    ]
  }
]

const rightSections = [
  {
    title: '兼容 MCP与Skill 生态',
    tags: [{ icon: '', desc: '全局智能组件能力'}],
    desc: '遵循通用协议标准，无缝对接主流生态与工具'
  },
  {
    title: 'AI 对话式开发',
    tags: [{ icon: getImgPowerUrl('app-tinyrobot'), desc: 'TinyRobot'}],
    desc: '内置 TinyRobot AI组件库，用对话驱动开发与交互'
  },
  {
    title: '生成式 UI',
    tags: [{  icon: getImgPowerUrl('app-genui'), desc: 'GenUI SDK'}],
    desc: 'GenUI SDK让文本快速生成页面、组件、代码规范直接落地'
  },
  {
    title: 'NEXT SDK',
    tags: [{ icon: getImgPowerUrl('app-nextsdk'), desc: 'NEXT SDK'}],
    desc: 'NEXT SDK 赋能浏览器，让浏览器自动完成任务'
  },
  {
    title: '支持Web MCP接入服务',
    tags: [{ icon: getImgPowerUrl('app-webagent'), desc: 'WebAgent'}],
    desc: '搭载 WebAgent，提供 MCP 协议中转服务，自主执行复杂网页任务'
  }
]
</script>
