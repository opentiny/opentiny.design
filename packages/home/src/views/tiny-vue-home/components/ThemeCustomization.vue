<script setup>
import { onMounted, ref, inject, nextTick } from "vue";
// 导入图片资源
import themeLeftImg from "@/assets/images/home/tinyvue-home/web/theme1.svg";
import themeRightImg from "@/assets/images/home/tinyvue-home/web/theme2.svg";
import themeLeftImgMobile from "@/assets/images/home/tinyvue-home/mobile/theme1.svg";
import themeRightImgMobile from "@/assets/images/home/tinyvue-home/mobile/theme2.svg";

// 从父组件注入
const isMobile = inject("isMobile");
</script>

<template>
  <section class="feature-section section bg-tech-2 bg-color-1">
    <div class="feature-header fade-in-up">
      <h2 class="title feature-title">强大的主题定制</h2>
      <p class="description">
        支持灵活的主题配置和定制能力。轻松适配企业品牌风格，打造独特视觉体验。
      </p>
    </div>
    <div class="feature-content pad-t40 content-center fade-in-up">
      <div class="feature-visual">
        <img
          :src="isMobile ? themeLeftImgMobile : themeLeftImg"
          alt="主题定制"
          class="theme-item-img theme-left"
        />
      </div>
      <div class="feature-visual">
        <img
          :src="isMobile ? themeRightImgMobile : themeRightImg"
          alt="主题定制"
          class="theme-item-img"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import "../common.less";

.tiny-vue-home {
  /* 组件特定样式 */
  .theme-item-img {
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .feature-content {
    justify-content: center;
  }

  .theme-left {
    margin-right: 40px;
  }

  /* 响应式适配 */
  @media (max-width: 1024px) {
    .feature-content {
      flex-direction: column;
    }

    .theme-item-img {
      zoom: 0.7;
    }

    .theme-left {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    .feature-visual {
      width: 100%;
    }
    .theme-item-img {
      width: 100%;
      border-radius: 10px;
      zoom: 1;
    }
  }
}
</style>
