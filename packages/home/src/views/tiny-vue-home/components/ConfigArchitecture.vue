<script setup>
import { onMounted, ref, inject, nextTick } from "vue";
// 导入图片资源
import configItemImg1 from "@/assets/images/home/tinyvue-home/web/config-component1.svg";
import configItemImg2 from "@/assets/images/home/tinyvue-home/web/config-component2.svg";
import configItemImg3 from "@/assets/images/home/tinyvue-home/web/config-component3.svg";

// 配置式组件架构数据
const items = [
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
];

// 从父组件注入
const isMobile = inject("isMobile");
</script>

<template>
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
          v-for="(item, index) in items"
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
</template>

<style scoped lang="less">
@import "../common.less";

.tiny-vue-home {
  /* 组件特定样式 */

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

  /* 响应式适配 */
  @media (max-width: 1024px) {
    .config-content {
      flex-wrap: wrap;
    }

    .config-item {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .config-content {
      flex-direction: column;
    }

    .config-item {
      .title {
        font-size: 20px;
      }
    }
  }
}
</style>
