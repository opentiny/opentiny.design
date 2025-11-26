<script setup>
// 导入图片资源
import heroBgWhite from "@/assets/images/home/hero_bg_white.png";
import aiextMcpToolsNew from "@/assets/images/home/aiext_mcp_tools_new.png";
import aiextUserscriptsNew from "@/assets/images/home/aiext_userscripts_new.png";
import aiextInstallNew from "@/assets/images/home/aiext_install_new.png";
import aiextDevelopmentNew from "@/assets/images/home/aiext_development_new.png";
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
        <h1 class="title">AI Extension</h1>
        <p class="subtitle">
          基于 WXT 的浏览器扩展插件<br />
          让 AI 助手与网页智能交互
        </p>
        <div class="cta-group">
          <a href="https://ai.opentiny.design/extension.zip" class="btn primary"
            >下载扩展</a
          >
          <a
            href="/src/ai-extension-install.md"
            target="_blank"
            class="btn secondary"
            >安装指南</a
          >
        </div>
      </div>
    </header>

    <!-- Highlights Grid Section -->
    <section class="highlights-section">
      <div class="section-container">
        <h2 class="section-title text-center">核心亮点</h2>
        <div class="highlights-grid">
          <!-- Global SVG Defs for 3D effects -->
          <svg
            style="width: 0; height: 0; position: absolute"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient
                id="grad-primary"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style="stop-color: #5e7ce2" />
                <stop offset="100%" style="stop-color: #333" />
              </linearGradient>
              <linearGradient
                id="grad-highlight"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" style="stop-color: #8ca6ff" />
                <stop offset="100%" style="stop-color: #5e7ce2" />
              </linearGradient>
              <filter
                id="drop-shadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                <feOffset dx="2" dy="4" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          <div class="highlight-card">
            <div class="card-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#drop-shadow)"
              >
                <path
                  d="M24 4L10 18H22L20 44L38 20H24L24 4Z"
                  fill="url(#grad-highlight)"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M24 4L38 20H24L20 44"
                  stroke="rgba(255,255,255,0.5)"
                  stroke-width="1"
                />
              </svg>
            </div>
            <h3>专属 MCP 工具快速定义</h3>
            <p>
              可快速创建属于你域名的 MCP 工具，无需关注 Server 定义或 Transport
              连接，支持接口调用与 DOM 操作。
            </p>
          </div>
          <div class="highlight-card">
            <div class="card-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#drop-shadow)"
              >
                <path
                  d="M26 6L6 26H20V42L40 22H26V6Z"
                  fill="url(#grad-highlight)"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>极低改造成本</h3>
            <p>
              无需改动现有应用，通过插件中的 mcp-servers
              工具即可快速实现应用智能化。
            </p>
          </div>
          <div class="highlight-card">
            <div class="card-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#drop-shadow)"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="16"
                  fill="url(#grad-highlight)"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M24 14V24L30 30"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="24" cy="24" r="6" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>
            <h3>灵活的执行环境配置</h3>
            <p>
              通过 meta.ts 定义运行环境，支持主世界（访问页面 JS）或 Content
              Script 环境。
            </p>
          </div>
          <div class="highlight-card">
            <div class="card-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#drop-shadow)"
              >
                <rect
                  x="8"
                  y="20"
                  width="16"
                  height="16"
                  rx="4"
                  fill="url(#grad-highlight)"
                  stroke="white"
                  stroke-width="2"
                />
                <rect
                  x="24"
                  y="12"
                  width="16"
                  height="16"
                  rx="4"
                  fill="rgba(94, 124, 226, 0.5)"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M16 28L32 20"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h3>多域名工具协同</h3>
            <p>
              支持组合多个域名的工具协同完成任务，自动打开对应页面，提升操作效率。
            </p>
          </div>
          <div class="highlight-card">
            <div class="card-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#drop-shadow)"
              >
                <path
                  d="M24 10C14 10 8 16 8 24C8 32 14 38 24 38C34 38 40 32 40 24C40 16 34 10 24 10Z"
                  fill="url(#grad-highlight)"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M16 22C16 22 18 20 24 20C30 20 32 22 32 22"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle cx="18" cy="28" r="2" fill="white" />
                <circle cx="30" cy="28" r="2" fill="white" />
              </svg>
            </div>
            <h3>内置智能功能</h3>
            <p>
              类比 Chrome DevTools
              MCP，自动识别网页无障碍信息并规划路径，开箱即用。
            </p>
          </div>
          <div class="highlight-card">
            <div class="card-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#drop-shadow)"
              >
                <rect
                  x="6"
                  y="14"
                  width="36"
                  height="20"
                  rx="6"
                  fill="url(#grad-highlight)"
                  stroke="white"
                  stroke-width="2"
                />
                <circle cx="16" cy="24" r="4" fill="rgba(255,255,255,0.4)" />
                <circle cx="32" cy="22" r="2" fill="white" />
                <circle cx="36" cy="26" r="2" fill="white" />
              </svg>
            </div>
            <h3>远程操控支持</h3>
            <p>
              支持远程控制，通过识别码或链接在 codeMate、Cursor
              等智能体中跨设备协同。
            </p>
          </div>
          <div class="highlight-card">
            <div class="card-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#drop-shadow)"
              >
                <path
                  d="M40 12H8C5.79 12 4 13.79 4 16V32C4 34.21 5.79 36 8 36H40C42.21 36 44 34.21 44 32V16C44 13.79 42.21 12 40 12Z"
                  fill="url(#grad-highlight)"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M12 24H36"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle cx="12" cy="24" r="2" fill="white" />
                <circle cx="24" cy="24" r="2" fill="white" />
                <circle cx="36" cy="24" r="2" fill="white" />
              </svg>
            </div>
            <h3>极速与 AI 互动反馈</h3>
            <p>集成生成式 UI，可快速将必要信息反馈给 AI，提升协作效率。</p>
          </div>
          <div class="highlight-card">
            <div class="card-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="url(#drop-shadow)"
              >
                <path
                  d="M35 19C35 12.9249 30.0751 8 24 8C18.8687 8 14.5671 11.5222 13.3321 16.2849C9.76124 16.8926 7 20.0631 7 24C7 28.4183 10.5817 32 15 32H33C37.4183 32 41 28.4183 41 24C41 21.3654 39.7282 19.0253 37.7477 17.5765"
                  fill="url(#grad-highlight)"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>快速接入云端工具</h3>
            <p>可集成云端 MCP 能力与 Web 端 MCP 工具，协同完成复杂需求。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature 1: MCP 工具集成 -->
    <section
      class="feature-section bg-tech-1"
      :style="{ backgroundImage: `url(${featureBgWhite1})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title">MCP 工具集成</h2>
          <p class="feature-desc">
            基于 Model Context Protocol 实现工具调用。<br />
            为特定网站注册自定义 MCP 工具。<br />
            AI 助手可通过扩展与网页深度交互。
          </p>
        </div>
        <div class="feature-visual">
          <img :src="aiextMcpToolsNew" alt="MCP 工具" class="floating-img" />
        </div>
      </div>
    </section>

    <!-- Feature 2: User Scripts API -->
    <section
      class="feature-section bg-tech-2 reverse"
      :style="{ backgroundImage: `url(${featureBgWhite2})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title">User Scripts API</h2>
          <p class="feature-desc">
            支持 Chrome 120+ 的 User Scripts API。<br />
            在页面主世界（Main World）中执行脚本。<br />
            访问页面完整的 JavaScript 环境和全局变量。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="aiextUserscriptsNew"
            alt="User Scripts"
            class="floating-img delay-1"
          />
        </div>
      </div>
    </section>

    <!-- Feature 3: 简单易用 -->
    <section
      class="feature-section bg-tech-1"
      :style="{ backgroundImage: `url(${featureBgWhite1})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title">简单易用</h2>
          <p class="feature-desc">
            下载 ZIP 文件即可本地安装。<br />
            无需通过浏览器插件市场。<br />
            开发者模式加载,快速上手使用。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="aiextInstallNew"
            alt="简单安装"
            class="floating-img delay-2"
          />
        </div>
      </div>
    </section>

    <!-- Feature 4: 工具开发 -->
    <section
      class="feature-section bg-tech-2 reverse"
      :style="{ backgroundImage: `url(${featureBgWhite2})` }"
    >
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title">灵活的工具开发</h2>
          <p class="feature-desc">
            支持 pageMcpServer 和 contentScriptMcpServer 两种类型。<br />
            使用 Zod 定义参数验证规则。<br />
            完善的 meta.ts 配置和工具注册机制。
          </p>
        </div>
        <div class="feature-visual">
          <img
            :src="aiextDevelopmentNew"
            alt="工具开发"
            class="floating-img delay-3"
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section
      class="footer-section"
      :style="{ backgroundImage: `url(${mcpBgWhite})` }"
    >
      <div class="footer-content">
        <h2>准备好让浏览器更智能了吗？</h2>
        <p>立即下载并安装 AI Extension</p>
        <div class="cta-group">
          <a href="https://ai.opentiny.design/extension.zip" class="btn primary"
            >下载扩展</a
          >
          <a
            href="/src/ai-extension-next-wxt.md"
            target="_blank"
            class="btn secondary"
            >开发文档</a
          >
        </div>
        <div class="footer-mini">
          <p>AI Extension - 让 AI 与网页无缝交互</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--bg-color);
  scroll-behavior: smooth;
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Hero Section */
.hero {
  height: 80vh; /* Not full screen */
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  padding: 20px;
  animation: fadeInUp 1s ease-out;
}

.title {
  font-size: 80px;
  font-weight: 800;
  margin-bottom: 24px;
  background: linear-gradient(120deg, #333 30%, #5e7ce2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 32px;
  margin-bottom: 48px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Highlights Section */
.highlights-section {
  padding: 100px 0;
  background: #fff;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.highlight-card {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.highlight-card:hover {
  transform: translateY(-5px);
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-color: rgba(94, 124, 226, 0.2);
}

.card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
}

.card-icon svg {
  width: 100%;
  height: 100%;
}

.highlight-card h3 {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.highlight-card p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Feature Sections */
.feature-section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.bg-tech-1 {
  background-size: cover;
}

.bg-tech-2 {
  background-size: cover;
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

.reverse .feature-content {
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

.text-center {
  text-align: center;
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
  border-radius: 24px; /* Increased rounded corners */
  transition: transform 0.3s ease;
}

.floating-img:hover {
  transform: scale(1.02);
}

/* Footer */
.footer-section {
  padding: 100px 0 40px;
  background-size: cover;
  text-align: center;
  position: relative;
}

.footer-content h2 {
  font-size: 40px;
  margin-bottom: 20px;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-content p {
  font-size: 19px;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.footer-mini {
  margin-top: 80px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.footer-mini p {
  font-size: 14px;
  margin: 0;
}

/* Buttons */
.cta-group {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 14px 40px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn.primary {
  background: var(--primary-gradient);
  color: white;
  box-shadow: 0 8px 20px rgba(94, 124, 226, 0.3);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(94, 124, 226, 0.4);
}

.btn.secondary {
  background: white;
  color: var(--primary-color);
  border: 1px solid rgba(94, 124, 226, 0.3);
}

.btn.secondary:hover {
  transform: translateY(-2px);
  border-color: var(--primary-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

/* Responsive */
@media (max-width: 1200px) {
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .highlights-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-content {
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
    gap: 40px;
  }

  .reverse .feature-content {
    flex-direction: column;
  }

  .feature-text {
    padding: 0;
  }

  .feature-visual {
    width: 100%;
    margin-top: 0;
  }

  .section-title {
    font-size: 40px;
  }

  .feature-desc {
    font-size: 19px;
  }

  .cta-group {
    flex-direction: column;
    gap: 15px;
  }

  .btn {
    width: 100%;
    padding: 12px 0;
  }

  .hero-content {
    padding: 20px;
  }
}
</style>
