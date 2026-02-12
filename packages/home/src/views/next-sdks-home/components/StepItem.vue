<template>
  <div v-if="step" :id="stepId" class="step-item" :class="{ 'step-active': isActive }">
    <div class="step-header">
      <h2 class="title feature-sub-title">
        <div class="step-index">{{ stepIndex + 1 }}</div>
        <div class="step-title">{{ step.title }}</div>
      </h2>
    </div>
    <div class="step-content">
      <div class="step-description" v-html="step.content"></div>
      <template v-if="step.codeBlocks && step.codeBlocks.length > 0">
        <div
          v-for="(codeBlock, codeIndex) in step.codeBlocks"
          :key="codeIndex"
          class="code-block-wrapper"
        >
          <pre
            class="code-content"
            :class="`language-${codeBlock.lang}`"
          ><code :class="`language-${codeBlock.lang}`" v-html="codeBlock.highlightedCode"></code></pre>
          <tiny-tooltip
            :content="copiedStates ? '已复制' : ''"
            placement="top"
            :visible="copiedStates"
            effect="light"
          >
            <TinyIconCopySolid
              class="copy-button"
              :data-copy-btn="`${stepIndex}-${codeIndex}`"
              @click="copyCode(codeBlock.code, stepIndex, codeIndex)"
            />
          </tiny-tooltip>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  ref,
  reactive,
  computed,
  onMounted,
  nextTick,
  watch,
} from "vue";
import { IconCopySolid } from "@opentiny/vue-icon";
import { TinyTooltip } from "@opentiny/vue";
import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
// 导入语言支持
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";

const TinyIconCopySolid = IconCopySolid();

const props = defineProps({
  markdownContent: {
    type: String,
    required: true,
  },
  stepIndex: {
    type: Number,
    required: true,
  },
  stepId: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

watch(props.isActive, (newVal) => {
  console.log(newVal);
  if (newVal) {
    step.value = parseMarkdown();
    nextTick(() => {
      if (typeof window !== "undefined" && window.Prism) {
        window.Prism.highlightAll();
      }
    });
  }
});

// 解析 markdown 内容：按 ### 分割，提取对应步骤
const parseMarkdown = () => {
  const raw = (props.markdownContent || "").trim();
  if (!raw) return null;

  // 按 ### 分割，但保留标题
  const parts = raw.split(/^### /m).filter((s) => s.trim());

  // 根据 stepIndex 获取对应的步骤内容
  const section = parts[props.stepIndex];
  if (!section) return null;

  const sectionContent = section.trim();
  const lines = sectionContent.split("\n");
  const title = lines[0].trim();
  let body = lines.slice(1).join("\n");

  const codeBlocks = [];

  // 仅处理第一个代码块：```lang\n ... \n```
  const fenceStart = body.indexOf("```");
  if (fenceStart !== -1) {
    const langLineEnd = body.indexOf("\n", fenceStart + 3);
    const fenceHeader = body.slice(fenceStart + 3, langLineEnd).trim();
    // 简单判断语言：首个和最后一个步骤是 bash，其余默认为 ts
    const lang =
      fenceHeader ||
      (props.stepIndex === 0 || props.stepIndex === 3 ? "bash" : "typescript");

    const fenceEnd = body.indexOf("```", langLineEnd + 1);
    if (fenceEnd !== -1) {
      const code = body.slice(langLineEnd + 1, fenceEnd).trim();
      if (code) {
        try {
          const language = Prism.languages[lang] || Prism.languages.markup || {};
          const highlightedCode = Prism.highlight(code, language, lang);
          codeBlocks.push({ lang, code, highlightedCode });
        } catch {
          const escapedCode = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
          codeBlocks.push({ lang, code, highlightedCode: escapedCode });
        }
      }
      // 去掉代码块部分，保留其余内容用于 markdown 渲染
      body = body.slice(0, fenceStart) + body.slice(fenceEnd + 3);
    }
  }

  const processedContent = body.trim();
  const htmlContent = processedContent ? marked.parse(processedContent) : "";

  return {
    title,
    content: htmlContent,
    codeBlocks,
  };
};

const step = ref(parseMarkdown());

// 跟踪每个代码块的复制状态
const copiedStates = ref(false);

// 监听 markdownContent 或 stepIndex 变化，重新解析
watch([() => props.markdownContent, () => props.stepIndex], () => {
  step.value = parseMarkdown();
  nextTick(() => {
    if (typeof window !== "undefined" && window.Prism) {
      window.Prism.highlightAll();
    }
  });
});

// 重新高亮代码（当内容变化时）
onMounted(async () => {
  await nextTick();
  if (typeof window !== "undefined" && window.Prism) {
    window.Prism.highlightAll();
  }
});

// 复制代码功能
const copyCode = async (code, index, codeIndex) => {
  try {
    const key = `${index}-${codeIndex}`;
    if (navigator.clipboard && navigator.permissions) {
      await navigator.clipboard.writeText(code);
    } else {
      // 降级方案：使用传统方法
      const textArea = document.createElement("textarea");
      textArea.value = code;
      textArea.style.width = "0";
      textArea.style.position = "fixed";
      textArea.style.left = "-999px";
      textArea.style.top = "10px";
      textArea.setAttribute("readonly", "readonly");
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    // 显示复制成功提示
    copiedStates.value = true;
    setTimeout(() => {
      copiedStates.value = false;
    }, 2000);
  } catch (err) {
    console.error("复制失败:", err);
  }
};
</script>

<style scoped lang="less">
.step-item {
  position: relative;
  background: #fff;
  padding: 20px 30px 30px 30px;
  scroll-margin-top: 120px;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  margin-left: -2px;

  &:last-child {
    margin-bottom: 0;
  }

  &.step-active {
    border-left: 4px solid #1476ff;
    margin-left: -2px;
    .step-index {
      background: #1476ff;
    }
    .step-title {
      color: #1476ff;
    }
  }
}

.step-header {
  margin-bottom: 20px;

  .feature-sub-title {
    display: flex;
    position: relative;
    gap: 20px;
    font-size: 24px;
    font-weight: 600;
    color: #191919;
    margin: 0;
  }

  .step-index {
    position: absolute;
    margin-right: 20px;
    width: 24px;
    background: #514f4f;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 24px;
  }

  .step-title {
    line-height: 24px;
    margin-left: 44px;
  }
}

.step-content {
  padding-left: 44px;
  .step-description {
    font-size: 16px;
    line-height: 1.8;
    color: #808080;
    margin-bottom: 20px;

    :deep(p) {
      word-break: break-all;
    }

    :deep(strong) {
      color: #191919;
      font-weight: 600;
    }

    :deep(a) {
      color: #1476ff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.code-block-wrapper {
  position: relative;
  margin-top: 4px;
  border-radius: 8px;
  overflow: hidden;
  background: #f7f9fc;
  border: 1px solid #e1e8ed;
}

.copy-button {
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
  font-size: 18px;
  fill: #808080;
  border-radius: 4px;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    fill: #1476ff;
  }
}

.code-content {
  margin: 0;
  padding: 20px;
  color: #e2e8f0;
  overflow-x: auto;
  font-size: 16px;
  line-height: 1.6;
  background: #f5f5f5;

  :deep(code) {
    background: transparent;
    padding: 0;
  }

  :deep(.token) {
    font-family: "Fira Code", "Consolas", "Monaco", monospace;
  }
}

@media (max-width: 768px) {
  .step-item {
    padding: 20px 15px;
  }
  .step-header {
    margin-bottom: 4px;
  }

  .step-title {
    font-size: 16px;
  }

  .step-content {
    .step-description {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  .step-header .feature-sub-title {
    font-size: 14px;
  }

  .code-content {
    font-size: 12px;
    padding: 12px;
  }

  .code-header {
    padding: 8px 12px;
  }
}
</style>
