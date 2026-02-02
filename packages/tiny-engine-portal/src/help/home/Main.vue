<template>
  <div class="help-center">
    <!-- banner -->
    <div class="help-center-header">
      <div class="help-center-header-wrap">
        <div>
          <div class="help-center-header-title">TinyEngine帮助中心</div>
          <div class="help-center-header-desc">
            基于开发者任务旅程的知识地图，聚合基础入门、深入学习、设计&架构、定制开发、后端部署、插件&API、官网介绍等官方套件，帮助开发者一站式便捷获取信息。
          </div>
        </div>
        <div class="help-center-header-img">
          <img src="/img/help/banner_top.svg" />
        </div>
      </div>
    </div>
    <div class="help-center-content">
      <div v-for="item in state.groupData" :key="item.id">
        <div class="group-header">
          <div class="group-title">{{ item.text }}</div>
          <div v-if="item.moreLink" class="group-more" @click="goMore(item)">
            查看更多
            <img src="/img/help/right-arrow.svg" alt="" />
          </div>
        </div>
        <!-- 使用指南 -->
        <div v-if="item.list" class="group-content">
          <div v-for="i in item.list" :key="i" class="card">
            <img :src="state.imgPre + i.img" alt="" />
            <div class="card-title">{{ i.title }}</div>
            <div v-for="k in i.children" :key="k" class="card-content" @click="navItemClick(k)">
              {{ k.title }}
              <img src="/img/help/right-arrow.svg" alt="" />
            </div>
          </div>
          <div v-for="i in item.list" :key="i" class="card-mobile">
            <img class="card-img" :src="state.imgPre + i.img" alt="" />
            <div class="card-content">
              <div class="card-title">{{ i.title }}</div>
              <div @click="navItemClick(i.children[0])">
                {{ i.children[0].title }}
              </div>
            </div>
            <img class="card-arrow" src="/img/help/right-arrow.svg" alt="" />
          </div>
        </div>
        <!-- 视频教程 -->
        <div v-if="item.videoList" class="group-content-video">
          <div
            v-for="(i, index) in item.videoList"
            :key="i"
            :class="`video-content video-content-${index % 3}`"
            @click="videoItemClick(i)"
          >
            <div class="video-overlay">
              <div class="video-overlay-type">{{ i.type }}</div>
              <div class="video-overlay-play">
                <div class="video-overlay-title">{{ i.videoTitle }}</div>
                <div class="video-overlay-bottom-start">
                  <img :src="`/img/help/playing${(index % 3) + 1}.svg`" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 更多资源 -->
        <div v-if="item.resource" class="group-content-resource">
          <div v-for="i in item.resource" :key="i" class="resource">
            <div class="resource-title">{{ i.title }}</div>
            <div v-for="k in i.children" :key="k" class="resource-content" @click="navItemClick(k)">
              <div class="resource-name">{{ k.title }}</div>
              <img src="/img/help/right-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="help-center-footer">
      <home-about-us></home-about-us>
      <div class="copyright">
        <span class="text">Copyright © Huawei Technologies Co., Ltd. 2023-{{ year }}. All rights reserved.</span>
      </div>
    </div>
    <!-- 视频播放弹窗 -->
    <video-dialog
      v-if="state.videoVisibility"
      :videoVisibility="state.videoVisibility"
      :videoData="state.videoData"
      @cancel="state.videoVisibility = false"
    ></video-dialog>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import allData from './data/index.json'
import VideoDialog from './VideoDialog.vue'
import HomeAboutUs from '@/home/HomeAboutUs.vue'
import docsTimeData from '@/help/course/docsTime.json'

export default {
  components: {
    VideoDialog,
    HomeAboutUs
  },
  setup() {
    const list = allData
    const router = useRouter()
    const year = new Date().getFullYear()

    const TYPE_MAP = {
      guide: 'guide',
      video: 'video',
      more: 'more'
    }

    const state = reactive({
      groupData: [
        {
          text: '使用指南',
          value: TYPE_MAP.guide,
          list: allData[TYPE_MAP.guide] || [],
          moreLink: '/help-center/course/guide'
        },
        {
          text: '视频教程',
          value: TYPE_MAP.video,
          videoList: allData[TYPE_MAP.video] || [],
          moreLink: 'https://space.bilibili.com/15284299/lists/5091846?type=season'
        },
        {
          text: '更多资源',
          value: TYPE_MAP.more,
          resource: allData[TYPE_MAP.more] || []
        }
      ],
      videoVisibility: false,
      videoData: {},
      imgPre: `${import.meta.env.BASE_URL}`,
      docsUrl: 'https://docs.opentiny.design/tiny-engine/'
    })

    const getData = () => {
      const sortData = docsTimeData.sort((a, b) => new Date(b.time) - new Date(a.time))
      // 取前五条数据
      const recentList = sortData.slice(0, 5)

      const showList = recentList.map((item) => ({
        name: item.subName + '.md',
        title: item.title,
        type: item.type
      }))

      state.groupData[2].resource[1].children = showList
    }

    const goMore = (item) => {
      if (item.value === TYPE_MAP.video) {
        window.open(item.moreLink)
      } else {
        import.meta.env.MODE?.includes('open') ? window.open(state.docsUrl) : router.push(item.moreLink)
      }
    }

    const navItemClick = (item) => {
      if (item.type && item.name) {
        const data = docsTimeData.find((i) => i.subName === item.name.replace(/\.md$/, ''))
        import.meta.env.MODE?.includes('open')
          ? window.open(`${state.docsUrl}${data.type}/${data.path}`)
          : router.push(`/help-center/course/${data.type}/${data.subName.replace(/\.md$/, '')}`)
      }
    }

    const videoItemClick = (item) => {
      state.videoVisibility = true
      state.videoData = item
    }

    onMounted(() => {
      getData()
    })

    return {
      list,
      state,
      year,
      navItemClick,
      goMore,
      videoItemClick
    }
  }
}
</script>

<style lang="less" scoped>
.help-center {
  color: #191919;
  .help-center-header {
    width: 100%;
    background-image: url(/img/help/banner_bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 45px 0 18px;
    .help-center-header-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1300px;
    }
    .help-center-header-title {
      color: #191919;
      font-size: 46px;
      font-weight: 700;
      margin-top: -30px;
    }
    .help-center-header-desc {
      color: #595959;
      width: 420px;
      line-height: 20px;
      margin-top: 24px;
      margin-left: 8px;
    }
    .help-center-header-img {
      max-width: 540px;
      img {
        width: 100%;
      }
    }
  }
  .help-center-content {
    max-width: 1440px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 190px;
    .group-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .group-title {
      font-size: 30px;
      font-weight: 600;
    }
    .group-more {
      color: #808080;
      display: flex;
      gap: 5px;
      img {
        width: 13px;
      }
      &:hover {
        cursor: pointer;
        color: #191919;
      }
    }
    .group-content {
      display: flex;
      flex-flow: wrap;
      gap: 40px;
      margin: 40px 0 68px;
    }
    .card-mobile {
      display: none;
    }
    .card {
      width: calc((100% - 437px) / 4);
      background: #f8f8f8;
      border-radius: 20px;
      padding: 40px 32px 44px 47px;
      img {
        width: 60px;
      }
      .card-title {
        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
        margin: 20px 0 12px;
      }
      .card-content {
        font-size: 16px;
        line-height: 28px;
        color: #595959;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        padding: 5px 12px 5px 27px;
        margin-left: -27px;
        img {
          display: none;
          width: 16px;
          height: 16px;
        }
        &:hover {
          background: #f2f2f2;
          border-radius: 8px;
          img {
            display: block;
          }
        }
      }
    }
    .group-content-video {
      display: flex;
      flex-flow: wrap;
      gap: 40px;
      margin: 40px 0 68px;
      .video-content {
        width: 450px;
        height: 280px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        &-0 {
          background-image: url(/img/help/video-cover1.svg);
        }
        &-1 {
          background-image: url(/img/help/video-cover2.svg);
        }
        &-2 {
          background-image: url(/img/help/video-cover3.svg);
        }
      }
      .video-overlay {
        position: relative;
        border-radius: 16px;
        padding: 24px 32px;
        .video-overlay-type {
          top: 20px;
          color: #595959;
          font-size: 14px;
        }
        .video-overlay-play {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-left: 16px;
          margin-top: 57px;
          .video-overlay-title {
            font-size: 24px;
            font-weight: 700;
            color: #333;
            max-width: 128px;
          }
          .video-overlay-bottom-start {
            display: none;
            width: 60px;
            height: 60px;
            backdrop-filter: blur(20px);
            border-radius: 50%;
            img {
              width: 100%;
              animation: identifier 1s infinite;
            }
          }
        }
      }
      .video-content:hover {
        .video-overlay-bottom-start {
          display: block;
          opacity: 1;
        }
      }
      @keyframes identifier {
        0%{opacity: 0.5;}
        50% {opacity: 1;}
      }
    }
    .group-content-resource {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .resource {
        width: calc(50% - 75px);
        .resource-title {
          font-size: 20px;
          line-height: 27px;
          font-weight: 600;
          padding: 16px 0;
          border-bottom: 1px solid #dbdbdb;
          margin-top: 24px;
        }
        .resource-content {
          margin-top: 20px;
          font-size: 16px;
          line-height: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          &:hover {
            color: #595959;
          }
          img {
            width: 20px;
          }
          .resource-name {
            width: calc(100% - 36px);
          }
        }
      }
    }
  }
  .help-center-footer {
    background: #f5f5f5;
    :deep(.home-about-us) {
      .list {
        max-width: 1440px;
      }
    }
    .copyright {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      background: #f5f5f5;
      border-top: 1px solid #dbdbdb;
      .text {
        font-size: 14px;
        width: 1360px;
        display: inline-block;
        text-align: center;
        color: #191919;
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .help-center {
    .help-center-header {
      padding: 44px 0 36px;
      .help-center-header-wrap {
        max-width: calc(100% - 40px);
        flex-direction: column;
      }
      .help-center-header-title {
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        margin-top: 0;
      }
      .help-center-header-desc {
        line-height: 22px;
        font-size: 14px;
        margin-top: 20px;
        margin-left: 0;
        width: calc(100% - 30px);
        padding: 0 11px 0 18px;
      }
      .help-center-header-img {
        margin-top: 10px;
      }
    }
    .help-center-content {
      max-width: calc(100% - 40px);
      margin-top: 30px;
      margin-bottom: 133px;
      .group-title {
        font-size: 24px;
        line-height: 32px;
      }
      .group-more {
        color: #808080;
        display: flex;
        gap: 4px;
        img {
          width: 16px;
        }
        &:hover {
          cursor: pointer;
          color: #191919;
        }
      }
      .group-content {
        display: flex;
        flex-flow: wrap;
        gap: 16px;
        margin: 30px 0;
      }
      .card {
        display: none;
      }
      .card-mobile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background: #f8f8f8;
        border-radius: 8px;
        padding: 13px 16px 13px 20px;
        cursor: pointer;
        .card-img {
          width: 36px;
        }
        .card-content {
          color: #595959;
          font-size: 14px;
          line-height: 20px;
          width: calc(100% - 80px);
          .card-title {
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            color: #191919;
          }
        }
        .card-arrow {
          width: 16px;
        }
      }
      .group-content-video {
        gap: 20px;
        margin: 30px 0;
        .video-content {
          width: 100%;
          height: 200px;
          border-radius: 12px;
        }
        .video-overlay {
          position: relative;
          border-radius: 16px;
          padding: 17px 22px;
          .video-overlay-play {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-left: 12px;
            margin-top: 38px;
            .video-overlay-title {
              font-size: 18px;
              max-width: 90px;
            }
            .video-overlay-bottom-start {
              width: 42px;
              height: 42px;
              display: block;
            }
          }
        }
      }
      .group-content-resource {
        flex-direction: column;
        .resource {
          width: 100%;
          .resource-title {
            padding: 30px 0 13px;
            border-bottom: 1px solid #dbdbdb;
            margin-top: 0;
            font-size: 18px;
            line-height: 24px;
          }
          .resource-content {
            margin-top: 12px;
            font-size: 14px;
          }
        }
      }
    }
    .help-center-footer {
      :deep(.home-about-us) {
        .mobile {
          max-width: calc(100% - 40px);
        }
      }
    }
  }
}
</style>
