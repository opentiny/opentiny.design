<template>
  <div class="home-slogan">
    <tiny-carousel :height="isMobile ? '200px' : '550px'" arrow="never" :interval="4000" autoplay>
      <tiny-carousel-item class="carousel-item-demo" @click="onDocs">
        <div
          class="banner-item-wrap home-slogan-top-wrap"
          :style="{ background: `no-repeat center/cover url(${firstBannerData.bg})` }"
        >
          <div class="home-slogan-top">
            <img class="home-title-svg" :src="$pub('images/home-title.svg')" loading="lazy"/>
            <div class="home-title">{{ firstBannerData.title }}</div>
            <div class="home-title-description" >
              {{ firstBannerData.descriptionA1 }}
            </div>
            <div class="home-title-description1">
              {{ firstBannerData.descriptionA2 }}
            </div>
            <div class="home-title-buttons" v-if="!isMobile">
              <tiny-button size="medium" type="primary" class="link-button" @click.stop="onDocs">
                开发文档 <img class="home-title-arrow-icon" :src="$pub('images/home/slogan/arrow.svg')" />
              </tiny-button>
              <tiny-button ghost size="medium" class="link-button" @click.stop="handleExperience">
                立即体验 <img class="home-title-arrow-icon" :src="$pub('images/home/slogan/arrow-black.svg')" />
              </tiny-button>
            </div>
          </div>
        </div>
      </tiny-carousel-item>
      <tiny-carousel-item v-for="(item, idx) in bannerListData" :key="item.title">
        <div
          class="banner-item-wrap"
          :style="{ background: `no-repeat center/cover url(${item.bg})` }"
          @click="onLearnMore(item.link)"
        >
          <div class="banner-item">
            <div class="banner-item-logo" :class="`banner-item-logo-${idx}`">
              <img :src="item.icon" class="banner-item-logo-icon" loading="lazy"/>
              <div :class="`banner-item-logo-title-${idx}`">{{ item.iconTitle }}</div>
            </div>
            <div class="banner-item-title" :class="`banner-item-title-${idx}`">{{ item.title }}</div>
            <div class="banner-item-description">{{ item.description }}</div>
            <tiny-button v-if="!isMobile" ghost size="medium" class="link-button" @click.stop="onLearnMore(item.link)">
              了解更多
              <img class="home-title-arrow-icon" :src="$pub('images/home/slogan/arrow-black.svg')" />
            </tiny-button>
          </div>
        </div>
      </tiny-carousel-item>
    </tiny-carousel>
    <div class="home-slogan-content">
      <div class="home-video-wrap">
        <div class="home-video-tag">以企业出差场景为例</div>
        <div class="home-video-content">
          <div class="home-video-item">
            <h3>应用智能化改造前</h3>
            <span>
              员工需要在不同终端手动操作来完成流程，比如在移动端填写出差申请，在Web端填写外出公干申请，在桌面端添加日程安排等
            </span>
          </div>
          <div class="home-video-item">
            <h3>应用智能化改造后</h3>
            <span>
              员工只需在统一的AI对话框，通过自然语言让智能体自主规划任务，自动完成不同端的出差申请、外出公干、添加日程等流程
            </span>
          </div>
        </div>
        <div class="home-video">
          <video
            ref="videoRef"
            id="master_control"
            class="video video-player"
            controls
            preload="metadata"
            width="1080"
            :poster="postUrl"
          >
            <source :src="$pub('images/home/slogan/business_trip.mp4')" type="video/mp4" />
          </video>
        </div>

        <tiny-link class="home-video-link" @click="onLinkClick">
          <template #icon>
            <IconArrowRight></IconArrowRight>
          </template>
          查看其他应用智能化改造后提升效率的案例
        </tiny-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TinyButton, TinyLink, TinyCarousel, TinyCarouselItem } from '@opentiny/vue'
import { $pub } from '../../../tools/utils'
import useWindowSize from '@/tools/useWindowSize.js'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { iconArrowRight } from '@opentiny/vue-icon'
import { bannerList, firstBanner } from './config'

const { isMobile } = useWindowSize()

const mobileOrPc = computed(() => isMobile.value ? 'mobile' : 'pc')

const bannerListData = ref(bannerList[mobileOrPc.value])

const firstBannerData = ref(firstBanner[mobileOrPc.value])

const IconArrowRight = iconArrowRight()
const videoRef = ref(null)
const onDocs = () => window.open('https://docs.opentiny.design', '_blank', 'noopener')
const handleExperience = () => window.open('https://ai.opentiny.design/tar/', '_blank', 'noopener')
const postUrl = $pub('images/home/slogan/video_poster.webp')
const onLinkClick = () => window.open('https://www.bilibili.com/video/BV1YnCKBLE4V', '_blank', 'noopener')
const onLearnMore = (link) => window.open(link, '_blank', 'noopener')
onMounted(() => {
  const posterImg = new Image()
  posterImg.src = postUrl
  posterImg.onload = () => {
    videoRef.value.classList.add('video--fade-in')
  }
})

watchEffect(() => {
  bannerListData.value = bannerList[mobileOrPc.value]
  firstBannerData.value = firstBanner[mobileOrPc.value]
  videoRef.value?.classList[isMobile.value ? 'remove' : 'add']('video-player')
})
</script>

<style scoped lang="less">
@import '@/mixin.less';

.home-slogan {
  & > .home-slogan-content {
    .pcPadding(86, 150, 100);
    background: no-repeat bottom/cover url(@/assets/images/home_slogan_bg.webp);
  }
  .home-slogan-top-wrap {
    .home-slogan-top {
      max-width: 1280px;
      width: 100%;
      .home-title {
        .pcRem(font-size, 52);
        font-weight: 600;
        background: linear-gradient(90deg, rgba(203, 67, 168, 1), rgba(44, 95, 239, 1) 56%);
        color: transparent;
        background-clip: text;
      }

      .home-title-svg {
        .pcRem(width, 532);
        padding-bottom: 28px;
      }

      .home-title-description {
        .pcRem(font-size, 24);
        line-height: 32px;
        .pcMargin(20, auto, 10);
        > span {
          color: #1476ff;
        }
      }
      .home-title-description1 {
        color: rgba(128, 128, 128, 1);
        .pcRem(font-size, 18);
        .pcRem(margin-bottom, 32);
        font-weight: 300;
        line-height: 28px;
      }
    }
  }

  .banner-item-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .pcPadding(0, 150);
    .banner-item {
      max-width: 1280px;
      width: 100%;
    }
    .banner-item-logo {
      display: flex;
      align-items: center;
      gap: 16px;
      .pcRem(font-size, 36);
      .pcRem(line-height, 45);
      font-weight: 600;
      .banner-item-logo-title-0,
      .banner-item-logo-title-1 {
        margin-top: -20px;
      }
      .banner-item-logo-title-1 {
        color: transparent;
        background: linear-gradient(236.57deg, rgba(20, 255, 150, 1), rgba(20, 118, 255, 1) 100%), rgba(0, 0, 0, 0.2);
        background-size: 100% 100%;
        background-clip: text;
      }
    }
    .banner-item-title {
      .pcRem(font-size, 60);
      .pcRem(line-height, 70);
      font-weight: 900;
      margin: 45px 0 20px;
    }
    .banner-item-title-0,
    .banner-item-title-1 {
      margin: 20px 0 20px;
    }
    .banner-item-description {
      .pcRem(font-size, 28);
      .pcRem(line-height, 32);
      font-weight: 400;
      color: rgba(89, 89, 89, 1);
      .pcRem(margin-bottom, 28);
    }
  }

  .btn-container {
    cursor: pointer;
  }
  .link-button:hover .home-title-arrow-icon {
    animation: arrow 1s linear infinite;
  }
  @keyframes arrow {
    0% {
      transform: translate(0);
    }

    50% {
      transform: translate(8px);
    }
    100% {
      transform: translate(0);
    }
  }
  .link-button {
    gap: 8px;
  }

  .home-video-wrap {
    max-width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 24.03px;
    .home-video-tag {
      margin-bottom: 10px;
      padding: 6px 18px 6px 18px;
      border-radius: 105px;
      width: fit-content;
      background: rgba(93, 24, 255, 0.1);
      color: rgba(131, 47, 214, 1);
      font-size: 12px;
      line-height: 17px;
    }
    .home-video-content {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      .pcRem(margin-bottom, 20);
      .home-video-item {
        border-radius: 24.03px;
        backdrop-filter: blur(8.8464241027832px);
        background: linear-gradient(229.4deg, rgba(245, 226, 255, 0.3), rgba(229, 239, 255, 0.3) 100%);
        padding: 24px 36px;
        flex: 1;
        h3 {
          font-size: 18px;
          font-weight: 600;
          line-height: 22px;
          .pcRem(margin-bottom, 8);
        }
        span {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
    .home-video {
      .video {
        width: 100%;
        box-sizing: border-box;
        border: 4px solid rgba(25, 25, 25, 0.6);
        border-radius: 40px;
        box-shadow: 0px 11px 38px 0px rgba(129, 154, 188, 0.36);
        background: rgba(255, 255, 255, 0.3);
        opacity: 0;
        /* 初始位置：从容器底部向上偏移 50px */
        transform: translateY(50px);
        /* 动画过渡：1秒时长，缓入缓出 */
        transition: opacity 1s ease-out, transform 1s ease-out;
      }
      /* 封面渐显动画：添加类后触发 */
      .video--fade-in {
        opacity: 1;
        transform: translateY(0); /* 回到原位置 */
      }
    }
    .home-video-link {
      margin: 32px auto 0;
      width: fit-content;
      display: block;
    }
  }

  // /* 默认隐藏所有控件 */
  .video-player::-webkit-media-controls {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* 悬浮时显示控件 */
  .video-player:hover::-webkit-media-controls {
    opacity: 1;
  }

  @media screen and (max-width: @break-point) {
    .home-slogan-top-wrap {
      .home-slogan-top {
        .home-title {
          font-size: 20px;
        }

        .home-title-svg {
          width: 124px;
          padding-bottom: 16px;
        }

        .home-title-description,
        .home-title-description1 {
          font-size: 14px;
          line-height: 20px;
          color: rgba(128, 128, 128, 1);
        }
      }
    }

    .banner-item-wrap {
      .pcPadding(0, 150);

      .banner-item-logo {
        > img {
          width: 40px;
        }
        gap: 2px;
        font-size: 16px;
        line-height: 22px;
        .banner-item-logo-title-0,
        .banner-item-logo-title-1 {
          margin-top: -10px;
        }
      }
      .banner-item-logo-2,
      .banner-item-logo-3 {
        gap: 8px;
        > img {
          width: 20px;
        }
      }
      .banner-item-title {
        font-size: 20px;
        line-height: 28px;
        margin: 12px 0;
      }
      .banner-item-title-0,
      .banner-item-title-1 {
        margin: 4px 0 12px;
      }
      .banner-item-title-3 {
        max-width: 175px;
      }
      .banner-item-description {
        font-size: 14px;
        line-height: 20px;
      }
    }

    .home-video-wrap {
      .home-video-tag {
        margin: 0 0 10px;
      }
      .home-video-content {
        flex-direction: column;
        gap: 20px;

        .pcRem(margin-bottom, 40);
        .home-video-item {
          padding: 16px;
          border-radius: 12px;
          h3 {
            font-size: 16px;
            line-height: 22px;
            .pcRem(margin-bottom, 8);
          }
          span {
            font-size: 14px;
            line-height: 20px;
            color: rgba(89, 89, 89, 1);
          }
        }
      }
      .home-video {
        .video {
          border-radius: 18px;
          margin-top: 12px;
        }
      }
      .home-video-link {
        margin: 20px auto 0;
      }
    }
  }
}
</style>
