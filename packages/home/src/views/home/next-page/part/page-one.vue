<template>
    <!-- :style="!isMobile ? { backgroundImage: `url(${bgUrl})` } : {backgroundPosition: 'top'}" -->
  <div 
    class="bg-container"
    :style="!isMobile ? { backgroundImage: `url(${bgUrl})` } : {  backgroundImage: `url(${bgUrl})`, backgroundPosition: 'left', backgroundSize: 'cover'}" 
  >
    <div class="content-wrapper">
      <img 
        class="overlay-img"
        :src="getSvgUrl('part-one-b')" 
        alt="overlay"
      />
      <tiny-tag class="tag-item" type="info">加速企业应用的智能化改造</tiny-tag>
      <h1 class="main-title">企业智能前端开发工具链</h1>
      <h2 class="sub-title">
        以生成式 UI <span class="highlight-plus">+</span> WebMCP 两大自主核心技术为基础
      </h2>
      <p class="desc">将现有 Web 应用改造为 AI 可操控的智能界面，无需重构业务逻辑</p>
      <div class="btn-group">
        <tiny-button type="primary" size="medium" @click="docsFn">
            文档
            <i class="btn-arrow btn-arrow-light"></i>
        </tiny-button>
        <!-- TODO -->
        <!-- <tiny-button size="medium" @click="feelFn">
            体验
            <i class="btn-arrow btn-arrow-dark"></i>
        </tiny-button> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TinyTag, TinyButton } from '@opentiny/vue'
import useWindowSize from '@/tools/useWindowSize.js'

const { isMobile } = useWindowSize()

const getImgUrl = (name: string) => 
  new URL(`../../../../assets/images/new-icon/next-page/${name}.jpg`, import.meta.url).href

const getSvgUrl = (name: string) => 
  new URL(`../../../../assets/images/new-icon/next-page/${name}.svg`, import.meta.url).href

const bgUrl = getImgUrl('part-one-a')

const docsFn = () => {
    window.open(`https://docs.opentiny.design/`, '_blank', 'noopener=yes,noreferrer=yes')
}
// TODO
const feelFn = () => {
    // window.open(`https://docs.opentiny.design/`, '_blank', 'noopener=yes,noreferrer=yes')
}
</script>

<style lang="less" scoped>
@import './page-one.less';
</style>