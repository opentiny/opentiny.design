<script setup>
import { onMounted, ref, reactive, inject, nextTick } from "vue";
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
import {
  iconDeleteL,
  iconYes,
  iconEditor,
  iconMail,
  iconStarO,
  iconSearch,
  iconFilletExternalLink,
} from "@opentiny/vue-icon";
// 导入图片资源
import icPhone from "@/assets/images/home/tinyvue-home/web/ic_mobilephone.svg";
import icWindow from "@/assets/images/home/tinyvue-home/web/ic_tv.svg";
import iconShare from "@/assets/images/home/tinyvue-home/web/icon-share.svg";

const TinyIconFilletExternalLink = iconFilletExternalLink();
const TinyIconDeleteL = iconDeleteL();
const TinyIconYes = iconYes();
const TinyIconEditor = iconEditor();
const TinyIconMail = iconMail();
const TinyIconStarO = iconStarO();
const TinyIconSearch = iconSearch();

// 从父组件注入
const isMobile = inject("isMobile");

// 组件数据
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
</script>

<template>
  <section class="feature-section section bg-tech-2 bg-color-1">
    <div class="feature-header fade-in-up">
      <h2 class="title feature-title">丰富的组件</h2>
      <p class="description">持续更新迭代，满足企业级应用需求。</p>
    </div>
    <div
      class="flex-row"
      :style="{ width: isMobile ? '100%' : '550px', gap: isMobile ? '20px' : '120px' }"
    >
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
                    >安全组触发规则告警<tiny-link type="warning">提示警告文字</tiny-link>
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
</template>

<style scoped lang="less">
@import "../common.less";

.tiny-vue-home {
  .component-demo-container {
    display: flex;
    align-items: stretch;
    gap: 20px;
    justify-content: center;
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

  .tiny-carousel {
    width: 100%;
  }

  /* 响应式适配 */
  @media (max-width: 1024px) {
    .component-demo-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto;
      gap: 20px;
      align-items: stretch;
      padding: 20px;
    }

    .component-demo-container > .component-demo.component-demo-search:first-child {
      grid-row: 1;
      grid-column: 1;
    }

    .component-demo-container > .component-demo:nth-child(2):not(.component-demo-search) {
      grid-row: 1;
      grid-column: 2;
    }

    .component-demo-container
      > .component-demo-search:nth-child(3):not(.component-demo-anchor) {
      grid-row: 1;
      grid-column: 3;
    }

    .component-demo-container
      > .component-demo-search:nth-child(4):not(.component-demo-anchor) {
      grid-row: 2;
      grid-column: 1;
    }

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
  }

  @media (max-width: 768px) {
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
  }

  @media (max-width: 480px) {
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

    .component-demo-title {
      font-size: 18px;
    }
  }
}
</style>
