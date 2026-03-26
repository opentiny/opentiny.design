<script lang="jsx" setup>
import { onMounted,ref } from 'vue'
import { ConfigProvider } from '@opentiny/vue'
import designSmbConfig from '@opentiny/vue-design-smb'
import hljs from 'highlight.js/lib/core'
// 示例中代码高亮
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import html from 'highlight.js/lib/languages/xml'

import { findParent, getRoutePath } from './tools'
import { router } from './router'

import { TinyRemoter } from '@opentiny/next-remoter'
import '@opentiny/next-remoter/dist/style.css'
import { createMcpServer, clientTransport } from './mcp-servers'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', html)

const jumpByRouter = (event) => {
  const isRouterDom = (parent) => {
    const { tagName, href, target } = parent
    if (tagName?.toLowerCase() === 'a' && href?.startsWith?.(location.origin) && target !== '_blank') {
      const routerPath = getRoutePath(href)
      if (routerPath) {
        event.preventDefault()
        router.push(routerPath)
        return true
      }
    }
    return false
  }
  if (!isRouterDom(event.target)) {
    findParent(event.target, isRouterDom)
  }
}

const show = ref(false)
// 加载 skills 目录下所有文件（SKILL.md + 所有参考资料）
const skillMdModules = import.meta.glob('./skills/**/*', {
  query: '?raw',
  import: 'default',
  eager: true
})  

// 将本地 MCP Server 注册到 TinyRemoter
const mcpServers = {
  'my-mcp-server': {
    type: 'local',
    transport: clientTransport
  }
}


onMounted(() => {
  document.querySelector('#header').addEventListener('click', jumpByRouter, true)
})

onMounted(async () => {
  await createMcpServer()
})

</script>

<template>
  <div class="hp100">
    <config-provider :design="designSmbConfig" class="hp100">
      <router-view />
          <!-- AI 对话面板 -->
    <TinyRemoter
      :show="show"
      :skills="skillMdModules"
      :mcpServers="mcpServers"
      mode="remoter"
      title="智能助手"
      :style="{['--tr-z-index-fixed']:1000, width: '600px'}"
    />
    </config-provider>
  </div>
</template>
