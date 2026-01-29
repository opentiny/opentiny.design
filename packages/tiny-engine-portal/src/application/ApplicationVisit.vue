<template>
  <iframe class="tiny-engine-iframe" :src="tinyEngineUrl"></iframe>
</template>
<script>
import { TINY_ENGINE_DEFAULT_URL, TINY_ENGINE_DESIGNER_URL } from '../controller/utils'
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const tinyEngineUrl = route.name === 'applicationVisit' ? TINY_ENGINE_DEFAULT_URL : TINY_ENGINE_DESIGNER_URL
    //回调函数
    const openAppNewTab = ( event ) => {
      if(event.data.type === 'openNewTab') {
        const href = window.location.href.split('?')[0]
        const searchParams = event.data.url.split('?')[1]
        window.open(`${href}?${searchParams}`)
      }
    }
    window.addEventListener("message", openAppNewTab, false)

    onMounted(() => {
      const url = new URL(window.location.href)
      const type = url.hash.split('?')[1]
        if (url.hash.includes('id')) {
          const iframe = document.querySelector('iframe')
          iframe.src = `${TINY_ENGINE_DESIGNER_URL}?${type}`
        }
    })

    onUnmounted(() => {
      window.removeEventListener('message', openAppNewTab)
    })
    return {
      tinyEngineUrl
    }
  }
}
</script>
<style lang="less">
.tiny-engine-iframe {
  width: 100%;
  height: 99%;
  border: none;
}
</style>
