<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, provide, watch } from "vue";
// 导入组件
import HeroSection from "./components/HeroSection.vue";
import CrossPlatformFeature from "./components/CrossPlatformFeature.vue";
import ComponentShowcase from "./components/ComponentShowcase.vue";
import ConfigArchitecture from "./components/ConfigArchitecture.vue";
import ThemeCustomization from "./components/ThemeCustomization.vue";

// 响应式屏幕尺寸判断（统一管理）
const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1920);
const BREAKPOINTS = {
  mobile: 768, // 小屏幕（手机）
  tablet: 1024, // 中屏幕（平板）
  desktop: 1440, // 大屏幕（桌面）
};
const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};
const isMobile = computed(() => windowWidth.value < BREAKPOINTS.mobile);

// 动画处理函数（统一管理）
let fadeObserver;
const observedElements = new Set();
let fadeReinitTimer;

const scheduleInitFadeInUp = () => {
  if (typeof window === "undefined") return;
  clearTimeout(fadeReinitTimer);
  fadeReinitTimer = setTimeout(() => {
    initFadeInUp();
  }, 80);
};

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
    const root = document.querySelector(".tiny-vue-home");
    if (root) {
      const elements = root.querySelectorAll(".fade-in-up");
      elements.forEach((el) => {
        if (el instanceof Element) {
          elementsToObserve.add(el);
        }
      });
    }
  }

  if (elementsToObserve.size === 0) return;

  // 断开之前的观察
  fadeObserver?.disconnect();
  observedElements.clear();

  // 创建新的 observer
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
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

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
      observedElements.add(el);
    }
  });
};

// 通过 provide 提供给子组件
provide("isMobile", isMobile);

onMounted(async () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", updateWindowWidth);
  }

  // 在父组件挂载后，统一初始化所有动画元素
  await nextTick();
  setTimeout(() => {
    // 从整个 .tiny-vue-home 中查找所有 .fade-in-up 元素
    initFadeInUp();
  }, 500);
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
  clearTimeout(fadeReinitTimer);
  fadeObserver?.disconnect();
  fadeObserver = undefined;
  observedElements.clear();
});

// 分辨率变化 / 端切换时，v-if/v-else 会替换 DOM，需要重新 observe 新节点
watch(windowWidth, () => {
  scheduleInitFadeInUp();
});

watch(isMobile, () => {
  scheduleInitFadeInUp();
});
</script>

<template>
  <div class="tiny-vue-home container">
    <HeroSection />

    <CrossPlatformFeature />

    <ComponentShowcase />

    <ConfigArchitecture />

    <ThemeCustomization />
  </div>
</template>

<style lang="less">
@import "./common.less";
</style>
