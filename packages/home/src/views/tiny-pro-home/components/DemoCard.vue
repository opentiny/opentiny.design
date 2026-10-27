<template>
  <div class="demo-card">
    <div class="demo-card-title">{{ info.title }}</div>
    <div class="demo-card-subtitle">{{ info.subtitle }}</div>
    <div class="demo-card-button">
      <button
        v-for="(item, index) in info.list"
        :key="item.name"
        type="button"
        class="demo-card-button-item"
        :class="{ 'is-active': activeIndex === index }"
        @click="activeIndex = index"
      >
        <img :src="item.icon" :alt="item.name" />
        <span>{{ item.name }}</span>
      </button>
    </div>
    <div class="demo-card-img">
      <img :src="current.preview" :alt="current.name" />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import iconDashboard from '@/assets/images/home/tiny-pro-home/demo/icon-dashboard.svg'
import iconAi from '@/assets/images/home/tiny-pro-home/demo/icon-ai.svg'
import iconCard from '@/assets/images/home/tiny-pro-home/demo/icon-card.svg'
import iconTable from '@/assets/images/home/tiny-pro-home/demo/icon-table.svg'
import iconForm from '@/assets/images/home/tiny-pro-home/demo/icon-form.svg'
import iconSystem from '@/assets/images/home/tiny-pro-home/demo/icon-system.svg'
import iconTheme from '@/assets/images/home/tiny-pro-home/demo/icon-theme.svg'
import preview1 from '@/assets/images/home/tiny-pro-home/demo/preview-1.svg'
import preview2 from '@/assets/images/home/tiny-pro-home/demo/preview-2.svg'
import preview3 from '@/assets/images/home/tiny-pro-home/demo/preview-3.svg'
import preview4 from '@/assets/images/home/tiny-pro-home/demo/preview-4.svg'
import preview5 from '@/assets/images/home/tiny-pro-home/demo/preview-5.svg'
import preview6 from '@/assets/images/home/tiny-pro-home/demo/preview-6.svg'
import preview7 from '@/assets/images/home/tiny-pro-home/demo/preview-7.svg'

const info = {
  title: '模板丰富 选用自如',
  subtitle: '模版内容可自由选择，主题系统可以随意搭配',
  list: [
    { name: 'AI 智能交互', icon: iconAi, preview: preview2 },
    { name: '监控看板', icon: iconDashboard, preview: preview1 },
    { name: '卡片列表', icon: iconCard, preview: preview3 },
    { name: '查询表格', icon: iconTable, preview: preview4 },
    { name: '表单流程', icon: iconForm, preview: preview5 },
    { name: '系统管理', icon: iconSystem, preview: preview7 },
    { name: '个人中心', icon: iconTheme, preview: preview7}
  ]
}

const activeIndex = ref(0)
const current = computed(() => info.list[activeIndex.value])
</script>
<style lang="less" scoped>
.demo-card {
  margin: 0 auto;
  padding: 100px 0 120px;
  .demo-card-title {
    font-size: 44px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
    color: #191919;
  }
  .demo-card-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .demo-card-button {
    width: 1082px;
    height: 68px;
    margin: 60px auto 0;
    padding: 12px;
    box-sizing: border-box;
    background: #f5f5f5;
    border-radius: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .demo-card-button-item {
      width: 141px;
      height: 44px;
      padding: 0 8px;
      box-sizing: border-box;
      border: 1px solid #f0f0f0;
      border-radius: 40px;
      color: #191919;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      flex-shrink: 0;
      img {
        width: 18px;
        height: 18px;
        display: block;
      }
      &.is-active {
        background: #fff;
        border-color: #fff;
      }
    }
  }
  .demo-card-img {
    width: 100%;
    height: 1000px;
    margin-top: 60px;
    padding: 40px;
    box-sizing: border-box;
    background: #eff5ff;
    border-radius: 20px;
    img {
      width: 100%;
      display: block;
      object-fit: cover;
      border-radius: 12px;
    }
  }
}
@media (max-width: 1023px) {
  .demo-card {
    padding: 46px 0 40px;
    .demo-card-title {
      font-size: 22px;
      line-height: 30px;
    }
    .demo-card-subtitle {
      font-size: 12px;
      line-height: 18px;
      margin-top: 8px;
      padding: 0 8px;
    }
    .demo-card-button {
      width: 100%;
      max-width: 933px;
      height: auto;
      margin-top: 24px;
      overflow-x: auto;
      justify-content: flex-start;
      gap: 8px;
      .demo-card-button-item {
        width: auto;
        min-width: 120px;
        padding: 0 12px;
      }
    }
    .demo-card-img {
      height: 420px;
      margin-top: 24px;
      padding: 16px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .demo-card {
    padding: 64px 0 64px;
    .demo-card-title {
      font-size: 34px;
      line-height: 44px;
    }
    .demo-card-subtitle {
      font-size: 16px;
      line-height: 24px;
      margin-top: 10px;
    }
    .demo-card-img {
      height: 640px;
      margin-top: 40px;
    }
  }
}
</style>
