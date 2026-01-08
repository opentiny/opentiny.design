<template>
  <div class="robot-component">
    <div class="robot-component-title">{{ info.title }}</div>
    <div class="robot-component-subtitle">{{ info.subtitle }}</div>
    <div class="robot-component-container">
      <div class="robot-component-item">
        <div class="robot-component-container-left-mask">
           <tiny-button round @click="gotoDocs">查看组件文档</tiny-button>
        </div>
        <div class="robot-component-container-left">
          <img :src="info.image1">
        </div>
      </div>
      <div class="robot-component-item">
        <div class="robot-component-container-right-mask">
           <tiny-button round @click="gotoDocs">查看组件文档</tiny-button>
        </div>
        <div class="robot-component-container-right">
          <img :src="info.image2">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import componentImg1 from '@/assets/images/home/tinyrobot_component1.svg'
import componentImg2 from '@/assets/images/home/tinyrobot_component2.svg'
import { TinyButton } from '@opentiny/vue'

const info = {
  title: '典型组件展示',
  subtitle: '开箱即用的AI对话模块',
  image1: componentImg1,
  image2: componentImg2
}

const gotoDocs = () => {
  window.open('https://docs.opentiny.design/tiny-robot/guide/quick-start')
}

</script>
<style lang="less" scoped>
.robot-component {
  margin: 0 auto;
  margin-top: 120px;
  .robot-component-title {
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
  }
  .robot-component-subtitle{
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .robot-component-container{
    display: flex;
    gap: 40px;
    height: 500px;
    margin-top: 66px;
    .robot-component-item{
      background: #f5f5f5;
      border-radius: 16px;
      width: calc((100% - 40px) / 2);
      position: relative;
      overflow: hidden;
      
      &:hover {
        .robot-component-container-left-mask,
        .robot-component-container-right-mask {
          opacity: 1;
        }
      }
    }
    .robot-component-container-left{
      padding: 50px 60px;
    }
    .robot-component-container-left-mask,
    .robot-component-container-right-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      z-index: 10;
      border-radius: 16px;
      :deep(.tiny-button) {
          font-size: 18px;
          width: 188px;
          height: 48px;
        }
    }
    .robot-component-container-right{
      padding: 50px 45px;
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
}
</style>