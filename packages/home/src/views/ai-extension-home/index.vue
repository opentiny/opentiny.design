<script setup>
// 导入图片资源
import aiextMcpToolsNew from "@/assets/images/home/aiext_mcp_tools_new.png";
import aiextUserscriptsNew from "@/assets/images/home/aiext_userscripts_new.png";
import aiextInstallNew from "@/assets/images/home/aiext_install_new.png";
import aiextDevelopmentNew from "@/assets/images/home/aiext_development_new.png";
import { onMounted, onUnmounted, nextTick } from "vue";
import HeroSection from "./components/HeroSection.vue";
import HighlightsSection from "./components/HighlightsSection.vue";
import FeatureSection from "./components/FeatureSection.vue";

// Feature 配置数据
const features = [
  {
    title: "MCP 工具集成",
    description: `基于 Model Context Protocol 实现工具调用。<br />为特定网站注册自定义 MCP 工具。<br />AI 助手可通过扩展与网页深度交互。`,
    imageSrc: aiextMcpToolsNew,
    imageAlt: "MCP 工具",
    reverse: false,
    bgClass: "bg-tech-1",
  },
  {
    title: "User Scripts API",
    description: `支持 Chrome 120+ 的 User Scripts API。<br />在页面主世界（Main World）中执行脚本。<br />访问页面完整的 JavaScript 环境和全局变量。`,
    imageSrc: aiextUserscriptsNew,
    imageAlt: "User Scripts",
    reverse: true,
    bgClass: "bg-tech-2",
    delayClass: "delay-1",
  },
  {
    title: "简单易用",
    description: `下载 ZIP 文件即可本地安装。<br />无需通过浏览器插件市场。<br />开发者模式加载,快速上手使用。`,
    imageSrc: aiextInstallNew,
    imageAlt: "简单安装",
    reverse: false,
    bgClass: "bg-tech-1",
    delayClass: "delay-2",
  },
  {
    title: "灵活的工具开发",
    description: `支持 pageMcpServer 和 contentScriptMcpServer 两种类型。<br />使用 Zod 定义参数验证规则。<br />完善的 meta.ts 配置和工具注册机制。`,
    imageSrc: aiextDevelopmentNew,
    imageAlt: "工具开发",
    reverse: true,
    bgClass: "bg-tech-2",
    delayClass: "delay-3",
  },
];

// 进入视口触发 fade-in-up 动效
let fadeObserver;

const initFadeInUp = async (elementRefs) => {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (!("IntersectionObserver" in window)) return;

  await nextTick();

  // 等待 DOM 完全渲染
  await new Promise((resolve) => setTimeout(resolve, 150));

  // 收集所有需要观察的元素（去重）
  const elementsToObserve = new Set();

  // 从 refs 收集
  if (Array.isArray(elementRefs)) {
    elementRefs.forEach((el) => {
      if (el && el instanceof Element) {
        elementsToObserve.add(el);
      }
    });
  } else if (elementRefs && elementRefs instanceof Element) {
    elementsToObserve.add(elementRefs);
  }

  // 如果 refs 为空，从 DOM 中查找所有 .fade-in-up 元素
  if (elementsToObserve.size === 0) {
    const targets = Array.from(document.querySelectorAll(".fade-in-up"));
    targets.forEach((el) => {
      if (el instanceof Element) {
        elementsToObserve.add(el);
      }
    });
  }

  if (elementsToObserve.size === 0) return;

  // 如果没有创建 observer，则创建
  if (!fadeObserver) {
    fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else if (entry.intersectionRatio === 0) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.1, // 元素出现 10% 就触发
        rootMargin: "0px 0px -50px 0px", // 提前 50px 触发，让动效更自然
      }
    );
  }

  // 检查并观察所有元素
  elementsToObserve.forEach((el) => {
    if (el && el instanceof Element) {
      // 如果元素已经在视口中，立即添加 is-visible 类
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        el.classList.add("is-visible");
      }
      fadeObserver.observe(el);
    }
  });
};

// 生命周期：监听窗口大小变化
onMounted(async () => {
  // 延迟初始化，确保所有动态内容都已渲染
  await nextTick();
  setTimeout(() => {
    // 从整个容器中查找所有 .fade-in-up 元素
    initFadeInUp(null);
  }, 800);
});

onUnmounted(() => {
  fadeObserver?.disconnect();
  fadeObserver = undefined;
});
</script>

<template>
  <div class="container ai-extension-home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Highlights Section: 核心亮点 -->
    <HighlightsSection />

    <!-- Feature Sections: 循环渲染 -->
    <FeatureSection
      v-for="(feature, index) in features"
      :key="index"
      :feature="feature"
    />
  </div>
</template>

<style scoped lang="less">
@import "./common.less";

.container {
  width: 100%;
  overflow-x: hidden;
  padding: 0;
  background-color: var(--bg-color);
}
</style>
