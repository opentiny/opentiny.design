<script setup>
import { ref, inject, onMounted } from "vue";
// 导入图片资源
import heroBgWhite from "@/assets/images/home/tinyvue-home/web/banner-bg.svg";
import heroBgPc from "@/assets/images/home/tinyvue-home/web/banner-img.svg";
import heroBgMobile from "@/assets/images/home/tinyvue-home/mobile/bannerimg.svg";

// 从父组件注入
const isMobile = inject("isMobile");
const initFadeInUp = inject("initFadeInUp");

// 使用 ref 引用 fade-in-up 元素
const heroImgRef = ref(null);

onMounted(() => {
  // 延迟初始化，确保 DOM 已完全渲染
  setTimeout(() => {
    if (initFadeInUp && heroImgRef.value) {
      initFadeInUp(heroImgRef.value);
    }
  }, 200);
});
</script>

<template>
  <div class="hero section" :style="{ backgroundImage: `url(${heroBgWhite})` }">
    <div class="hero-content">
      <h1 class="title pad-b40">TinyVue 智能组件库</h1>
      <p class="subtitle pad-b40">跨端、跨框架、智能化</p>
      <p class="description pad-b40">
        一款跨端、跨框架的企业级 UI 组件库，支持 Vue 2 和 Vue 3，支持 PC 端和移动端
      </p>
      <div class="cta-group">
        <a href="https://opentiny.design/tiny-vue" target="_blank" class="btn primary"
          >立即体验</a
        >
        <a
          href="https://docs.opentiny.design/tiny-vue/guide/introduce.html"
          target="_blank"
          class="btn secondary"
          >产品文档</a
        >
      </div>
    </div>
    <div ref="heroImgRef" class="hero-img fade-in-up">
      <img :src="isMobile ? heroBgMobile : heroBgPc" alt="TinyVue 智能组件库" />
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../common.less";

.tiny-vue-home {
  .hero {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 75px;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 1400px;
    padding: 20px 0 0 40px;
    padding-top: 0;
    animation: fadeInUp 1s ease-out;
  }

  .hero-img {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      max-width: 1000px;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
      border-radius: 20px;
    }
  }

  /* 响应式适配 */
  @media (max-width: 1024px) {
    .hero {
      padding: 40px 30px;
    }

    .hero-img {
      width: 100%;
      margin-top: 40px;
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 30px 20px;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }

    .hero-content {
      padding: 20px;
    }
  }

  @media (max-width: 480px) {
    .hero {
      padding: 20px 15px;
    }
  }
}
</style>
