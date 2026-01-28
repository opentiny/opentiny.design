<template>
  <div class="intelligent-experience">
    <div class="intelligent-experience-title">{{ info.title }}</div>
    <div class="intelligent-experience-subtitle">{{ info.subtitle }}</div>
    <div class="intelligent-experience-container">
      <div class="intelligent-experience-image">
        <img :src="info.image" />
      </div>
      <div class="intelligent-experience-content">
        <div v-for="(item, index) in info.list" :key="index" class="intelligent-experience-content-item">
          <div class="intelligent-experience-content-header">
            <img class="intelligent-experience-content-icon" :src="item.icon" :alt="item.title" />
            <div class="intelligent-experience-content-title">{{ item.title }}</div>
          </div>
          <div class="intelligent-experience-content-description">
            <div v-for="(i, idx) in item.description" :key="idx">{{ i }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import experienceIcon1 from '@/assets/images/home/tinyrobot_experience_icon1.svg'
import experienceIcon2 from '@/assets/images/home/tinyrobot_experience_icon2.svg'
import experienceIcon3 from '@/assets/images/home/tinyrobot_experience_icon3.svg'
import experienceImg from '@/assets/images/home/tinyrobot_experience.svg'

const info = {
  title: '快速接入，智能体验',
  subtitle: '以卓越模型，应万千挑战',
  list: [
    {
      title: '多元载体与智能生态',
      icon: experienceIcon1,
      description: ['网页、表格、PPT等多元载体，深度思考与可视化解决方案，支持MCP工具生态扩展。']
    },
    {
      title: '指令驱动，自动执行',
      icon: experienceIcon2,
      description: ['用户发起指令，WebAgent智能中枢解析后，调度MCP工具集完成任务执行并展示结果。']
    },
    {
      title: '便捷集成，对话即操作',
      icon: experienceIcon3,
      description: [
        '【开发态】企业应用 -> Next SDK -> Web Agent',
        '【使用态】输入SessionId / 扫码 / 选择Next Server 连接 -> 开始对话自主调用'
      ]
    }
  ],
  image: experienceImg
}
</script>
<style lang="less" scoped>
.intelligent-experience {
  margin: 0 auto;
  margin-top: 120px;
  .intelligent-experience-title {
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
  }
  .intelligent-experience-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .intelligent-experience-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 120px;
    margin: 66px 0 120px;
    .intelligent-experience-image {
      max-width: 840px;
      img {
        width: 100%;
      }
    }
    .intelligent-experience-content {
      width: 460px;
      display: flex;
      flex-direction: column;
      gap: 36px;
      .intelligent-experience-content-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        .intelligent-experience-content-icon {
          height: 26px;
          width: 26px;
        }
        .intelligent-experience-content-title {
          font-size: 22px;
          line-height: 30px;
          font-weight: 600;
        }
      }
      .intelligent-experience-content-description {
        font-size: 16px;
        color: #808080;
        line-height: 28px;
      }
    }
  }
}
@media (max-width: 1023px) {
  .intelligent-experience {
    margin-top: 46px;
    .intelligent-experience-title {
      font-size: 22px;
      line-height: 30px;
    }
    .intelligent-experience-subtitle {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
    .intelligent-experience-container {
      margin: 30px 0 46px;
      flex-direction: column-reverse;
      gap: 24px;
      .intelligent-experience-content {
        width: 100%;
        padding: 0 10px;
        .intelligent-experience-content-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          .intelligent-experience-content-icon {
            width: 18px;
            height: 18px;
          }
          .intelligent-experience-content-title {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .intelligent-experience-content-description {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }
}
</style>