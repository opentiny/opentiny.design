<template>
  <div
    ref="homeRef"
    class="home"
    :class="{ 'is-fade-enabled': fadeEnabled }"
    :style="homeStyle"
  >
    <FirstScreen />
    <TechnicalCore />
    <ProductMatrix />
    <DemoCard />
    <Cli />
  </div>
</template>
<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import FirstScreen from './components/FirstScreen.vue'
import TechnicalCore from './components/TechnicalCore.vue'
import ProductMatrix from './components/ProductMatrix.vue'
import DemoCard from './components/DemoCard.vue'
import Cli from './components/Cli.vue'

const homeRef = ref()
const fadeEnabled = ref(false)
const desktopScale = ref(1)
let fadeObserver

const homeStyle = computed(() => ({
  '--desktop-scale': desktopScale.value
}))

const updateDesktopScale = () => {
  if (typeof window === 'undefined') return

  desktopScale.value = window.innerWidth >= 1024 ? Math.min(window.innerWidth / 1920, 1) : 1
}

const initFadeInUp = async () => {
  if (typeof window === 'undefined' || !homeRef.value) return

  await nextTick()

  const home = homeRef.value
  const sections = home.querySelectorAll('.fade-in-up')

  if (!sections.length || !('IntersectionObserver' in window)) {
    fadeEnabled.value = false
    return
  }

  try {
    fadeObserver?.disconnect()
    fadeEnabled.value = true
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      section.classList.toggle('is-visible', isVisible)
    })

    fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else if (entry.intersectionRatio === 0) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    sections.forEach((section) => {
      fadeObserver?.observe(section)
    })
  } catch {
    fadeObserver?.disconnect()
    fadeObserver = undefined
    fadeEnabled.value = false
  }
}

onMounted(() => {
  updateDesktopScale()
  window.addEventListener('resize', updateDesktopScale)
  initFadeInUp()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDesktopScale)
  fadeObserver?.disconnect()
  fadeObserver = undefined
  fadeEnabled.value = false
})
</script>
<style lang="less" scoped>
.home {
  --max-width: 1440px;
  --mobile-width: calc(100% - 40px);
  --desktop-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  :deep(.fade-in-up) {
    opacity: 1;
    transform: translateY(0);
  }

  &.is-fade-enabled {
    :deep(.fade-in-up) {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    :deep(.fade-in-up.is-visible) {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
@media (min-width: 1024px) {
  .home {
    :deep(.first-screen .first-screen-wrap),
    :deep(.technical-core),
    :deep(.product-matrix .product-matrix-container),
    :deep(.demo-card),
    :deep(.cli .cli-inner) {
      width: var(--max-width);
      max-width: var(--max-width);
      zoom: var(--desktop-scale);
    }
  }
}
@media (max-width: 1023px) {
  .home {
    :deep(.first-screen) {
      .first-screen-wrap {
        width: 100%;
        max-width: var(--mobile-width);
      }
    }
    :deep(.technical-core) {
      width: 100%;
      max-width: var(--mobile-width);
      min-width: 0;
    }
    :deep(.product-matrix) {
      .product-matrix-container {
        width: 100%;
        max-width: var(--mobile-width);
        min-width: 0;
      }
    }
    :deep(.demo-card) {
      width: 100%;
      max-width: var(--mobile-width);
      min-width: 0;
    }
    :deep(.cli) {
      .cli-inner {
        width: 100%;
        max-width: var(--mobile-width);
        min-width: 0;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .home {
    --mobile-width: min(calc(100% - 80px), 920px);
  }
}
</style>
