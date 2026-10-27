<template>
  <div class="technical-core">
    <div class="technical-core-title">{{ info.title }}</div>
    <div class="technical-core-subtitle">{{ info.subtitle }}</div>
    <div class="technical-core-content">
      <div v-for="(content, index) in info.list" :key="index" class="technical-core-item">
        <div class="technical-core-item-title">{{ content.title }}</div>
        <div class="technical-core-item-desc">{{ content.description }}</div>
        <ul class="technical-core-item-list">
          <li v-for="(item, idx) in content.items" :key="idx">{{ item }}</li>
        </ul>
        <div class="technical-core-item-image-wrap">
          <img class="technical-core-item-image" :src="content.image" :alt="content.title" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import floor1 from '@/assets/images/home/tiny-pro-home/floor1.svg'
import floor2 from '@/assets/images/home/tiny-pro-home/floor2.svg'
import floor3 from '@/assets/images/home/tiny-pro-home/floor3.svg'

const info = {
  title: 'TinyPro 核心优势',
  subtitle: '本地Mock即可跑通，需要真实后台接口再接入 NestJS 或者SpringBoot',
  list: [
    {
      title: '开箱即用',
      description: '快速新建项目，依托预制模板创建；初始化可选构建工具、后端，权限、菜单与页面共用一套数据源。',
      items: ['模版多样', '快速搭建', '灵活扩展'],
      image: floor3
    },
    {
      title: 'Skill 赋能业务 智能执行',
      description: 'Skill + MCP两者协同，实现从"理解意图"到"交付结果"的全链路自动化。',
      items: ['读懂业务流程', '智能执行任务', ' AI 智能交互'],
      image: floor2
    },  
    {
      title: '灵活多样的架构',
      description: '本地 Mock 即可跑通后台；需要真实接口再接 NestJS 或 Spring Boot。',
      items: ['统一数据源', '支持多平台', '架构接口多样'],
      image: floor1
    }
  ]
}
</script>
<style lang="less" scoped>
.technical-core {
  margin: 0 auto;
  .technical-core-title {
    font-size: 44px;
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
    align-items: stretch;
    gap: 40px;
    margin-top: 66px;
    .technical-core-item {
      flex: 1;
      width: 0;
      height: 537px;
      box-sizing: border-box;
      padding: 32px 24px 24px;
      display: flex;
      flex-direction: column;
      background: #fff;
      border: 1px solid #f0f0f0;
      border-radius: 16px;
      box-shadow: 0 4px 26px 0 rgba(234, 233, 237, 0.9);
      background-image: url(@/assets/images/home/tiny-pro-home/floor-bg.svg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .technical-core-item-title {
        color: #191919;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
      }
      .technical-core-item-desc {
        margin-top: 16px;
        color: #808080;
        font-size: 16px;
        line-height: 26px;
      }
      .technical-core-item-list {
        margin: 20px 0 0;
        padding: 0;
        list-style: none;
        li {
          position: relative;
          padding-left: 16px;
          color: #191919;
          font-size: 16px;
          font-weight: 600;
          line-height: 26px;
          & + li {
            margin-top: 8px;
          }
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #1476ff;
          }
        }
      }
      .technical-core-item-image-wrap {
        width: 100%;
        height: 100%;
        margin-top: auto;
        flex: 0 0 212px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 8px;
      }
      .technical-core-item-image {
        width: 95%;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    }
  }
}
@media (max-width: 1023px) {
  .technical-core {
    .technical-core-title {
      font-size: 22px;
      line-height: 30px;
      margin-top: 46px;
    }
    .technical-core-subtitle {
      width: 100%;
      font-size: 12px;
      line-height: 18px;
      margin-top: 8px;
      padding: 0 8px;
      overflow-wrap: anywhere;
    }
    .technical-core-content {
      flex-direction: column;
      gap: 20px;
      margin-top: 30px;
      .technical-core-item {
        width: 100%;
        height: auto;
        padding: 24px;
        .technical-core-item-title {
          font-size: 16px;
          line-height: 22px;
        }
        .technical-core-item-image {
          width: 45%;
        }
        .technical-core-item-desc,
        .technical-core-item-list li {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }
}
@media (min-width: 680px) and (max-width: 1023px) {
  .technical-core {
    .technical-core-title {
      font-size: 34px;
      line-height: 44px;
      margin-top: 64px;
    }
    .technical-core-subtitle {
      font-size: 16px;
      line-height: 24px;
      margin-top: 10px;
    }
    .technical-core-content {
      margin-top: 40px;
      .technical-core-item {
        .technical-core-item-title {
          font-size: 20px;
          line-height: 28px;
        }
        .technical-core-item-image {
          width: 60%;
        }
        .technical-core-item-desc,
        .technical-core-item-list li {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
