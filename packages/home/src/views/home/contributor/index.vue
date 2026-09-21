<template>
  <div class="home-contributor">
    <!-- 新增深色区块 -->
    <div class="explore-section-wrapper">
      <div class="explore-section">
        <div class="explore-title">一起探索更多</div>
        <div class="explore-desc">智能化操作的底层实现路径，如何让AI"动起来"？</div>
        <div class="explore-actions">
          <tiny-button size="medium" round class="explore-btn" @click="docsFn">
            开发文档
            <i class="btn-arrow btn-arrow-black"></i>
          </tiny-button>
          <tiny-button type="primary" size="medium" round class="explore-btn btn-white-border" @click="findFn">
            探索智能化
            <i class="btn-arrow btn-arrow-white"></i>
          </tiny-button>
        </div>
      </div>
    </div>

    <div class="contributor-box">
      <div class="box-title">{{ t('home.contributor') }}</div>
      <div class="box-sub-title">{{ t('home.contributorSub') }}</div>
      <ul class="contributor-list">
        <li v-for="contributor in CONTRIBUTORS" :key="contributor">
          <a :href="contributor.homepage">
            <img :src="contributor.avatar" alt="" class="avatar" loading="lazy" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { TinyButton } from '@opentiny/vue'
import { CONTRIBUTORS } from './config'
import './index.less'
import { useRouter } from 'vue-router'
import { i18n } from '@/i18n'
const t = i18n.global.t

const router = useRouter()
const docsFn = () => {
  window.open(`https://docs.opentiny.design/`, '_blank', 'noopener=yes,noreferrer=yes')
}

const findFn = () => {
  router.push({ name: 'next-page' })
}

</script>