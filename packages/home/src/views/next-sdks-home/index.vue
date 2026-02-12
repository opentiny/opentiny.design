<script setup>
// 导入图片资源
import heroBgWhite from "@/assets/images/home/next-sdk-home/banner-bg.svg";
import heroBgPc from "@/assets/images/home/next-sdk-home/banner-img.svg";
import nextsdkMcpProtocol from "@/assets/images/home/next-sdk-home/mcp.svg";
import nextsdkRemoter from "@/assets/images/home/next-sdk-home/remoter.svg";
import { ref, computed, onMounted, onUnmounted, nextTick, provide } from "vue";
import nextSdkMd from "./next-sdk.md?raw";
import StepItem from "./components/StepItem.vue";
import FeatureSection from "./components/FeatureSection.vue";

// 计算步骤总数（用于生成步骤 ID 和循环）
const getStepsCount = () => {
  const parts = nextSdkMd.split(/^### /m).filter((s) => s.trim());
  return parts.length;
};

const totalSteps = getStepsCount();

// 生成步骤数组（仅用于 ID 和索引）
const steps = ref(
  Array.from({ length: totalSteps }, (_, index) => ({
    id: `step-${index + 1}`,
    index,
  }))
);

// 当前激活的步骤索引
const activeStepIndex = ref(0);

// Feature 配置数据
const features = [
  {
    title: "基于 MCP 协议",
    description: `支持 WebMcpServer 和 WebMcpClient 双向通信。<br />可被各类 MCP Host 操控，实现 AI 与应用的深度集成。<br />支持工具注册、资源管理和提示词模板。`,
    buttonText: "了解详情",
    buttonLink: "https://docs.opentiny.design/next-sdk/guide/api-client.html",
    imageSrc: nextsdkMcpProtocol,
    imageAlt: "MCP 协议",
    reverse: false,
    bgClass: "bg-tech-2",
    backgroundImage: heroBgWhite,
  },
  {
    title: "TinyRemoter 遥控器",
    description: `提供网页版 AI 对话框，支持 PC 和移动端。<br />通过对话方式让 AI 代替你操作前端应用。<br />手机扫码即可远程控制，提升任务完成效率。`,
    buttonText: "了解详情",
    buttonLink: "https://docs.opentiny.design/next-sdk/guide/tiny-robot-remoter.html",
    imageSrc: nextsdkRemoter,
    imageAlt: "TinyRemoter 遥控器",
    reverse: true,
    bgClass: "bg-tech-1",
    backgroundImage: heroBgWhite,
  },
];

// 滚动到指定步骤
const scrollToStep = (index) => {
  if (index < 0 || index >= steps.value.length) return;
  const step = steps.value[index];
  if (step) {
    const element = document.getElementById(step.id);
    if (element) {
      const offsetTop = element.offsetTop - 120; // 留出顶部空间
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      activeStepIndex.value = index;
    }
  }
};

// 使用 IntersectionObserver 监听步骤元素的可见性
let stepObserver = null;

const initStepObserver = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (!("IntersectionObserver" in window)) return;

  // 清除旧的观察器
  if (stepObserver) {
    stepObserver.disconnect();
  }

  // 创建观察器，检测步骤元素在视口中的可见性
  stepObserver = new IntersectionObserver(
    (entries) => {
      const triggerOffset = 200; // 触发偏移量
      let currentActive = 0;
      let maxVisibleRatio = 0;

      // 遍历所有步骤，找到在视口中可见度最高的步骤
      for (let i = 0; i < steps.value.length; i++) {
        const step = steps.value[i];
        const element = document.getElementById(step.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;

        // 计算元素在视口中的可见部分
        const visibleTop = Math.max(0, elementTop);
        const visibleBottom = Math.min(viewportHeight, elementBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleRatio = elementHeight > 0 ? visibleHeight / elementHeight : 0;

        // 如果元素的顶部在触发偏移范围内，且元素在视口中可见
        if (elementTop <= triggerOffset && elementBottom > 0) {
          // 如果这个元素可见度更高，选择它
          if (visibleRatio > maxVisibleRatio) {
            maxVisibleRatio = visibleRatio;
            currentActive = i;
          }
        }
      }

      // 如果没找到，从后往前查找最后一个在视口上方的步骤
      if (maxVisibleRatio === 0) {
        for (let i = steps.value.length - 1; i >= 0; i--) {
          const step = steps.value[i];
          const element = document.getElementById(step.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= triggerOffset) {
              currentActive = i;
              break;
            }
          }
        }
      }

      if (activeStepIndex.value !== currentActive) {
        activeStepIndex.value = currentActive;
      }
    },
    {
      root: null, // 使用视口作为根
      rootMargin: "0px", // 不使用 rootMargin，手动计算更精确
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], // 多个阈值，更精确地检测
    }
  );

  // 观察所有步骤元素
  nextTick(() => {
    steps.value.forEach((step) => {
      const element = document.getElementById(step.id);
      if (element) {
        stepObserver.observe(element);
      }
    });
  });
};

// 响应式屏幕尺寸判断
const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1920);

// 更新窗口宽度
const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

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
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", updateWindowWidth);
  }
  // 延迟初始化，确保所有动态内容都已渲染
  await nextTick();
  setTimeout(() => {
    // 从整个容器中查找所有 .fade-in-up 元素
    initFadeInUp(null);
    // 初始化步骤观察器（确保 DOM 已渲染）
    initStepObserver();
  }, 800);
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
  if (stepObserver) {
    stepObserver.disconnect();
    stepObserver = null;
  }
  fadeObserver?.disconnect();
  fadeObserver = undefined;
});
</script>

<template>
  <div class="container">
    <!-- Hero Section: 头部布局与 tiny-vue 一致 -->
    <div class="hero section" :style="{ backgroundImage: `url(${heroBgWhite})` }">
      <div class="hero-content">
        <h1 class="title pad-b40">NEXT-SDKs <br />前端智能应用开发工具包</h1>
        <p class="subtitle pad-b40">让你的前端应用变成智能应用</p>
        <p class="description pad-b40">
          只需四步，即可接入 AI 能力，让应用智能化开发更简单高效
        </p>
        <div class="cta-group">
          <a
            href="https://docs.opentiny.design/next-sdk/guide/"
            target="_blank"
            class="btn primary"
            >快速开始</a
          >
          <a
            href="https://docs.opentiny.design/next-sdk/guide/api-client.html"
            target="_blank"
            class="btn secondary"
            >API 文档</a
          >
        </div>
      </div>
      <div class="hero-img">
        <img :src="heroBgPc" alt="NEXT-SDKs" />
      </div>
    </div>

    <!-- Feature 1: 安装步骤 -->
    <section class="feature-section section bg-tech-1 pad-t40 content-around fade-in-up">
      <div class="feature-header pad-t40">
        <h2 class="title feature-title">轻松 4 步 让应用智能化</h2>
        <p class="description text-center">
          使用 OpenTiny NEXT-NEXT-SDKs，只需要以下四步，就可以把你的前端应用变成智能应用。
        </p>
      </div>
      <div class="steps-wrapper mar-t40">
        <StepItem
          v-for="(step, index) in steps"
          :key="index"
          :markdown-content="nextSdkMd"
          :step-index="index"
          :step-id="step.id"
          :total-steps="totalSteps"
          :is-active="activeStepIndex === index"
        />
      </div>
      <div class="step-link">
        <a
          href="https://docs.opentiny.design/next-sdk/guide/"
          target="_blank"
          class="btn secondary"
          >阅读使用文档</a
        >
      </div>
    </section>

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

.step-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  padding-top: 20px;
}

/* Hero Section 特有样式 */
.hero {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Hero Content */
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
  animation: fadeInUp 1s ease-out;

  img {
    max-width: 1000px;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
    border-radius: 20px;
  }
}

.cta-group {
  display: flex;
  gap: 30px;
}

/* Feature Sections 特有样式 */
.feature-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  animation: fadeInUp 1s ease-out;
}

.max-w1100 {
  max-width: 1100px;
}

/* Steps Wrapper */
.steps-wrapper {
  display: flex;
  width: 100%;
  max-width: 1200px;
  position: relative;
  flex-direction: column;
  border-left: 1px solid #e1e8ed;
}

/* ==================== 响应式适配（index.vue 特有） ==================== */

/* 平板横屏 (1024px - 1440px) */
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

  .max-w1100 {
    max-width: 100%;
  }

  .steps-container {
    max-width: 100%;
  }
}

/* 平板竖屏 / 大手机 (768px - 1024px) */
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

  .cta-group {
    gap: 15px;
    width: 100%;
    justify-content: center;
  }

  .feature-header {
    padding-top: 20px;
  }

  .steps-container {
    padding: 0 10px;
    max-width: 100%;
  }
}

/* 小手机 (< 480px) */
@media (max-width: 480px) {
  .hero {
    padding: 20px 15px;
  }
}
</style>
