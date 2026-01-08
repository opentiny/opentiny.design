<template>
  <div class="scene-cases">
    <div class="scene-cases-title">{{ info.title }}</div>
    <div class="scene-cases-subtitle">{{ info.subtitle }}</div>
    <div class="scene-cases-container">
      <div
        v-for="item in info.list"
        :key="item.name"
        class="item"
        @click="handleClickCase"
      >
        <div class="item-image">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <div class="item-name">
          <span class="item-name__text">{{ item.name }}</span>
        </div>
        <div class="item-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import caseImg1 from '@/assets/images/home/tinyrobot_scene_cases_img1.svg'
import caseImg2 from '@/assets/images/home/tinyrobot_scene_cases_img2.svg'
import caseImg3 from '@/assets/images/home/tinyrobot_scene_cases_img3.svg'
import caseImg4 from '@/assets/images/home/tinyrobot_scene_cases_img4.svg'
import caseImg5 from '@/assets/images/home/tinyrobot_scene_cases_img5.svg'
import caseImg6 from '@/assets/images/home/tinyrobot_scene_cases_img6.svg'

const info = {
  title: '场景案例',
  subtitle: '是现阶段前端应用快速智能化改造的最佳方案',
  list: [
    {
      name: '出差申请',
      text: '创建一个下周二去上海五天的出差申请',
      imgUrl: caseImg1,
    },
    {
      name: '数据格式转化',
      text: '将季度销售数据Excel转换为可视化PPT简报',
      imgUrl: caseImg2,
    },
    {
      name: '拜访客户方案',
      text: '生成深圳极端天气可能下的客户拜访应变方案',
      imgUrl: caseImg3,
    },
    {
      name: 'IT设备清单',
      text: '制作新员工入职IT设备申领清单',
      imgUrl: caseImg4,
    },
    {
      name: '筹办技术峰会',
      text: '筹办用户体验技术峰会',
      imgUrl: caseImg5,
    },
    {
      name: '编写英文邮件',
      text: '给客户编写一封英文项目进展汇报邮件',
      imgUrl: caseImg6,
    },
  ],
}

const handleClickCase = () => {
  window.open('https://chat.opentiny.design')
}
</script>
<style lang="less" scoped>
.scene-cases {
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 190px;
  .scene-cases-title {
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
  }
  .scene-cases-subtitle {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .scene-cases-container {
    margin-top: 66px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    .item {
      width: 446px;
      padding: 20px 20px 30px;
      border-radius: 16px;
      box-shadow: 0 4px 22px 0 rgba(0, 0, 0, 0.08);
      cursor: pointer;
      .item-image {
        width: 100%;
        img {
          width: 100%;
          height: 265px;
          border-radius: 8px;
        }
      }
      .item-name {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        color: #808080;
        margin-top: 24px;
      }
      .item-text {
        font-size: 18px;
        color: #000;
        margin-top: 10px;
      }
    }
  }
}
</style>