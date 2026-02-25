<script setup>
// 导入图片资源
import heroBgWhite from "@/assets/images/home/next-sdk-home/banner-bg.svg";
import heroBgPc from "@/assets/images/home/next-sdk-home/banner-img.svg";
</script>

<template>
  <header class="hero section" :style="{ backgroundImage: `url(${heroBgWhite})` }">
    <div class="hero-content">
      <h1 class="title pad-b40">AI Extension AI扩展插件</h1>
      <p class="subtitle pad-b40">智能交互 随你智动</p>
      <p class="description pad-b40">
        基于 WXT 的浏览器扩展插件 让 AI 助手与网页智能交互
      </p>
      <div class="cta-group">
        <a href="https://docs.opentiny.design/download/extension.zip" class="btn primary"
          >下载扩展</a
        >
        <a
          href="https://docs.opentiny.design/next-sdk/guide/ai-extension-install"
          target="_blank"
          class="btn secondary"
          >安装指南</a
        >
      </div>
    </div>
    <div class="hero-img">
      <img :src="heroBgPc" alt="AI Extension" />
    </div>
  </header>
</template>

<style scoped lang="less">
@import "../common.less";
.ai-extension-home {
  /* Hero Section 特有样式 */
  .section.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    flex-direction: row;
    gap: 60px;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    padding: 20px;
    text-align: left;
    animation: fadeInUp 1s ease-out;
  }

  .hero-img {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 1000px;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
      border-radius: 20px;
      width: 100%;
    }
  }

  .cta-group {
    display: flex;
    gap: 20px;
    justify-content: left;
  }

  /* ==================== 响应式适配 ==================== */

  @media (max-width: 768px) {
    .title {
      font-size: 36px;
    }

    .section.hero {
      flex-direction: column;
    }

    .subtitle {
      font-size: 24px;
    }

    .cta-group {
      gap: 15px;
      justify-content: center;
    }

    .hero-content {
      padding: 20px;
      text-align: center;
    }
  }
}
</style>
