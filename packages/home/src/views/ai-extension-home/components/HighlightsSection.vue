<script setup>
import ic_1 from "@/assets/images/home/tinyvue-home/web/ic_1.svg";
import ic_2 from "@/assets/images/home/tinyvue-home/web/ic_2.svg";
import ic_3 from "@/assets/images/home/tinyvue-home/web/ic_3.svg";
import ic_4 from "@/assets/images/home/tinyvue-home/web/ic_4.svg";
// 核心亮点数据
const highlights = [
  {
    icon: ic_1,
    title: "专属 MCP 工具快速定义",
    description:
      "可快速创建属于你域名的 MCP 工具，无需关注 Server 定义或 Transport 连接，支持接口调用与 DOM 操作。",
  },
  {
    icon: ic_2,
    title: "极低改造成本",
    description:
      "无需改动现有应用，通过插件中的 mcp-servers 工具即可快速实现应用智能化。",
  },
  {
    icon: ic_3,
    title: "灵活的执行环境配置",
    description:
      "通过 meta.ts 定义运行环境，支持主世界（访问页面 JS）或 Content Script 环境。",
  },
  {
    icon: ic_4,
    title: "多域名工具协同",
    description: "支持组合多个域名的工具协同完成任务，自动打开对应页面，提升操作效率。",
  },
  {
    icon: ic_1,
    title: "内置智能功能",
    description: "类比 Chrome DevTools MCP，自动识别网页无障碍信息并规划路径，开箱即用。",
  },
  {
    icon: ic_2,
    title: "远程操控支持",
    description:
      "支持远程控制，通过识别码或链接在 codeMate、Cursor 等智能体中跨设备协同。",
  },
  {
    icon: ic_3,
    title: "极速与 AI 互动反馈",
    description: "集成生成式 UI，可快速将必要信息反馈给 AI，提升协作效率。",
  },
  {
    icon: ic_4,
    title: "快速接入云端工具",
    description: "可集成云端 MCP 能力与 Web 端 MCP 工具，协同完成复杂需求。",
  },
];
</script>

<template>
  <section class="highlights-section section fade-in-up">
    <div class="section-container">
      <h2 class="section-title text-center feature-title">核心亮点</h2>
      <div class="highlights-grid">
        <div
          v-for="(highlight, index) in highlights"
          :key="index"
          class="highlight-card fade-in-up"
        >
          <div class="card-icon">
            <img :src="highlight.icon" alt="highlight icon" />
          </div>
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@import "../common.less";

.highlights-section {
  padding: 100px 0;
  background: #fff;
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-title {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 50px;
  color: var(--text-primary);
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
}

.card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
}

.card-icon img {
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

/* ==================== 响应式适配 ==================== */

@media (max-width: 1200px) {
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .highlights-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-container {
    padding: 0 20px;
  }
}
</style>
