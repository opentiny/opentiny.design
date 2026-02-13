<script setup>
import { onMounted, ref, inject, nextTick } from "vue";
// 导入图片资源
import featureCrossPlatform from "@/assets/images/home/tinyvue-home/web/framework.svg";

// 跨端跨框架特性数据
const features = [
  {
    title: "一套代码同时支持PC和移动端",
    description:
      "我们支持PC和移动端，同一个组件在不同终端表现不同在多端场景下组件的使用方式完全相同。",
  },
  {
    title: "一套代码同时支持Vue 2 / Vue 3",
    description:
      "针对Vue2 和 Vue3 实现了相应的版本适配器，抹平Vue2 和 Vue3 的差异，实现了一套代码同时支持Vue2 和 Vue3。",
  },
];

// 从父组件注入
</script>

<template>
  <section class="feature-section section bg-tech-1 pad-t40 content-around">
    <div class="feature-header pad-t40 fade-in-up">
      <h2 class="title feature-title">跨端跨框架</h2>
      <p class="description text-center">
        相同的组件代码可在不同的Vue版本和设备平台上运行，显著降低了企业应用的维护成本，无需重复开发，大幅提升开发效率
      </p>
    </div>
    <div class="feature-content max-w1100 pad-t40 fade-in-up">
      <div v-for="(item, index) in features" :key="index" class="feature-text">
        <div class="title-logo">
          <h2 class="title feature-sub-title">{{ item.title }}</h2>
        </div>
        <p class="description">{{ item.description }}</p>
      </div>
    </div>
    <div class="feature-visual pad-t40 fade-in-up">
      <img :src="featureCrossPlatform" alt="跨端跨框架" class="floating-img" />
    </div>
  </section>
</template>

<style scoped lang="less">
@import "../common.less";

.tiny-vue-home {
  .max-w1100 {
    max-width: 1100px;
  }

  /* 响应式适配 */
  @media (max-width: 1024px) {
    .max-w1100 {
      max-width: 100%;
    }

    .feature-content {
      flex-direction: row;
      padding: 0 30px;
      gap: 25px;
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
  }

  @media (max-width: 768px) {
    .feature-content {
      padding: 0;
      gap: 10px;
      flex-direction: column;
    }

    .title-logo {
      text-align: center;
      justify-content: center;
    }

    .feature-text {
      margin-bottom: 20px;
      text-align: center;
    }

    .floating-img {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .feature-content {
      padding: 0 15px;
    }

    .description {
      font-size: 14px;
      letter-spacing: 0px;
    }
  }
}
</style>
