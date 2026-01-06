<template>
  <div class="home-access">
    <div class="home-access-title">{{ state.title }}</div>
    <div class="home-access-subtitle">{{ state.subtitle }}</div>
    <div class="home-access-container">
      <div class="home-access-image">
        <img :src="state.image" />
      </div>
      <div class="home-access-content">
        <div
          v-for="(item, index) in state.list"
          :key="index"
          class="home-access-content-item"
        >
          <div class="home-access-content-header">
            <img class="home-access-content-icon" :src="item.icon" :alt="item.title" />
            <div class="home-access-content-title">{{ item.title }}</div>
          </div>
          <div class="home-access-content-description">
            <div v-for="(i, idx) in item.description" :key="idx">{{ i }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import accessIcon1 from '@/assets/images/home/tinyrobot_access_icon1.svg'
import accessIcon2 from '@/assets/images/home/tinyrobot_access_icon2.svg'
import accessIcon3 from '@/assets/images/home/tinyrobot_access_icon3.svg'
import accessImg from '@/assets/images/home/tinyrobot_access.svg'

const state = reactive({
  title: '快速接入，智能体验',
  subtitle: '以卓越模型，应万千挑战',
  list: [
    {
      title: '多元载体与智能生态',
      icon: accessIcon1,
      description: ['网页、表格、PPT等多元载体，深度思考与可视化解决方案，支持MCP工具生态扩展。'],
    },
    {
      title: '指令驱动，自动执行',
      icon: accessIcon2,
      description: ['用户发起指令，WebAgent智能中枢解析后，调度MCP工具集完成任务执行并展示结果。'],
    },
    {
      title: '便捷集成，对话即操作',
      icon: accessIcon3,
      description: [
        '【开发态】企业应用 -> Next SDK -> Web Agent',
        '【使用态】输入SessionId / 扫码 / 选择Next Server 连接 -> 开始对话自主调用',
      ],
    },
  ],
  image: accessImg,
})
</script>
<style lang="less" scoped>
.home-access {
  margin: 0 auto;
  margin-top: 120px;
  .home-access-title {
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
  }
  .home-access-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .home-access-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 120px;
    margin: 66px 0 120px;
    .home-access-image {
      max-width: 840px;
    }
    .home-access-content {
      width: 460px;
      display: flex;
      flex-direction: column;
      gap: 36px;
      .home-access-content-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        .home-access-content-icon {
          font-size: 26px;
        }
        .home-access-content-title {
          font-size: 22px;
          line-height: 30px;
          font-weight: 600;
        }
      }
      .home-access-content-description {
        font-size: 16px;
        color: #808080;
        line-height: 28px;
      }
    }
  }
}
</style>