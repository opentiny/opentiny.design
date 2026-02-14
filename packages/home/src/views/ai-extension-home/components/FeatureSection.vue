<script setup>
import { defineProps } from "vue";

const props = defineProps({
  // Feature 配置对象
  feature: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section
    class="feature-section section"
    :class="[feature.bgClass || 'bg-tech-1']"
    :style="feature.backgroundImage ? { backgroundImage: `url(${feature.backgroundImage})` } : {}"
  >
    <div
      class="feature-content pad-t40 fade-in-up"
      :class="{ 'reverse-layout': feature.reverse }"
    >
      <div class="feature-text">
        <h2 class="section-title">{{ feature.title }}</h2>
        <p class="feature-desc" v-html="feature.description"></p>
      </div>
      <div class="feature-visual">
        <img :src="feature.imageSrc" :alt="feature.imageAlt" class="floating-img" :class="feature.delayClass" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import "../common.less";

/* FeatureSection 特有样式 */
.feature-section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.feature-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.reverse-layout {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
}

.section-title {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.feature-desc {
  font-size: 22px;
  line-height: 1.8;
  color: var(--text-secondary);
}

.feature-visual {
  flex: 1;
  display: flex;
  justify-content: center;
}

.floating-img {
  width: 100%;
  max-width: 600px;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  border-radius: 24px;
  transition: transform 0.3s ease;
  animation: float 6s ease-in-out infinite;
}

.floating-img:hover {
  transform: scale(1.02);
}

.delay-1 {
  animation-delay: 1s;
}

.delay-2 {
  animation-delay: 2s;
}

.delay-3 {
  animation-delay: 3s;
}

/* ==================== 响应式适配 ==================== */

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
  }

  .section-title {
    font-size: 32px;
  }

  .feature-desc {
    font-size: 19px;
  }

  .feature-visual {
    justify-content: center;
  }

  .floating-img {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .feature-content {
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
    gap: 40px;
  }

  .reverse-layout {
    flex-direction: column;
  }

  .feature-text {
    padding: 0;
  }

  .section-title {
    font-size: 32px;
  }

  .feature-desc {
    font-size: 19px;
  }

  .feature-visual {
    width: 100%;
    margin-top: 0;
  }

  .floating-img {
    max-width: 100%;
  }
}
</style>

