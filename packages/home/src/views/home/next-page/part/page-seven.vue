<template>
  <div class="banner-page">
    <div class="hero-banner">
      <h1 class="banner-title">开启改造智能化应用之旅</h1>
      <p class="banner-desc">智能化操作的底层实现路径，如何让AI“动起来”？</p>
      <div class="banner-actions">
        <tiny-button size="medium" @click="docsFn">
          文档
          <span class="btn-arrow btn-arrow-light"></span>
        </tiny-button>
        <!-- todo: -->
        <!-- <tiny-button size="medium">
          体验
          <span class="btn-arrow btn-arrow-light"></span>
        </tiny-button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { TinyButton } from '@opentiny/vue'

const docsFn = () => {
    window.open(`https://docs.opentiny.design/`, '_blank', 'noopener=yes,noreferrer=yes')
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.btn-arrow {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 6px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  vertical-align: middle;
  transition: transform 0.3s ease;

  &-light {
    background-image: url('../../../../assets/images/new-icon/floor1/arrow-white.svg');
  }

  &-dark {
    background-image: url('../../../../assets/images/new-icon/floor1/arrow.svg');
  }
}

.banner-page {
  background-color: rgba(247, 248, 251, 1);
  padding: 130px 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-banner {
  width: 100%;
  height: 300px;
  border-radius: 20px;
  
  /* 背景图设置 */
  background-image: url('../../../../assets/images/new-icon/next-page/part-seven-a.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* 内容居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* 文字阴影，提升在背景图上的可读性 */
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  /* 可选：叠加一层半透明遮罩，确保文字清晰 */
  position: relative;
  overflow: hidden;
}

/* 遮罩层 */
.hero-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  z-index: 1;
}

/* 内容层 */
.hero-banner > * {
  position: relative;
  z-index: 2;
}

.banner-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 66px;
  color: #ffffff;
  margin-bottom: 30px;
  text-align: center;
}

.banner-desc {
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  text-align: center;
}

.banner-actions {
  display: flex;
  gap: 16px;
}

:deep(.tiny-button.tiny-button--default) {
    background-color: transparent;
    color: #ffffff;
    border-color:#ffffff;
}
/* 按钮悬停时箭头微动效 */
:deep(.tiny-button:hover) .btn-arrow {
  transform: translateX(4px);
}

/* ========== 中等屏幕 ========== */
@media (max-width: 1200px) {
  .banner-page {
    padding: 80px 60px;
  }
}

/* ========== 小屏幕 ========== */
@media (max-width: 768px) {
  .banner-page {
    padding: 60px 20px;
  }
  .hero-banner {
    height: 260px;
    padding: 32px;
  }
  .banner-title {
    font-size: 28px;
    line-height: 40px;
  }
  .banner-desc {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }
}
</style>