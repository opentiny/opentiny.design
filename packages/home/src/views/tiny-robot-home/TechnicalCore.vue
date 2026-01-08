<template>
  <div class="technical-core">
    <div class="technical-core-title">{{ info.title }}</div>
    <div class="technical-core-subtitle">{{ info.subtitle }}</div>
    <div class="technical-core-content">
      <div
        v-for="(content, index) in info.list"
        :key="index"
        :class="`technical-core-item technical-core-item-${index % 4}`"
      >
        <div class="technical-core-item-icon">
          <img :src="content.icon" :alt="content.title" />
        </div>
        <div class="technical-core-item-title">{{ content.title }}</div>
        <div class="technical-core-item-description">
          <div v-for="(item, idx) in content.description" :key="idx">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import technicalIcon1 from '@/assets/images/home/tinyrobot_technical_core_icon1.svg'
import technicalIcon2 from '@/assets/images/home/tinyrobot_technical_core_icon2.svg'
import technicalIcon3 from '@/assets/images/home/tinyrobot_technical_core_icon3.svg'
import technicalIcon4 from '@/assets/images/home/tinyrobot_technical_core_icon4.svg'

const info = {
  title: '强大的技术核心',
  subtitle: '驱动本质，重塑未来',
  list: [
    {
      title: '自主执行',
      description: ['理解复杂指令', '构建多层级处理框架', '自动实现从洞察到执行闭环'],
      icon: technicalIcon1,
    },
    {
      title: 'MCP生态',
      description: ['提供丰富的官方工具市场', '支持用户自定义添加', '实现灵活扩展'],
      icon: technicalIcon2,
    },
    {
      title: '开放连接',
      description: ['提供开放API', '轻松介入Next SDK', '快速构建智能应用'],
      icon: technicalIcon3,
    },
    {
      title: '安全可靠',
      description: ['对接企业级WebAgent中枢', '实现精细化权限管理', '全链路操作审计与端到端数据加密'],
      icon: technicalIcon4,
    },
  ],
}
</script>
<style lang="less" scoped>
.technical-core {
  margin: 0 auto;
  .technical-core-title {
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    margin-top: 120px;
    font-weight: 700;
  }
  .technical-core-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .technical-core-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 45px;
    margin-top: 66px;
    .technical-core-item {
      padding: 50px 40px;
      width: calc((100% - 135px) / 4);
      box-shadow: 0 0 20px 0 #ededed;
      border: 3px solid #fff;
      border-radius: 16px;
      .technical-core-item-icon {
        font-size: 66px;
      }
      &-0 {
        background: linear-gradient(to bottom, #f5fbef, #fff);
      }
      &-1 {
        background: linear-gradient(to bottom, #f9f4fe, #fff);
      }
      &-2 {
        background: linear-gradient(to bottom, #eef6ff, #fff);
      }
      &-3 {
        background: linear-gradient(to bottom, #fff9f3, #fff);
      }
      .technical-core-item-title {
        color: #191919;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        margin-top: 36px;
      }
      .technical-core-item-description {
        color: #808080;
        font-size: 16px;
        line-height: 26px;
        margin-top: 20px;
      }
      &:hover {
        transform: translateY(-10px);
      }
    }
  }
}
</style>