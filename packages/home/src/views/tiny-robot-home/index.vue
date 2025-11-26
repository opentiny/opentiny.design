<script setup>
// 导入图片资源
import heroBgWhite from "@/assets/images/home/hero_bg_white.png";
import tinyrobotComponents from "@/assets/images/home/tinyrobot_components.png";
import tinyrobotDesign from "@/assets/images/home/tinyrobot_design.png";
import tinyrobotEasyUse from "@/assets/images/home/tinyrobot_easy_use.png";
import tinyrobotToolsDemos from "@/assets/images/home/tinyrobot_tools_demos.png";
import featureBgWhite1 from "@/assets/images/home/feature_bg_white_1.png";
import featureBgWhite2 from "@/assets/images/home/feature_bg_white_2.png";
import mcpBgWhite from "@/assets/images/home/mcp_bg_white.png";
</script>

<template>
  <div class="container">
    <header
      class="hero section"
      :style="{ backgroundImage: `url(${heroBgWhite})` }"
    >
      <div class="hero-content">
        <h1 class="title">TinyRobot AI 组件库</h1>
        <p class="subtitle">
          符合 OpenTiny Design 设计体系的 AI 组件库<br />
          丰富的 AI 交互组件，助力快速构建 AI 应用
        </p>
        <div class="cta-group">
          <a
            href="https://docs.opentiny.design/tiny-robot/guide/quick-start.html"
            target="_blank"
            class="btn primary"
            >快速开始</a
          >
          <a
            href="https://docs.opentiny.design/tiny-robot/components/bubble.html"
            target="_blank"
            class="btn secondary"
            >组件文档</a
          >
        </div>
      </div>
      <div class="scroll-indicator">
        <span>↓</span>
      </div>
    </header>

    <!-- Feature 1: 丰富的 AI 组件 -->
    <section
      class="feature-section section bg-tech-1"
      :style="{ backgroundImage: `url(${featureBgWhite1})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">丰富的 AI 交互组件</h2>
          <p class="feature-desc">
            提供 Bubble（气泡）、Carousel（轮播）、Markdown 等多种组件。<br />
            支持流式输出、代码高亮、数学公式渲染等高级特性。<br />
            满足各类 AI 应用场景的交互需求。
          </p>
        </div>
        <div class="feature-visual">
          <img :src="tinyrobotComponents" alt="AI 组件" class="floating-img" />
        </div>
      </div>
    </section>

    <!-- Feature 2: OpenTiny Design 体系 -->
    <section
      class="feature-section section bg-tech-2 reverse"
      :style="{ backgroundImage: `url(${featureBgWhite2})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">OpenTiny Design 体系</h2>
          <p class="feature-desc">
            完全符合 OpenTiny Design 设计规范。<br />
            统一的视觉风格和交互体验。<br />
            与 TinyVue 等其他 OpenTiny 产品无缝集成。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="tinyrobotDesign"
            alt="设计体系"
            class="floating-img delay-1"
          />
        </div>
      </div>
    </section>

    <!-- Feature 3: 简单易用 -->
    <section
      class="feature-section section bg-tech-1"
      :style="{ backgroundImage: `url(${featureBgWhite1})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">简单易用</h2>
          <p class="feature-desc">
            支持按需引入和全局引入两种方式。<br />
            清晰的 API 设计，开箱即用。<br />
            完善的文档和示例，快速上手。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="tinyrobotEasyUse"
            alt="简单易用"
            class="floating-img delay-2"
          />
        </div>
      </div>
    </section>

    <!-- Feature 4: 工具与演示 -->
    <section
      class="feature-section section bg-tech-2 reverse"
      :style="{ backgroundImage: `url(${featureBgWhite2})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">工具与演示</h2>
          <p class="feature-desc">
            提供 AI Client 等实用工具类。<br />
            丰富的演示案例，包括 AI 助手等场景。<br />
            帮助开发者快速理解和应用。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="tinyrobotToolsDemos"
            alt="工具演示"
            class="floating-img delay-3"
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section
      class="footer-section section"
      :style="{ backgroundImage: `url(${mcpBgWhite})` }"
    >
      <div class="footer-content">
        <h2>准备好构建 AI 应用了吗？</h2>
        <p>立即开始使用 TinyRobot AI 组件库</p>
        <div class="cta-group">
          <a
            href="https://docs.opentiny.design/tiny-robot/guide/quick-start.html"
            target="_blank"
            class="btn primary"
            >查看文档</a
          >
          <a
            href="https://docs.opentiny.design/tiny-robot/examples/assistant.html"
            target="_blank"
            class="btn secondary"
            >查看演示</a
          >
        </div>
        <div class="footer-mini">
          <p>TinyRobot - 让 AI 应用开发更简单</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: var(--bg-color);
}

.section {
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Backgrounds - Reusing App.vue assets */
.hero {
  background-size: cover;
  background-position: center;
  color: var(--text-primary);
  text-align: center;
}

.bg-tech-1 {
  background-size: cover;
  background-position: center;
}

.bg-tech-2 {
  background-size: cover;
  background-position: center;
}

.footer-section {
  background-size: cover;
  background-position: center;
}

/* Overlays */
.hero::before,
.feature-section::before,
.footer-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  padding: 20px;
  padding-top: 0;
  animation: fadeInUp 1s ease-out;
}

.title {
  font-size: 88px;
  font-weight: 800;
  margin-bottom: 24px;
  margin-top: -120px;
  letter-spacing: -2px;
  background: linear-gradient(120deg, #333 30%, #5e7ce2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
}

.subtitle {
  font-size: 35px;
  margin-bottom: 56px;
  line-height: 1.5;
  color: var(--text-secondary);
  font-weight: 400;
}

.cta-group {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.btn {
  padding: 16px 48px;
  border-radius: 30px;
  font-size: 19px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.btn.primary {
  background: var(--primary-gradient);
  color: white;
  border: none;
  box-shadow: 0 10px 25px rgba(94, 124, 226, 0.3);
}

.btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(94, 124, 226, 0.5);
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  color: var(--primary-color);
  border: 1px solid rgba(94, 124, 226, 0.3);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.btn.secondary:hover {
  background: white;
  transform: translateY(-3px);
  border-color: var(--primary-color);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-secondary);
  font-size: 40px;
  animation: bounce 2s infinite;
  z-index: 2;
  opacity: 0.6;
}

/* Feature Sections */
.feature-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  padding: 0 80px;
  height: 100%;
}

.reverse .feature-content {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
  color: var(--text-primary);
  padding: 0 30px;
}

.section-title.light {
  font-size: 51px;
  font-weight: 700;
  margin-bottom: 40px;
  color: var(--text-primary);
  text-shadow: none;
  position: relative;
  white-space: nowrap;
}

.section-title.light::after {
  content: "";
  display: block;
  width: 80px;
  height: 6px;
  background: var(--primary-gradient);
  margin-top: 20px;
  border-radius: 3px;
}

.feature-desc {
  font-size: 26px;
  line-height: 1.8;
  color: var(--text-secondary);
  font-weight: 300;
}

.feature-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-img {
  width: 90%;
  max-width: 600px;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  animation: float 6s ease-in-out infinite;
  transition: transform 0.5s ease;
  border-radius: 24px; /* Add rounded corners */
}

.floating-img:hover {
  transform: scale(1.05);
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

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Footer */
.footer-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-content h2 {
  font-size: 48px;
  margin-bottom: 20px;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-content p {
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 60px;
}

.footer-mini {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-secondary);
  font-size: 14px;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.footer-mini p {
  font-size: 0.9rem;
  margin: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -10px);
  }
  60% {
    transform: translate(-50%, -5px);
  }
}

@media (max-width: 1024px) {
  .feature-content {
    flex-direction: column;
    text-align: center;
    padding: 0 30px;
    justify-content: center;
  }
  .reverse .feature-content {
    flex-direction: column;
  }
  .feature-text {
    padding: 0;
    margin-bottom: 50px;
  }
  .feature-visual {
    width: 100%;
  }
  .section-title.light {
    font-size: 48px;
  }
  .section-title.light::after {
    margin: 20px auto 0;
  }
  .title {
    font-size: 56px;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 48px;
    margin-top: -60px;
  }

  .subtitle {
    font-size: 24px;
    margin-bottom: 32px;
  }

  .hero-content {
    padding: 20px;
  }

  .feature-content {
    flex-direction: column;
    padding: 0 20px;
    text-align: center;
    justify-content: center;
  }

  .reverse .feature-content {
    flex-direction: column;
  }

  .feature-text {
    padding: 0;
    margin-bottom: 40px;
  }

  .section-title.light {
    font-size: 40px;
  }

  .section-title.light::after {
    margin: 20px auto 0;
  }

  .feature-desc {
    font-size: 19px;
  }

  .feature-visual {
    width: 100%;
  }

  .cta-group {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .footer-content .cta-group {
    margin-bottom: 40px;
  }

  .btn {
    width: 100%;
    padding: 12px 0;
  }
}
</style>
