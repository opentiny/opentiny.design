<script setup>
// 导入图片资源
import heroBgWhite from "@/assets/images/home/hero_bg_white.png";
import featureCrossPlatform from "@/assets/images/home/feature_cross_platform.png";
import illustrationRichComponents from "@/assets/images/home/illustration_rich_components.png";
import illustrationUniqueComponents from "@/assets/images/home/illustration_unique_components.png";
import tinyvueThemeCustomization from "@/assets/images/home/tinyvue_theme_customization.png";
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
        <h1 class="title">OpenTiny Vue</h1>
        <p class="subtitle">
          企业级 Vue 组件库<br />
          轻量、高性能、智能化
        </p>
        <div class="cta-group">
          <a
            href="https://opentiny.design/tiny-vue"
            target="_blank"
            class="btn primary"
            >开始使用</a
          >
          <a
            href="https://opentiny.design/tiny-vue/zh-CN/os-theme/docs/overview"
            target="_blank"
            class="btn secondary"
            >查看文档</a
          >
        </div>
      </div>
      <div class="scroll-indicator">
        <span>↓</span>
      </div>
    </header>

    <!-- Feature 1: 跨端跨框架 -->
    <section
      class="feature-section section bg-tech-1"
      :style="{ backgroundImage: `url(${featureBgWhite1})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">跨端跨框架</h2>
          <p class="feature-desc">
            一套代码同时支持 Vue 2 和 Vue 3，适配 PC 端和移动端。<br />
            无需重复开发，大幅提升开发效率。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="featureCrossPlatform"
            alt="跨端跨框架"
            class="floating-img"
          />
        </div>
      </div>
    </section>

    <!-- Feature 2: 丰富的组件 -->
    <section
      class="feature-section section bg-tech-2 reverse"
      :style="{ backgroundImage: `url(${featureBgWhite2})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">丰富的组件</h2>
          <p class="feature-desc">
            包含 80+ 个高质量组件，覆盖各类业务场景。<br />
            持续更新迭代，满足企业级应用需求。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="illustrationRichComponents"
            alt="丰富的组件"
            class="floating-img delay-1"
          />
        </div>
      </div>
    </section>

    <!-- Feature 3: 配置式组件 -->
    <section
      class="feature-section section bg-tech-1"
      :style="{ backgroundImage: `url(${featureBgWhite1})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">配置式组件</h2>
          <p class="feature-desc">
            支持模板式和配置式两种使用方式。<br />
            配置式组件让复杂场景的开发更简单高效。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="illustrationUniqueComponents"
            alt="配置式组件"
            class="floating-img delay-2"
          />
        </div>
      </div>
    </section>

    <!-- Feature 4: 强大的主题定制 -->
    <section
      class="feature-section section bg-tech-2 reverse"
      :style="{ backgroundImage: `url(${featureBgWhite2})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">强大的主题定制</h2>
          <p class="feature-desc">
            支持灵活的主题配置和定制能力。<br />
            轻松适配企业品牌风格，打造独特视觉体验。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="tinyvueThemeCustomization"
            alt="主题定制"
            class="floating-img delay-3"
          />
        </div>
      </div>
    </section>

    <!-- MCP Section -->
    <section
      class="mcp-section section"
      :style="{ backgroundImage: `url(${mcpBgWhite})` }"
    >
      <div class="mcp-content">
        <h2 class="section-title light">智能化生成式 UI</h2>
        <p class="mcp-desc">
          全新升级的 TinyVue，引入 AI 智能化能力，让组件开发更智能、更高效
        </p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                />
              </svg>
            </div>
            <h3>属性驱动式组件</h3>
            <p>通过简单的属性配置即可生成复杂的 UI 组件，降低开发门槛</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </div>
            <h3>AI 可识别智能组件</h3>
            <p>组件可被 AI 识别和操作，实现智能化的应用开发体验</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"
                />
              </svg>
            </div>
            <h3>轻量化组件，性能强悍</h3>
            <p>优化组件体积和性能，确保应用运行流畅高效</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                />
              </svg>
            </div>
            <h3>轻松适配多主题</h3>
            <p>灵活的主题系统，支持快速切换和定制企业品牌风格</p>
          </div>
        </div>
      </div>
      <div class="footer-mini">
        <p>TinyVue - 企业级 Vue 组件库</p>
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

/* Backgrounds */
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

.mcp-section {
  background-size: cover;
  background-position: center;
  justify-content: space-between;
}

/* Hide underline for MCP title */
.mcp-section .section-title.light::after {
  display: none;
}

.mcp-content {
  max-width: 1400px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  text-align: center;
  flex: 1;
}

/* Overlays */
.hero::before,
.feature-section::before,
.mcp-section::before {
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

/* MCP Section Styles */
.mcp-desc {
  font-size: 22px;
  color: var(--text-secondary);
  margin-bottom: 60px;
  max-width: 800px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 1400px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(94, 124, 226, 0.15);
  border-color: rgba(94, 124, 226, 0.3);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 24px;
  color: var(--primary-color);
}

.feature-icon svg {
  width: 100%;
  height: 100%;
}

.feature-card h3 {
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.feature-card p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.footer-mini {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-secondary);
  font-size: 14px;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
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
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 48px;
    margin-top: -60px; /* Adjust for smaller screen */
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

  .mcp-section {
    height: auto;
    min-height: 100vh;
    padding: 60px 0;
    overflow-y: visible;
  }

  .mcp-content {
    padding: 0 20px;
    height: auto;
  }

  .feature-grid {
    grid-template-columns: 1fr; /* Stack cards on mobile */
    gap: 20px;
    margin-bottom: 40px;
  }

  .feature-card {
    padding: 30px 20px;
  }

  .cta-group {
    flex-direction: column;
    gap: 15px;
  }

  .btn {
    width: 100%;
    padding: 12px 0;
  }
}
</style>
