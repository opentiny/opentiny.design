<script setup>
import { defineProps } from "vue";

const props = defineProps({
  // Feature 配置对象
  feature: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="feature-section section"
    :class="[feature.bgClass || 'bg-tech-1', 'bg-color-1']"
    :style="
      feature.backgroundImage
        ? { backgroundImage: `url(${feature.backgroundImage})` }
        : {}
    "
  >
    <div
      class="feature-content pad-t40 fade-in-up"
      :class="{ 'reverse-layout': feature.reverse }"
    >
      <div class="feature-text">
        <h3 class="title">{{ feature.title }}</h3>
        <p class="description" v-html="feature.description"></p>
        <a :href="feature.buttonLink" target="_blank" class="btn secondary">{{
          feature.buttonText || "了解详情"
        }}</a>
      </div>
      <div class="feature-visual">
        <img :src="feature.imageSrc" :alt="feature.imageAlt" class="floating-img" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import "../common.less";

/* FeatureSection 特有样式 */
.feature-section {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.feature-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1400px;
  width: 100%;
  height: 100%;
}

.reverse-layout {
  flex-direction: row-reverse;
}

.feature-text {
  color: var(--text-primary);

  .title {
    font-size: 40px;
    letter-spacing: 2px;
    padding-bottom: 0px;
  }

  .description {
    font-size: 20px;
    letter-spacing: 2px;
    color: #808080;
    padding-bottom: 50px;
    padding-top: 30px;
    font-family: 微软雅黑;
  }

  .btn {
    background: transparent;
    padding: 10px 24px;
    font-size: 14px;
  }
}

.feature-visual {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.floating-img {
  max-width: 900px;
}

/* ==================== 响应式适配（FeatureSection 特有） ==================== */

/* 平板横屏 (1024px - 1440px) */
@media (max-width: 1024px) {
  .feature-content {
    flex-direction: row;
    padding: 0 30px;
    gap: 25px;
  }

  .reverse-layout {
    flex-direction: row-reverse;
  }

  .feature-text {
    padding: 0;
    margin-bottom: 30px;

    .title {
      font-size: 32px;
    }

    .description {
      font-size: 16px;
      padding-bottom: 40px;
      padding-top: 20px;
    }
  }

  .feature-visual {
    justify-content: center;
  }

  .floating-img {
    max-width: 800px;
  }
}

/* 平板竖屏 / 大手机 (768px - 1024px) */
@media (max-width: 768px) {
  .feature-content {
    padding: 0;
    gap: 10px;
    flex-direction: column;
  }

  // 反向布局时，小屏幕文字在上，图片在下
  .reverse-layout {
    flex-direction: column;

    .feature-text {
      order: 1;
    }

    .feature-visual {
      order: 2;
    }
  }

  .feature-text {
    margin-bottom: 20px;
    text-align: center;

    .title {
      font-size: 28px;
    }

    .description {
      font-size: 16px;
      padding-bottom: 30px;
      padding-top: 20px;
    }
  }

  .feature-visual {
    justify-content: center;
  }

  .floating-img {
    max-width: 100%;
  }
}

/* 小手机 (< 480px) */
@media (max-width: 480px) {
  .feature-content {
    padding: 0 15px;
  }

  .feature-text {
    .title {
      font-size: 24px;
    }

    .description {
      font-size: 14px;
      padding-top: 12px;
      letter-spacing: 0px;
    }
  }
}
</style>
