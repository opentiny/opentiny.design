<script setup>
// 导入图片资源（作为 URL）
import heroBgWhite from "@/assets/images/home/tinyvue-home/web/banner-bg.svg";
import heroBgPc from "@/assets/images/home/tinyvue-home/web/banner-img.svg";
import heroBgMobile from "@/assets/images/home/tinyvue-home/mobile/bannerimg.svg";
import featureCrossPlatform from "@/assets/images/home/tinyvue-home/web/framework.svg";
import configItemImg1 from "@/assets/images/home/tinyvue-home/web/config-component1.svg";
import configItemImg2 from "@/assets/images/home/tinyvue-home/web/config-component2.svg";
import configItemImg3 from "@/assets/images/home/tinyvue-home/web/config-component3.svg";
import themeLeftImg from "@/assets/images/home/tinyvue-home/web/theme1.svg";
import themeRightImg from "@/assets/images/home/tinyvue-home/web/theme2.svg";
import themeLeftImgMobile from "@/assets/images/home/tinyvue-home/mobile/theme1.svg"; // 移动端主题1
import themeRightImgMobile from "@/assets/images/home/tinyvue-home/mobile/theme2.svg"; // 移动端主题2
import ic_1 from "@/assets/images/home/tinyvue-home/web/ic_1.svg";
import ic_2 from "@/assets/images/home/tinyvue-home/web/ic_2.svg";
import ic_3 from "@/assets/images/home/tinyvue-home/web/ic_3.svg";
import ic_4 from "@/assets/images/home/tinyvue-home/web/ic_4.svg";
import icPhone from "@/assets/images/home/tinyvue-home/web/ic_mobilephone.svg"; // 移动端图标1 手机
import icWindow from "@/assets/images/home/tinyvue-home/web/ic_tv.svg";
import iconShare from "@/assets/tech/icon-share.svg";
import mcpBg from "@/assets/images/home/tinyvue-home/web/welcome.webp";
// 手机端静态资源
import mcpBgMobile from "@/assets/images/home/tinyvue-home/mobile/welcome.webp";
import { ref, reactive, onMounted, onUnmounted, computed, nextTick, watch } from "vue";
import {
  TinyButton,
  TinySlider,
  TinySteps,
  TinyAlert,
  TinyAnchor,
  TinyCheckbox,
  TinyDatePanel,
  TinyInput,
  TinyTreeMenu,
  TinySearch,
  TinyRow,
  TinyLink,
  TinyCarousel,
  TinyCarouselItem,
} from "@opentiny/vue";

import { IconSearch, IconArrowRight } from "@opentiny/vue-icon";
import {
  iconDeleteL,
  iconYes,
  iconEditor,
  iconMail,
  iconStarO,
  iconSearch,
  iconFilletExternalLink,
} from "@opentiny/vue-icon";

const TinyIconFilletExternalLink = iconFilletExternalLink();
const TinyIconDeleteL = iconDeleteL();
const TinyIconYes = iconYes();
const TinyIconEditor = iconEditor();
const TinyIconMail = iconMail();
const TinyIconStarO = iconStarO();
const TinyIconSearch = iconSearch();
const TinyIconArrowRight = IconArrowRight();

let expandeArr = reactive([301]);
const highlight = ref(301);
const treeData = reactive([
  {
    id: 300,
    label: "TinyVue",
    children: [
      {
        id: 301,
        label: "Button",
      },
      { id: 302, label: "ButtonGroup" },
      { id: 303, label: "Container" },
      { id: 304, label: "Icon" },
      { id: 305, label: "Layout" },
      { id: 306, label: "Link" },
      { id: 307, label: "Divider" },
      { id: 308, label: "VirtualScrollBox" },
    ],
  },
]);

const slidValue = ref(100);
const stepsData = reactive([
  {
    name: "1",
    status: "done",
  },
  { name: "2", status: "doing" },
  { name: "3" },
  { name: "4" },
]);
const active = ref(1);

const anchorData = reactive([
  {
    key: "overview",
    title: "概览",
  },
  {
    key: "pod-list",
    title: "Pod列表",
  },
  {
    key: "lod-list",
    title: "Lod列表",
  },
  {
    key: "access-config",
    title: "访问配置",
  },
  {
    key: "config-pod",
    title: "配置Pod",
  },
  {
    key: "event",
    title: "事件",
  },
  {
    key: "history-version",
    title: "历史版本",
  },
]);

// 跨端跨框架特性数据
const crossPlatformFeatures = reactive([
  {
    title: "一套代码同时支持PC和移动端",
    description:
      "我们支持PC和移动端，同一个组件在不同终端表现不同在多端场景下组件的使用方式完全相同。",
    icon: "/@fs/D:/opentiny.design/packages/common/src/assets/appIcon/tiny-vue.svg",
  },
  {
    title: "一套代码同时支持Vue 2 / Vue 3",
    description:
      "针对Vue2 和 Vue3 实现了相应的版本适配器，抹平Vue2 和 Vue3 的差异，实现了一套代码同时支持Vue2 和 Vue3。",
    icon: "/@fs/D:/opentiny.design/packages/common/src/assets/appIcon/tiny-vue.svg",
  },
]);

// 配置式组件架构数据
const configArchitecture = reactive([
  {
    title: "无渲染层",
    description:
      "包含纯业务逻辑，无 UI 依赖，例如，Button 组件的 handleClick 函数管理点击事件、计时器逻辑和状态变更，不涉及任何 DOM 操作。",
    icon: configItemImg1,
  },
  {
    title: "适配层",
    description:
      "通过抽象框架特定 API 提供 Vue 2/3 兼容性，这使得形同的无渲染逻辑可在不同 Vue 版本上工作，无需重复开发，无需在组件实现中使用条件逻辑。",
    icon: configItemImg2,
  },
  {
    title: "展示层",
    description:
      "包含实际的 UI 模板，有独立的 PC 和移动端变体，例如，Bu tton 组件有独立的 PC 和移动优先 Vue 文件，他们消费相同的无渲染逻辑。",
    icon: configItemImg3,
  },
]);

// 智能化生成式 UI 特性数据
const mcpFeatures = reactive([
  {
    title: "属性驱动式组件",
    description: "通过简单的属性配置即可生成复杂的 UI 组件，降低开发门槛",
    icon: ic_1,
  },
  {
    title: "AI 可识别智能组件",
    description: "组件可被 AI 识别和操作，实现智能化的应用开发体验",
    icon: ic_2,
  },
  {
    title: "轻量化组件，性能强悍",
    description: "优化组件体积和性能，确保应用运行流畅高效",
    icon: ic_3,
  },
  {
    title: "轻松适配多主题",
    description: "灵活的主题系统，支持快速切换和定制企业品牌风格",
    icon: ic_4,
  },
]);

// 响应式屏幕尺寸判断
const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1920);

// 屏幕尺寸断点
const BREAKPOINTS = {
  mobile: 768, // 小屏幕（手机）
  tablet: 1024, // 中屏幕（平板）
  desktop: 1440, // 大屏幕（桌面）
};

// 更新窗口宽度
const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

// 计算属性：判断屏幕尺寸
const isMobile = computed(() => windowWidth.value < BREAKPOINTS.mobile);
const isTablet = computed(
  () => windowWidth.value >= BREAKPOINTS.mobile && windowWidth.value < BREAKPOINTS.tablet
);
const isDesktop = computed(() => windowWidth.value >= BREAKPOINTS.tablet);
const isSmallScreen = computed(() => windowWidth.value < BREAKPOINTS.tablet); // 小屏幕（包含手机和平板）

// 生命周期：监听窗口大小变化
onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", updateWindowWidth);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
});

// 进入视口触发 fade-in-up 动效
let fadeObserver;
let fadeReinitTimer;

const scheduleInitFadeInUp = () => {
  if (typeof window === "undefined") return;
  clearTimeout(fadeReinitTimer);
  fadeReinitTimer = setTimeout(() => {
    initFadeInUp();
  }, 80);
};
const initFadeInUp = async () => {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (!("IntersectionObserver" in window)) return;

  await nextTick();

  const targets = Array.from(document.querySelectorAll(".fade-in-up"));
  if (!targets.length) return;

  fadeObserver?.disconnect();
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

  targets.forEach((el) => {
    // 确保每个元素都被观察，可多次触发
    if (el) fadeObserver.observe(el);
  });
};

onMounted(() => {
  initFadeInUp();
  // 延迟再次初始化，确保所有动态内容都已渲染
  setTimeout(() => {
    initFadeInUp();
  }, 300);
});

onUnmounted(() => {
  clearTimeout(fadeReinitTimer);
  fadeObserver?.disconnect();
  fadeObserver = undefined;
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
  <div class="container">
    <div class="hero section" :style="{ backgroundImage: `url(${heroBgWhite})` }">
      <div class="hero-content">
        <h1 class="title pad-b40">TinyVue 智能组件库</h1>
        <p class="subtitle pad-b40">轻量 高性能 智能化</p>
        <p class="description pad-b40">
          一款支持主流前端框架、AI对话框、MCP Host 和智能体搭建平台
        </p>
        <div class="cta-group">
          <a href="https://opentiny.design/tiny-vue" target="_blank" class="btn primary"
            >立即体验</a
          >
          <a
            href="https://docs.opentiny.design/tiny-vue/guide/introduce.html"
            target="_blank"
            class="btn secondary"
            >产品文档</a
          >
        </div>
      </div>
      <div class="hero-img fade-in-up">
        <img :src="isMobile ? heroBgMobile : heroBgPc" alt="TinyVue 智能组件库" />
      </div>
    </div>

    <!-- Feature 1: 跨端跨框架 -->
    <section class="feature-section section bg-tech-1 pad-t40 content-around">
      <div class="feature-header pad-t40 fade-in-up">
        <h2 class="title feature-title">跨端跨框架</h2>
        <p class="description text-center">
          相同的组件代码可在不同的Vue版本和设备平台上运行，显著降低了企业应用的维护成本，无需重复开发，大幅提升开发效率
        </p>
      </div>
      <div class="feature-content max-w1100 pad-t40 fade-in-up">
        <div
          v-for="(item, index) in crossPlatformFeatures"
          :key="index"
          class="feature-text"
        >
          <div class="title-logo">
            <img data-v-d881ea2c="" class="app-logo" :src="item.icon" />
            <h2 class="title feature-sub-title">{{ item.title }}</h2>
          </div>
          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </div>
      <div class="feature-visual pad-t40 fade-in-up">
        <img :src="featureCrossPlatform" alt="跨端跨框架" class="floating-img" />
      </div>
    </section>

    <!-- Feature 2: 丰富的组件 -->
    <section class="feature-section section bg-tech-2 bg-color-1">
      <div class="feature-header fade-in-up">
        <h2 class="title feature-title">丰富的组件</h2>
        <p class="description">持续更新迭代，满足企业级应用需求。</p>
      </div>
      <div class="flex-row" style="width: 550px; gap: 120px">
        <div class="flex-row-column">
          <div class="title feature-text-title title-number">130+</div>
          <div class="title-logo">
            <img :src="icWindow" width="18" height="18" alt="桌面端组件" />
            <div class="title-logo-text">桌面端组件</div>
          </div>
        </div>
        <div class="flex-row-column">
          <div class="title feature-text-title title-number">30+</div>
          <div class="title-logo">
            <img :src="icPhone" width="18" height="18" alt="移动端组件" />
            <div class="title-logo-text">移动端组件</div>
          </div>
        </div>
      </div>
      <div
        class="feature-content component-demo-container pad-t40 fade-in-up"
        v-if="!isMobile"
      >
        <div class="component-demo component-demo-search">
          <div class="component-demo-title title">DatePicker</div>
          <tiny-input placeholder="YYYY/MM/DD" />
          <tiny-date-panel class="custom-date-panel" />
        </div>
        <div class="component-demo">
          <div class="component-demo-title title">TreeMenu</div>
          <tiny-tree-menu
            class="demo-tree-menu"
            node-key="id"
            :data="treeData"
            :default-expanded-keys="expandeArr"
            :default-expanded-keys-highlight="highlight"
          >
            <template #default="slotScope">
              <a>
                {{ slotScope.data.label }}
              </a>
              <img
                v-if="slotScope.data.label === 'TinyVue'"
                width="11"
                height="11"
                :src="iconShare"
                alt="share"
                class="tree-menu-icon"
              />
            </template>
          </tiny-tree-menu>
        </div>
        <div class="component-demo-search">
          <div class="component-demo">
            <div class="component-demo-title title">Search</div>
            <tiny-search placeholder="Enter a keywords" clearable>
              <template #prefix>
                <tiny-icon-search />
              </template>
            </tiny-search>
          </div>
          <div class="component-demo">
            <div class="component-demo-title title">Button</div>
            <tiny-row>
              <tiny-button type="primary" :icon="TinyIconEditor" circle></tiny-button>
              <tiny-button type="success" :icon="TinyIconYes" circle></tiny-button>
              <tiny-button type="info" :icon="TinyIconMail" circle></tiny-button>
              <tiny-button type="warning" :icon="TinyIconStarO" circle></tiny-button>
              <tiny-button type="danger" :icon="TinyIconDeleteL" circle></tiny-button>
              <tiny-button> Button </tiny-button>
            </tiny-row>
          </div>
          <div class="component-demo">
            <div class="component-demo-title title">Slider</div>
            <tiny-slider
              v-model="slidValue"
              :show-input="true"
              :min="0"
              :max="500"
              :step="100"
              unit="Mbit/s"
            ></tiny-slider>
          </div>
        </div>
        <div class="component-demo-search">
          <div class="component-demo">
            <div class="component-demo-title title">Steps</div>
            <tiny-steps line :data="stepsData" :active="active"></tiny-steps>
          </div>
          <div class="component-demo">
            <div class="component-demo-title title">Alert</div>
            <tiny-row>
              <tiny-alert :closable="false">
                <template #description
                  >文本占位，关键字
                  <tiny-link>
                    <template #icon>
                      <tiny-icon-fillet-external-link
                        class="tiny-svg-link"
                      ></tiny-icon-fillet-external-link>
                    </template>
                    文本链接
                  </tiny-link>
                </template>
              </tiny-alert>
              <tiny-alert type="warning" :closable="false">
                <template #description
                  >安全组触发规则告警<tiny-link type="warning">提示警告文字</tiny-link>
                </template>
              </tiny-alert>
              <tiny-alert type="error" :closable="false">
                <template #description
                  >安全组触发规则告警<tiny-link type="danger">错误、失败类文字</tiny-link>
                </template>
              </tiny-alert>
              <tiny-alert type="success" :closable="false">
                <template #description
                  >文本占位，关键字
                  <tiny-link>
                    <template #icon>
                      <tiny-icon-fillet-external-link
                        class="tiny-svg-link"
                      ></tiny-icon-fillet-external-link>
                    </template>
                    文本链接
                  </tiny-link>
                </template>
              </tiny-alert>
            </tiny-row>
          </div>
        </div>

        <div class="component-demo-search component-demo-anchor">
          <div class="component-demo">
            <div class="component-demo-title title">Anchor</div>
            <tiny-anchor :links="anchorData" type="dot"></tiny-anchor>
          </div>
          <div class="component-demo">
            <div class="component-demo-title title">Checkbox</div>
            <tiny-row>
              <tiny-checkbox :indeterminate="true">全选</tiny-checkbox>
              <tiny-checkbox>选项2</tiny-checkbox>
            </tiny-row>
          </div>
        </div>
      </div>

      <!-- 手机端使用走马灯 -->
      <div class="feature-content pad-t40 fade-in-up" v-else>
        <tiny-carousel
          height="465px"
          arrow="never"
          indicator-position="outside"
          :loop="false"
        >
          <tiny-carousel-item>
            <div class="component-demo component-demo-search fade-in-up">
              <div class="component-demo-title title">DatePicker</div>
              <tiny-input placeholder="YYYY/MM/DD" />
              <tiny-date-panel class="custom-date-panel" />
            </div>
          </tiny-carousel-item>

          <tiny-carousel-item>
            <div class="component-demo fade-in-up">
              <div class="component-demo-title title">TreeMenu</div>
              <tiny-tree-menu
                class="demo-tree-menu"
                node-key="id"
                :data="treeData"
                :default-expanded-keys="expandeArr"
                :default-expanded-keys-highlight="highlight"
              >
                <template #default="slotScope">
                  <a>
                    {{ slotScope.data.label }}
                  </a>
                  <img
                    v-if="slotScope.data.label === 'TinyVue'"
                    width="11"
                    height="11"
                    :src="iconShare"
                    alt="share"
                    class="tree-menu-icon"
                  />
                </template>
              </tiny-tree-menu>
            </div>
          </tiny-carousel-item>

          <tiny-carousel-item>
            <div class="component-demo-search fade-in-up">
              <div class="component-demo">
                <div class="component-demo-title title">Search</div>
                <tiny-search placeholder="Enter a keywords" clearable>
                  <template #prefix>
                    <tiny-icon-search />
                  </template>
                </tiny-search>
              </div>
              <div class="component-demo">
                <div class="component-demo-title title">Button</div>
                <tiny-row>
                  <tiny-button type="primary" :icon="TinyIconEditor" circle></tiny-button>
                  <tiny-button type="success" :icon="TinyIconYes" circle></tiny-button>
                  <tiny-button type="info" :icon="TinyIconMail" circle></tiny-button>
                  <tiny-button type="warning" :icon="TinyIconStarO" circle></tiny-button>
                  <tiny-button type="danger" :icon="TinyIconDeleteL" circle></tiny-button>
                  <tiny-button> Button </tiny-button>
                </tiny-row>
              </div>
              <div class="component-demo">
                <div class="component-demo-title title">Slider</div>
                <tiny-slider
                  v-model="slidValue"
                  :show-input="true"
                  :min="0"
                  :max="500"
                  :step="100"
                  unit="Mbit/s"
                ></tiny-slider>
              </div>
            </div>
          </tiny-carousel-item>

          <tiny-carousel-item>
            <div class="component-demo-search fade-in-up">
              <div class="component-demo">
                <div class="component-demo-title title">Steps</div>
                <tiny-steps line :data="stepsData" :active="active"></tiny-steps>
              </div>
              <div class="component-demo">
                <div class="component-demo-title title">Alert</div>
                <tiny-row>
                  <tiny-alert :closable="false">
                    <template #description
                      >文本占位，关键字
                      <tiny-link>
                        <template #icon>
                          <tiny-icon-fillet-external-link
                            class="tiny-svg-link"
                          ></tiny-icon-fillet-external-link>
                        </template>
                        文本链接
                      </tiny-link>
                    </template>
                  </tiny-alert>
                  <tiny-alert type="warning" :closable="false">
                    <template #description
                      >安全组触发规则告警<tiny-link type="warning"
                        >提示警告文字</tiny-link
                      >
                    </template>
                  </tiny-alert>
                  <tiny-alert type="error" :closable="false">
                    <template #description
                      >安全组触发规则告警<tiny-link type="danger"
                        >错误、失败类文字</tiny-link
                      >
                    </template>
                  </tiny-alert>
                  <tiny-alert type="success" :closable="false">
                    <template #description
                      >文本占位，关键字
                      <tiny-link>
                        <template #icon>
                          <tiny-icon-fillet-external-link
                            class="tiny-svg-link"
                          ></tiny-icon-fillet-external-link>
                        </template>
                        文本链接
                      </tiny-link>
                    </template>
                  </tiny-alert>
                </tiny-row>
              </div>
            </div>
          </tiny-carousel-item>

          <tiny-carousel-item>
            <div class="component-demo-search component-demo-anchor fade-in-up">
              <div class="component-demo">
                <div class="component-demo-title title">Anchor</div>
                <tiny-anchor :links="anchorData" type="dot"></tiny-anchor>
              </div>
              <div class="component-demo">
                <div class="component-demo-title title">Checkbox</div>
                <tiny-row>
                  <tiny-checkbox :indeterminate="true">全选</tiny-checkbox>
                  <tiny-checkbox>选项2</tiny-checkbox>
                </tiny-row>
              </div>
            </div>
          </tiny-carousel-item>
        </tiny-carousel>
      </div>
    </section>

    <!-- Feature 3: 配置式组件 -->
    <section class="feature-section section bg-tech-1 min-h75">
      <div class="feature-header pad-t40 fade-in-up">
        <h2 class="title feature-title">配置式组件</h2>
        <p class="description">
          支持模板式和配置式两种使用方式， 配置式组件让复杂场景的开发更简单高效。
        </p>
      </div>
      <div class="feature-content pad-t40 fade-in-up">
        <div class="flex-row gap-30 config-content">
          <div
            v-for="(item, index) in configArchitecture"
            :key="index"
            class="flex-row flex-row-column gap-30 config-item"
          >
            <img :src="item.icon" :alt="item.title" />
            <div class="title feature-sub-title pad-0-30 pad-t40">{{ item.title }}</div>
            <div class="description feature-text-description pad-0-30">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature 4: 强大的主题定制 -->
    <section class="feature-section section bg-tech-2 bg-color-1">
      <div class="feature-header fade-in-up">
        <h2 class="title feature-title">强大的主题定制</h2>
        <p class="description">
          支持灵活的主题配置和定制能力。轻松适配企业品牌风格，打造独特视觉体验。
        </p>
      </div>
      <div class="feature-content pad-t40 content-center fade-in-up">
        <div class="feature-visual">
          <img
            :src="isMobile ? themeLeftImgMobile : themeLeftImg"
            alt="主题定制"
            class="theme-item-img theme-left"
          />
        </div>
        <div class="feature-visual">
          <img
            :src="isMobile ? themeRightImgMobile : themeRightImg"
            alt="主题定制"
            class="theme-item-img"
          />
        </div>
      </div>
    </section>

    <!-- MCP Section -->
    <section class="mcp-section section">
      <div class="feature-header pad-t40 fade-in-up">
        <h2 class="title feature-title">智能化生成式 UI</h2>
        <p class="description">
          全新升级的 TinyVue，引入 AI 智能化能力，让组件开发更智能、更高效
        </p>
      </div>
      <div class="mcp-content fade-in-up">
        <div class="feature-grid">
          <div v-for="(item, index) in mcpFeatures" :key="index" class="feature-card">
            <div class="feature-icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div
        class="mcp-image bg-tech-2 pad-t40"
        :style="{ backgroundImage: `url(${isMobile ? mcpBgMobile : mcpBg})` }"
      >
        <div v-if="isMobile" class="title pad-t40">
          一款基于 MCP 协议 <br />的前端智能组件库
        </div>
        <div v-else class="title pad-t40">一款基于 MCP 协议的前端智能组件库</div>
        <div class="mcp-desc description">让你的Web 随心所动 无需手动</div>

        <div class="mcp-button">
          <a href="https://opentiny.design/tiny-vue" target="_blank" class="btn primary"
            >即刻体验</a
          >
          <a
            href="https://docs.opentiny.design/tiny-vue/guide/introduce.html"
            target="_blank"
            class="btn secondary"
            >阅读文档 <TinyIconArrowRight
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  overflow-x: hidden;
  background-color: var(--bg-color);
}

.pad-0-30 {
  padding-left: 30px;
  padding-right: 30px;
}

.pad-b40 {
  padding-bottom: 40px !important;
}

.section {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mcp-image {
  width: 100%;
  max-width: 1400px;
  padding-left: 90px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 345px;
  background-repeat: no-repeat;

  .title {
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 2px;
    line-height: 1.2;
    padding-bottom: 20px;
  }
  .mcp-desc {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.7);
  }
  .mcp-button {
    display: flex;
    gap: 20px;

    .btn {
      padding: 10px 25px;
      border: none;
      background: transparent;
      color: #fff;
      box-shadow: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .primary {
      background: transparent;
      color: white;
      border: 1px solid;
      box-shadow: 0 10px 25px rgba(94, 124, 226, 0.3);
    }

    svg {
      fill: #fff;
    }
  }
}

.min-h75 {
  min-height: 75vh;
}

/* Backgrounds */
.hero {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.gap-30 {
  gap: 30px;
}

.content-around {
  justify-content: space-around;
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
  justify-content: space-around;
}

/* Hide underline for MCP title */
.mcp-section .section-title.light::after {
  display: none;
}

.mcp-content {
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  padding: 20px;
  padding-top: 0;
  animation: fadeInUp 1s ease-out;
}

.title {
  font-size: 50px;
  font-weight: 700;
  color: #191919;
  letter-spacing: 5px;
  line-height: 1.2;
  padding-bottom: 20px;
}

.title-number {
  font-size: 44px;
  font-weight: 600;
  color: #1476ff;
  letter-spacing: 2px;
  line-height: 1.2;
  padding-bottom: 20px;
}

.title-logo-text {
  font-size: 16px;
  color: #808080;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 44px;
  padding-bottom: 20px;
  line-height: 1.5;
  background: linear-gradient(90deg, #cb43a8 10%, #2c5fef 50%);
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: 5px;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.description {
  font-size: 20px;
  padding-bottom: 30px;
  line-height: 2;
  color: #a0a0a0;
  letter-spacing: 3px;
  font-weight: 400;
}

.cta-group {
  display: flex;
  gap: 30px;
}

.btn {
  padding: 16px 40px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.btn.primary {
  background: #191919;
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
  color: #191919;
  border: 1px solid #191919;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.btn.secondary:hover {
  background: white;
  transform: translateY(-3px);
  border-color: #191919;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.animal-div {
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  animation: float-aa9c5f72 6s ease-in-out infinite;
  transition: transform 0.5s ease;
  border-radius: 24px;
}

.component-demo-search {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 346px;
  flex: 1;
}

.component-demo-anchor {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 186px;
}

.component-demo {
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  flex: 1;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }

  .tiny-tree-menu:before {
    border-right: none;
  }

  :deep(.tiny-alert__description) {
    display: flex;
    gap: 3px;
    min-width: 242px;
  }

  :deep(.tiny-steps-line) {
    .tiny-steps-block .title {
      display: none;
    }
    .tiny-steps-block.not-vertical {
      min-width: 70px;
    }
  }
}
.component-demo-title {
  font-size: 20px;
  font-weight: 600;
  color: #191919;
  letter-spacing: 2px;
  line-height: 1.2;
  padding-bottom: 20px;
}

.tree-menu-icon {
  margin-left: 5px;
}

.custom-date-panel {
  display: block !important;
  width: 100%;
  box-shadow: none;
}

.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-row-column {
  flex-direction: column;
}

.config-item {
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  align-items: baseline;
  gap: 20px;
  border-radius: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
  .description {
    color: #808080;
    font-size: 14px;
    line-height: 2;
    letter-spacing: 2px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }

  .title {
    font-size: 24px;
  }
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
  height: 100%;
}

.max-w1100 {
  max-width: 1100px;
}

.component-demo-container {
  display: flex;
  align-items: stretch;
  gap: 20px;
  justify-content: center;
}

.pad-t40 {
  padding-top: 40px !important;
}

.feature-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
}

.feature-title {
  font-size: 36px;
}

.title-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 20px;
}

.feature-sub-title {
  font-size: 20px;
  letter-spacing: 2px;
  padding-bottom: 0;
}

.reverse .feature-content {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
  color: var(--text-primary);
  padding: 0 30px;

  .description {
    font-size: 16px;
    letter-spacing: 2px;
    color: #808080;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-img {
  width: 90%;
  max-width: 1000px;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  animation: float 6s ease-in-out infinite;
  transition: transform 0.5s ease;
  border-radius: 20px; /* Add rounded corners */
}

.floating-img:hover {
  transform: scale(1.05);
}

.theme-item-img {
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.theme-left {
  margin-right: 40px;
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
.tiny-carousel__item.is-animating {
  border-radius: 20px;
}
.tiny-carousel {
  width: 100%;
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

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  width: 100%;
}

.feature-card {
  background: #f7f9fc;
  border-radius: 16px;
  padding: 40px 30px;
  text-align: left;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  border-color: rgba(94, 124, 226, 0.3);
}

.feature-card h3 {
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 30px;
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

.bg-color-1 {
  background: #f7fbfe;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
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

/* 动效：左右穿梭（来回漂移） */
@keyframes shuttleX {
  0% {
    transform: translate3d(-10px, 0, 0);
  }
  50% {
    transform: translate3d(10px, 0, 0);
  }
  100% {
    transform: translate3d(-10px, 0, 0);
  }
}

@keyframes shuttleXReverse {
  0% {
    transform: translate3d(10px, 0, 0);
  }
  50% {
    transform: translate3d(-10px, 0, 0);
  }
  100% {
    transform: translate3d(10px, 0, 0);
  }
}

.text-center {
  text-align: center;
}

.content-center {
  justify-content: center;
}

/* ==================== 响应式适配 ==================== */

/* 中等屏幕 (1024px - 1440px) - 小桌面 */
@media (max-width: 1440px) {
  * {
    zoom: 0.9;
  }
}

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

  .title {
    font-size: 24px;
    letter-spacing: 3px;
  }

  .subtitle {
    font-size: 32px;
    letter-spacing: 3px;
  }

  .description {
    font-size: 16px;
  }

  .feature-content {
    flex-direction: row;
    padding: 0 30px;
    gap: 25px;
  }

  .max-w1100 {
    max-width: 100%;
  }

  .feature-text {
    padding: 0;
    margin-bottom: 30px;
  }

  .feature-visual {
    width: 100%;
  }

  .floating-img {
    max-width: 800px;
  }

  .feature-title {
    font-size: 30px;
  }

  .feature-grid {
    gap: 25px;
  }

  .component-demo-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 20px;
    align-items: stretch;
    padding: 20px;
  }

  // 第一行第1列：DatePicker (component-demo component-demo-search)
  .component-demo-container > .component-demo.component-demo-search:first-child {
    grid-row: 1;
    grid-column: 1;
  }

  // 第一行第2列：TreeMenu (component-demo，但不是 component-demo-search)
  .component-demo-container > .component-demo:nth-child(2):not(.component-demo-search) {
    grid-row: 1;
    grid-column: 2;
  }

  // 第一行第3列：Search/Button/Slider (component-demo-search，但不是 component-demo-anchor)
  .component-demo-container
    > .component-demo-search:nth-child(3):not(.component-demo-anchor) {
    grid-row: 1;
    grid-column: 3;
  }

  // 第二行第1列：Steps/Alert (component-demo-search，但不是 component-demo-anchor)
  .component-demo-container
    > .component-demo-search:nth-child(4):not(.component-demo-anchor) {
    grid-row: 2;
    grid-column: 1;
  }

  // 第二行第2-3列：Anchor/Checkbox (component-demo-search component-demo-anchor)
  .component-demo-container > .component-demo-search.component-demo-anchor {
    grid-row: 2;
    grid-column: 2 / span 2;
  }

  .component-demo-search {
    min-width: auto;
  }

  .component-demo-anchor {
    max-width: 48%;
  }

  .config-item {
    width: 100%;
  }

  .theme-item-img {
    zoom: 0.7;
  }

  .theme-left {
    margin-right: 0;
    margin-bottom: 30px;
  }

  .mcp-image {
    height: auto;
    min-height: 300px;

    .title {
      font-size: 32px;
    }

    .mcp-desc {
      font-size: 18px;
    }

    .mcp-button {
      flex-wrap: wrap;
    }
  }

  .mcp-content {
    padding: 0 30px;
  }
}

/* 平板竖屏 / 大手机 (768px - 1024px) */
@media (max-width: 768px) {
  * {
    zoom: 1;
  }
  .section {
    min-height: auto;
    padding: 60px 20px;
  }

  .hero {
    padding: 30px 20px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  .hero-content {
    padding: 20px;
  }

  .theme-item-img {
    width: 100%;
  }

  .title {
    font-size: 32px;
    letter-spacing: 2px;
    padding-bottom: 15px;
  }

  .subtitle {
    font-size: 26px;
    letter-spacing: 2px;
    padding-bottom: 15px;
  }

  .description {
    padding-bottom: 20px;
  }

  .cta-group {
    gap: 15px;
    width: 100%;
    justify-content: center;
  }

  .btn {
    padding: 14px 30px;
    font-size: 14px;
  }

  .feature-header {
    padding-top: 20px;
  }

  .feature-title {
    font-size: 28px;
  }

  .feature-sub-title {
    font-size: 18px;
    padding-bottom: 0px;
  }
  .title-logo {
    justify-content: center;
  }
  .feature-content {
    padding: 0;
    gap: 10px;
    flex-direction: column;
  }

  .feature-text {
    margin-bottom: 20px;
    text-align: center;
  }

  .floating-img {
    max-width: 100%;
  }

  .feature-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 30px;
  }

  .feature-card:hover {
    transform: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .feature-card h3 {
    font-size: 18px;
    margin-top: 20px;
  }

  .feature-card p {
    font-size: 14px;
  }

  .component-demo {
    padding: 20px 15px;
    align-items: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    &:hover {
      transform: none;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .component-demo-anchor {
    max-width: 100%;
    text-align: center;
  }

  .component-demo-title {
    font-size: 18px;
  }

  .config-content {
    flex-direction: column;
  }

  .config-item {
    .title {
      font-size: 20px;
    }
  }

  .title-number {
    font-size: 36px;
  }

  .title-logo-text {
    font-size: 14px;
  }

  .mcp-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 540px;
    padding-left: 0;
    margin-top: 40px;

    .title {
      font-size: 24px;
      padding-top: 20px;
      line-height: 2;
      text-align: center;
    }

    .mcp-desc {
      font-size: 16px;
    }

    .mcp-button {
      padding-top: 30px;
    }
  }

  .mcp-content {
    padding: 0;
  }

  .pad-b40 {
    padding-bottom: 30px !important;
  }

  .min-h75 {
    min-height: auto;
  }
}

/* 小手机 (< 480px) */
@media (max-width: 480px) {
  .section {
    padding: 40px 15px;
  }

  .hero {
    padding: 20px 15px;
  }

  .title {
    font-size: 28px;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 22px;
    letter-spacing: 1px;
  }

  .feature-title {
    font-size: 24px;
  }

  .component-demo-title {
    font-size: 18px;
  }

  .component-demo-anchor {
    max-width: 100%;
    text-align: center;
  }

  .feature-sub-title {
    font-size: 16px;
  }

  .btn {
    padding: 12px 25px;
  }

  .feature-content {
    padding: 0 15px;
  }

  .component-demo-container {
    gap: 15px;
  }

  .component-demo {
    padding: 15px 12px;
    align-items: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    &:hover {
      transform: none;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .mcp-image {
    padding-left: 0;

    .title {
      font-size: 20px;
      padding-left: 10px;
      line-height: 2;
      text-align: center;
    }

    .mcp-desc {
      padding-left: 10px;
      font-size: 14px;
    }

    .mcp-button {
      padding-left: 10px;
    }
  }

  .gap-30 {
    gap: 20px;
  }

  .title-logo {
    flex-wrap: wrap;
    gap: 5px;
  }
}
</style>
