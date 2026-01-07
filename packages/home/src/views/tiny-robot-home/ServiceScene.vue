<template>
  <div class="service-scene">
    <div class="service-scene-container">
      <div class="service-scene-title">{{ state.title }}</div>
      <div class="service-scene-subtitle">{{ state.subtitle }}</div>
      <div class="service-scene-content">
        <div class="tabs">
          <div
            v-for="scene in state.scenes"
            :key="scene.id"
            :class="['tab', { active: scene.id === state.activeScnceId }]"
            @click="handleClick(scene.id)"
          >
            <img v-if="scene.icon" class="tab-icon" :src="scene.icon" />
            <div class="tab-title">{{ scene.tabtitle }}</div>
          </div>
        </div>
        <div class="scene-section">
          <div v-if="activeScene" class="scene-section-container">
            <div class="scene-section-content">
              <div class="scene-section-title">{{ activeScene.title }}</div>
              <div class="scene-section-description">
                <div
                  v-for="(item, index) in activeScene.description"
                  :key="index"
                  class="scene-section-description-content"
                >
                  {{ item }}
                </div>
              </div>
              <div class="scene-section-button">
                <tiny-button round @click="gotoChat">立即体验</tiny-button>
              </div>
            </div>
            <div class="scene-section-img">
              <img :src="activeScene.imgUrl" :alt="activeScene.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from 'vue'
import { TinyButton } from '@opentiny/vue'
import officeImg from '@/assets/images/home/tinyrobot_office.webp'
import devopsImg from '@/assets/images/home/tinyrobot_devops.webp'
import workforceImg from '@/assets/images/home/tinyrobot_workforce.webp'
import operationsImg from '@/assets/images/home/tinyrobot_operations.webp'
import officeIcon from '@/assets/images/home/tinyrobot_service_scene_icon1.svg'
import devopsIcon from '@/assets/images/home/tinyrobot_service_scene_icon2.svg'
import workforceIcon from '@/assets/images/home/tinyrobot_service_scene_icon3.svg'
import operationsIcon from '@/assets/images/home/tinyrobot_service_scene_icon4.svg'

const state = reactive({
  title: '让TinyRobot为您的业务赋能',
  subtitle: '极致的产品效果，打造多元的业务落地场景',
  activeScnceId: 'office',
  scenes: [
    {
      id: 'office',
      title: '智能办公助手',
      tabtitle: '办公助理',
      icon: officeIcon,
      description: [
        '一键生成邮件、报告、周报、会议纪要、策划方案',
        '自动整理表格、分析数据趋势、生成可视化图表',
        '快速从文档库中提取关键信息，构建知识图谱',
        '自动安排会议、冲突检测、智能提醒',
        '智能客服应答、客户需求分析、满意度预测',
      ],
      imgUrl: officeImg,
    },
    {
      id: 'devops',
      title: '智能研发测试',
      tabtitle: '研发测试',
      icon: devopsIcon,
      description: [
        'AI算法智能选取、自动化执行回归测试用例，精准覆盖代码变更影响域',
        '实时监控应用性能指标，AI异常检测、根因定位与趋势预测，保障系统稳定性',
        '智能评估项目风险，预测进度瓶颈并提供决策建议，实现项目自动化管理',
      ],
      imgUrl: devopsImg,
    },
    {
      id: 'workforce',
      title: '智能驱动型人才管理',
      tabtitle: '人力管理',
      icon: workforceIcon,
      description: [
        '秒级解析海量简历，机器人进行初步意向沟通，缩短招聘周期，提升招聘质量',
        '实现“千人千面”的员工成长，加速技能提升，将培训转化为实际绩效',
        '让绩效评估更客观、高效，帮助管理者提前介入，保留关键人才',
      ],
      imgUrl: workforceImg,
    },
    {
      id: 'operations',
      title: '智能运营管理',
      tabtitle: '运营管理',
      icon: operationsIcon,
      description: [
        '7×24小时监控业务指标，自动建立动态基线，识别微小异常波动，在用户投诉前发出预警',
        '综合考虑订单、物料、设备状态、人员技能。生成最优的生产或服务排程方案，并随变化动态调整',
        '基于历史与实时数据，预测设备故障、客户流失、供应链中断风险，并提供优化建议',
      ],
      imgUrl: operationsImg,
    },
  ],
})

const activeScene = computed(() => state.scenes.find((scene) => scene.id === state.activeScnceId))

const handleClick = (id) => {
  state.activeScnceId = id
}

const gotoChat = () => {
  window.open('https://chat.opentiny.design')
}
</script>
<style lang="less" scoped>
.service-scene {
  .service-scene-container {
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 100px;
    .service-scene-title {
      font-size: 48px;
      line-height: 64px;
      text-align: center;
      font-weight: 700;
    }
    .service-scene-subtitle {
      font-size: 20px;
      line-height: 28px;
      margin-top: 16px;
      text-align: center;
      color: #808080;
    }
    .tabs {
      width: 680px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #808080;
      font-size: 18px;
      line-height: 24px;
      margin: auto;
      margin-top: 46px;
      border-bottom: 1px solid #DEE0EF;
      gap: 20px;
      .tab {
        width: 170px;
        padding: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        .tab-icon{
          font-size: 24px;
        }
      }
      .active {
        color: #191919;
        border-bottom: 2px solid #191919;
      }
    }
    .scene-section {
      padding: 8px;
      margin-top: 60px;
      border-radius: 20px;
      .scene-section-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        border-radius: 20px;
        background: #FFF;
        box-shadow: 0 4px 40px 0 rgba(234, 236, 246, 0.7);
        .scene-section-content {
          width: 35%;
          margin: 0 auto;
          .scene-section-title {
            font-size: 34px;
            line-height: 46px;
            font-weight: 600;
            color: #191919;
          }
          .scene-section-description {
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: #666;
            font-size: 16px;
            line-height: 30px;
            margin-top: 22px;
            .scene-section-description-content {
              max-width: 406px;
            }
          }
          .scene-section-button{
            margin-top: 40px;
            :deep(.tiny-button){
              width: 120px;
              height: 42px;
            }
          }
        }
        .scene-section-img {
          background-image: url(@/assets/images/home/tinyrobot_service_scene_bg.svg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
          img {
            max-width: 768px;
            height: 590px;
          }
        }
      }
    }
  }
}
</style>