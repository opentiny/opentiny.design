<template>
  <div class="first-screen">
    <div class="first-screen-wrap">
      <div class="first-screen-content">
        <div class="first-screen-content-title">{{ state.title }}</div>
        <div class="first-screen-content-subtitle">{{ state.subtitle }}</div>
        <div class="first-screen-content-text">{{ state.description }}</div>
        <div class="first-screen-content-sender">
          <div class="first-screen-content-sender-content">{{ displayText }}<span class="cursor"></span></div>
          <img class="first-screen-content-sender-icon" :src="state.senderImg" alt="" />
        </div>
        <div class="first-screen-content-footer">
          <tiny-button type="primary" round @click="gotoChat">立即体验</tiny-button>
          <tiny-button round ghost @click="gotoDocs">组件文档</tiny-button>
        </div>
      </div>
      <div class="first-screen-image">
        <img :src="state.image" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue'
import { TinyButton } from '@opentiny/vue'
import img from '@/assets/images/home/tinyrobot_top.svg'
import sender from '@/assets/images/home/tinyrobot_sender.svg'

const TYPING_SPEED = 100 // 打字速度（毫秒）
const PAUSE_AFTER_COMPLETE = 3000 // 打完后停顿时间（毫秒）

const state = reactive({
  title: 'TinyRobot 智能助手+组件',
  subtitle: '双核驱动，体验升维',
  description: '一站式智能协作解决方案，覆盖全业务场景，智能响应无死角',
  image: img,
  list: [
    '创建一个下周二去上海五天的出差申请',
    '将季度销售数据Excel转换为可视化PPT简报',
    '生成深圳极端天气可能下的客户拜访应变方案'
  ],
  currentIndex: 0,
  charIndex: 0,
  senderImg: sender,
  animationFrameId: null,
  lastUpdateTime: 0
})

// 计算属性：当前显示的文本
const displayText = computed(() => {
  return state.list[state.currentIndex].slice(0, state.charIndex)
})

const gotoChat = () => {
  window.open('https://chat.opentiny.design/')
}

const gotoDocs = () => {
  window.open('https://docs.opentiny.design/tiny-robot/guide/quick-start')
}

// 打字机动画核心逻辑
const typeWriter = (timestamp) => {
  if (!state.lastUpdateTime) {
    state.lastUpdateTime = timestamp
  }

  const elapsed = timestamp - state.lastUpdateTime
  const currentText = state.list[state.currentIndex]

  // 如果还在打字中
  if (state.charIndex < currentText.length) {
    if (elapsed >= TYPING_SPEED) {
      state.charIndex++
      state.lastUpdateTime = timestamp
    }
    state.animationFrameId = requestAnimationFrame(typeWriter)
  } else {
    // 打字完成，等待一段时间后切换到下一句
    setTimeout(() => {
      state.currentIndex = (state.currentIndex + 1) % state.list.length
      state.charIndex = 0
      state.lastUpdateTime = 0
      state.animationFrameId = requestAnimationFrame(typeWriter)
    }, PAUSE_AFTER_COMPLETE)
  }
}

// 启动动画
const startAnimation = () => {
  stopAnimation()
  state.charIndex = 0
  state.lastUpdateTime = 0
  state.animationFrameId = requestAnimationFrame(typeWriter)
}

// 停止动画
const stopAnimation = () => {
  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId)
    state.animationFrameId = null
  }
}

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  stopAnimation()
})
</script>
<style lang="less" scoped>
@keyframes slideUpFadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.first-screen {
  background-image: url(@/assets/images/home/tinyrobot_top_banner.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .first-screen-wrap {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .first-screen-content {
      max-width: 682px;
      .first-screen-content-title {
        font-size: 52px;
        font-weight: 700;
        line-height: 72px;
        color: #191919;
      }
      .first-screen-content-subtitle {
        font-size: 52px;
        font-weight: 700;
        line-height: 72px;
        background: linear-gradient(90deg, #bc43cb, #0e70ff);
        background-clip: text;
        color: transparent;
        margin-top: 4px;
      }
      .first-screen-content-text {
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        margin-top: 30px;
        color: #808080;
      }
      .first-screen-content-sender {
        margin-top: 52px;
        max-width: 514px;
        background: #fff;
        height: 58px;
        border-radius: 199px;
        box-shadow: 0 0 20px 0 rgba(225, 220, 237, 0.5);
        padding: 12px 16px;
        display: flex;
        align-items: center;
        .first-screen-content-sender-content {
          width: calc(100% - 48px);
          color: #191919;
          font-size: 16px;
          line-height: 24px;
          margin-left: 14px;

          .cursor {
            display: inline-block;
            width: 1px;
            height: 18px;
            background-color: #191919;
            margin-left: 2px;
            animation: blink 1s infinite;
            vertical-align: text-bottom;
          }

          @keyframes blink {
            0%,
            49% {
              opacity: 1;
            }
            50%,
            100% {
              opacity: 0;
            }
          }
        }
        .first-screen-content-sender-icon {
          height: 34px;
          width: 34px;
          margin-left: 16px;
        }
      }
      .first-screen-content-footer {
        margin-top: 54px;
        :deep(.tiny-button) {
          font-size: 18px;
          width: 154px;
          height: 48px;
          & + .tiny-button {
            margin-left: 24px;
          }
        }
      }
    }
    .first-screen-image {
      margin-top: 120px;
      margin-bottom: 130px;
      animation: slideUpFadeIn 0.8s ease forwards;
      img {
        width: 100%;
        filter: drop-shadow(0 0 50px rgba(192, 204, 255, 0.4));
      }
    }
  }
}

@media (max-width: 1023px) {
  .first-screen {
    background-image: url(@/assets/images/home/tinyrobot_top_mobile_banner.svg);
    .first-screen-wrap {
      flex-direction: column;
      .first-screen-content {
        margin-top: 50px;
        .first-screen-content-title {
          font-size: 24px;
          line-height: 32px;
          text-align: center;
        }
        .first-screen-content-subtitle {
          font-size: 24px;
          line-height: 32px;
          text-align: center;
        }
        .first-screen-content-text {
          width: 249px;
          font-size: 12px;
          line-height: 18px;
          margin-top: 18px;
          text-align: center;
          margin-left: 27px;
        }
        .first-screen-content-sender {
          margin-top: 22px;
          width: 300px;
          background: #fff;
          height: 32px;
          border-radius: 110px;
          box-shadow: 0 0 9px 0 rgba(225, 220, 237, 0.5);
          padding: 9px 6px;
          .first-screen-content-sender-content {
            width: calc(100% - 32px);
            color: #191919;
            font-size: 12px;
            line-height: 12px;
            margin-left: 14px;
            .cursor {
              height: 14px;
              margin-left: 1px;
            }
          }
          .first-screen-content-sender-icon {
            width: 20px;
            height: 20px;
            margin-left: 6px;
          }
        }
        .first-screen-content-footer {
          margin-top: 36px;
          text-align: center;
          :deep(.tiny-button) {
            font-size: 12px;
            width: 128px;
            height: 32px;
            & + .tiny-button {
              margin-left: 12px;
            }
          }
        }
      }
      .first-screen-image {
        margin-top: 38px;
        margin-bottom: 38px;
      }
    }
  }
}
</style>