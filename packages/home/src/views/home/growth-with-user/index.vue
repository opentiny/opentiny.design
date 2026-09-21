<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import { TinyButton, TinyCarousel, TinyCarouselItem } from '@opentiny/vue'

import { USERS_DATA } from './config.js'
import useWindowSize from '@/tools/useWindowSize.js'
import './index.less'

const { isMobile, width } = useWindowSize()
const carouselRef = ref()

const showCarousel = computed(() => isMobile.value || width.value < 1024)

const userList = ref([...USERS_DATA, ...USERS_DATA])

const chunkArr = (arr, size) => {
  if (!arr?.length || size < 1) return []
  const result = []
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    result.push(arr.slice(i * size, (i + 1) * size))
  }
  return result
}

const mobileUserList = computed(() => chunkArr(USERS_DATA, width.value < 600 ? 1 : 1))

const carouselHeight = computed(() => {
  if (width.value < 600) return '180px'
  if (width.value < 820) return '200px'
  return '204px'
})

const leftList = computed(() => {
  const half = userList.value.filter((_, i) => i % 2 === 0)
  return [...half, ...half]
})

const rightList = computed(() => {
  const half = userList.value.filter((_, i) => i % 2 === 1)
  return [...half, ...half]
})

watch([carouselHeight, mobileUserList, showCarousel], () => {
  if (!carouselRef.value) return
  nextTick(() => {
    carouselRef.value?.resize?.()
    carouselRef.value?.resetItemPosition?.()
    carouselRef.value?.updateItems?.()
  })
}, { immediate: true, flush: 'post' })
</script>

<template>
  <div class="home-growth-with-user">
    <div class="growth-with-user-box">
      <div class="user-stat">
        <div class="text-slogen mt16">
          <div>和更多<span class="text-bold text-blue ml16">开发者</span></div>
          <div>一起<span class="text-bold">成长</span></div>
          <div>一起<span class="text-bold">创造价值</span></div>
        </div>
        <div class="flex-box">
          <div>
            <div class="text-blue text-num">300+</div>
            <div class="text-desc">贡献者</div>
          </div>
          <div>
            <div class="text-blue text-num">100W+</div>
            <div class="text-desc">总下载量</div>
          </div>
        </div>
        <a href="/tiny-vue">
          <tiny-button v-if="!isMobile" type="primary" size="medium">{{ $t('home.tryBtn') }}</tiny-button>
        </a>
      </div>
      <div v-if="!isMobile" class="user-list-box">
        <div class="user-list-comma">“</div>
        <div class="user-list-card-box">
          <div class="user-list">
            <div class="user-column">
              <div class="user-card" v-for="(user, index) in leftList" :key="`left-${user.name}-${index}`">
                <div class="user-card-header">
                  <span class="user-name">{{ user.name }}</span>
                  <span class="user-location">{{ $t('home.from') }}{{ user.location }}</span>
                </div>
                <div class="user-comments">{{ user.comments }}</div>
              </div>
            </div>
            <div class="user-column">
              <div class="user-card" v-for="(user, index) in rightList" :key="`right-${user.name}-${index}`">
                <div class="user-card-header">
                  <span class="user-name">{{ user.name }}</span>
                  <span class="user-location">{{ $t('home.from') }}{{ user.location }}</span>
                </div>
                <div class="user-comments">{{ user.comments }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tiny-carousel
      v-if="showCarousel"
      ref="carouselRef"
      :height="carouselHeight"
      :aspect-ratio="false"
      arrow="never"
      indicator-position="outside"
      autoplay
    >
      <tiny-carousel-item class="carousel-item-demo" v-for="(list, index) in mobileUserList" :key="index">
        <template #default>
          <div class="card-container">
            <div class="user-card" v-for="(user, userIdx) in list" :key="`${user.name}-${userIdx}`">
              <div class="user-comments">
                <div class="user-comments-inner">
                  {{ user.comments }}
                </div>
              </div>
              <div class="user-card-bottom">
                <span class="user-name">{{ user.name }}</span>
                <span class="user-location">{{ $t('home.from') }}{{ user.location }}</span>
              </div>
            </div>
          </div>
        </template>
      </tiny-carousel-item>
    </tiny-carousel>
  </div>
</template>