<template>
  <div class="cli">
    <div class="cli-inner">
      <div class="cli-title">{{ info.title }}</div>
      <div class="cli-subtitle">{{ info.subtitle }}</div>
      <div class="cli-card">
        <div v-for="item in info.steps" :key="item.index" class="cli-card-item">
          <div class="cli-card-head">
            <div class="cli-card-badge">
              <span class="cli-card-index">{{ item.index }}</span>
            </div>
            <div class="cli-card-name">{{ item.title }}</div>
          </div>
          <div class="cli-card-desc">{{ item.description }}</div>
        </div>
      </div>
      <div class="cli-init">
        <div class="cli-init-code">
          <ul class="cli-init-list">
            <li v-for="command in info.commands" :key="command">{{ command }}</li>
          </ul>
          <tiny-button type="primary" class="cli-init-copy" round>
            <span>复制</span>
            <svg viewBox="0 0 14 13.9956" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M8.5 2.99567C9.88071 2.99567 11 4.11495 11 5.49567L11 11.4957C11 12.8764 9.88071 13.9957 8.5 13.9957L2.5 13.9957C1.11929 13.9957 0 12.8764 0 11.4957L0 5.49567C0 4.11495 1.11929 2.99567 2.5 2.99567L8.5 2.99567ZM8.5 3.99567L2.5 3.99567C1.67157 3.99567 1 4.66724 1 5.49567L1 11.4957C1 12.3241 1.67157 12.9957 2.5 12.9957L8.5 12.9957C9.32843 12.9957 10 12.3241 10 11.4957L10 5.49567C10 4.66724 9.32843 3.99567 8.5 3.99567ZM11.5 0C12.8807 0 14 1.11929 14 2.5L14 7.5C14 7.77614 13.7761 8 13.5 8C13.2239 8 13 7.77614 13 7.5L13 2.5C13 1.67157 12.3284 1 11.5 1L6.5 1C6.22386 1 6 0.776142 6 0.5C6 0.223858 6.22386 0 6.5 0L11.5 0Z"
                fill="currentColor"
                fill-rule="nonzero"
              />
            </svg>
          </tiny-button>
        </div>
        <div class="cli-init-tip">{{ info.tip }}</div>
        <a class="cli-init-link" :href="info.docUrl" target="_blank" rel="noopener noreferrer">{{ info.docText }}</a>
      </div>
      <div class="cli-init-link-container">
        <a class="cli-init-link-text" :href="info.docUrl" target="_blank" rel="noopener noreferrer">{{ info.docLinkText }}</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Message, TinyButton } from '@opentiny/vue'

const info = {
  title: '快速开始',
  subtitle: '请先安装Node.js、npm和TinyCLI,仅三部，在自己的机器上跑起来',
  steps: [
    { index: 1, title: '安装 TinyCLI', description: '按 OpenTiny 文档安装，终端可执行 tiny。' },
    { index: 2, title: '初始化项目', description: 'tiny init pro。选择 Vue、后端（NestJS / Spring Boot / 暂不配置）和构建工具。' },
    { index: 3, title: '启动前端', description: '前端目录 npm i 与 npm start。打开 http://localhost:3031/，admin / admin。' }
  ],
  commands: ['tiny init pro', 'cd web', 'npm i', 'npm start'],
  tip: '参与本仓库开发请用pnpm i && pnpm dev,目标目录为template/tinyvue',
  docText: '完整联通需要 MySQL和 Redis',
  docUrl: 'https://docs.opentiny.design/tiny-pro/guide/quick-start.html',
  docLinkText: '查看完整步骤',
  docLinkUrl: 'https://docs.opentiny.design/tiny-pro/guide/front-end-guide.html'
}

const copyCommands = () => {
  const textarea = document.createElement('textarea')
  textarea.value = info.commands.join('\n')
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-9999px'
  textarea.style.left = '-9999px'
  textarea.style.opacity = '0'
  textarea.style.pointerEvents = 'none'

  try {
    document.body.appendChild(textarea)
    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    const copied = document.execCommand('copy')
    if (copied) {
      Message.message({ message: '复制成功', status: 'success' })
    }
  } finally {
    document.body.removeChild(textarea)
  }
}
</script>
<style lang="less" scoped>
.cli {
  background: #f7f8fa;
  .cli-inner {
    margin: 0 auto;
    padding: 40px 0 120px;
  }
  .cli-title {
    font-size: 36px;
    line-height: 64px;
    text-align: center;
    font-weight: 700;
    color: #191919;
  }
  .cli-subtitle {
    font-size: 18px;
    line-height: 28px;
    margin-top: 16px;
    text-align: center;
    color: #808080;
  }
  .cli-card {
    display: flex;
    gap: 24px;
    margin-top: 60px;
    .cli-card-item {
      flex: 1;
      width: 0;
      height: 160px;
      box-sizing: border-box;
      padding: 16px 24px;
      border-radius: 16px;
      background: #fff;
      border: 1px solid #f0f0f0;
      .cli-card-head {
        display: flex;
        align-items: center;
        gap: 12px;
        background: linear-gradient(90deg, rgba(132, 132, 132, 0.2), rgba(140, 140, 140, 0.05));
        border-radius: 100px;
      }
      .cli-card-badge {
        width: 52px;
        height: 52px;
        flex-shrink: 0;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .cli-card-index {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        line-height: 16px;
        font-weight: 600;
      }
      .cli-card-name {
        color: #191919;
        font-size: 18px;
        line-height: 26px;
        font-weight: 600;
      }
      .cli-card-desc {
        margin-top: 16px;
        color: #595959;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
  .cli-init {
    margin-top: 24px;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    padding: 30px;
    box-sizing: border-box;
    .cli-init-code {
      position: relative;
      width: 100%;
      background: #000;
      border-radius: 12px;
      padding: 24px;
      box-sizing: border-box;
    }
    .cli-init-list {
      margin: 0;
      padding: 0 88px 0 0;
      list-style: none;
      li {
        height: 16px;
        color: #fff;
        font-size: 14px;
        line-height: 16px;
        font-family: Consolas, Monaco, monospace;
        & + li {
          margin-top: 12px;
        }
      }
    }
    .cli-init-copy {
      position: absolute;
      top: 24px;
      right: 24px;
      border: 1px solid #808080;
      background: transparent;
      cursor: pointer;
      color: #808080;
      svg {
        width: 14px;
        height: 14px;
        color: #808080;
      }
      span {
        height: 14px;
        line-height: 14px;
        margin-right: 4px;
      }
    }
    .cli-init-copy:hover {
      border-color: #fff;
      color: #fff;

    }
    .cli-init-copy:hover svg {
      color: #fff;
    }
    .cli-init-tip {
      margin: 16px 0;
      color: #191919;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
    }
    .cli-init-link {
      display: inline-block;
      color: #1476ff;
      font-size: 14px;
      line-height: 22px;
      text-decoration: none;
    }
  }
  .cli-init-link-container {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    width: 100%;
    margin-top: 60px;
    .cli-init-link-text {
      color: #1476ff;
    }
  }
}
@media (max-width: 1023px) {
  .cli {
    .cli-inner {
      padding: 24px 0 48px;
    }
    .cli-title {
      font-size: 22px;
      line-height: 30px;
    }
    .cli-subtitle {
      font-size: 12px;
      line-height: 18px;
      margin-top: 8px;
      padding: 0 8px;
    }
    .cli-card {
      flex-direction: column;
      gap: 16px;
      margin-top: 24px;
      .cli-card-item {
        width: 100%;
        height: auto;
        min-height: 160px;
      }
    }
    .cli-init {
      margin-top: 20px;
      padding: 16px;
      .cli-init-copy {
        top: 12px;
        right: 12px;
      }
      .cli-init-list {
        padding-right: 72px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cli {
    .cli-inner {
      padding: 40px 0 64px;
    }
    .cli-title {
      font-size: 34px;
      line-height: 44px;
    }
    .cli-subtitle {
      font-size: 16px;
      line-height: 24px;
      margin-top: 10px;
    }
    .cli-card {
      flex-direction: row;
      margin-top: 40px;
      .cli-card-item {
        height: 160px;
      }
    }
  }
}
</style>
