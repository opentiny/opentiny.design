<template>
  <div class="resources-page">
    <h1 class="main-title">相关资源</h1>
    <p class="sub-title">WebMCP全场景实践指南，轻松从浏览器连接到多端应用落地</p>

    <div class="cards-container">
      <div class="resource-card" v-for="(item, index) in cards" :key="index">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-desc">
          <template v-for="(link, i) in item.desc" :key="i">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="desc-link"
            >{{ link.text }}</a>
            <span v-if="i < item.desc.length - 1" class="divider"> &nbsp;| </span>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: '快速入门',
    desc: [
      { text: 'TinyRobot', url: 'https://docs.opentiny.design/tiny-robot/guide/quick-start.html' },
      { text: 'GenUI SDK', url: 'https://docs.opentiny.design/genui-sdk/guide/quick-start.html' },
      { text: 'NEXT SDKs', url: 'https://docs.opentiny.design/next-sdk/guide/quick-start.html' },
      { text: 'AI Extension', url: 'https://docs.opentiny.design/next-sdk/guide/ai-extension-install.html' },
      { text: 'WebAgent', url: 'https://docs.opentiny.design/web-agent/guide/getting-started.html' }
    ]
  },
  {
    title: '最佳实践案例',
    desc: [
      { text: 'Vue 工程', url: 'https://docs.opentiny.design/next-sdk/guide/vue-webmcp-best-practice.html' },
      { text: 'Angular 工程', url: 'https://docs.opentiny.design/next-sdk/guide/angular-webmcp-best-practice.html' },
      { text: 'React 工程', url: 'https://docs.opentiny.design/next-sdk/guide/react-webmcp-best-practice.html' },
    ]
  },
  {
    title: 'API 调用指南',
    desc: [
      { text: 'NEXT SDKs', url: 'https://docs.opentiny.design/next-sdk/guide/api-tools.html' }
    ]
  },
  {
    title: 'SDK',
    desc: [
      { text: 'npm i @opentiny/next-sdk' }
    ]
  }
]
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.resources-page {
  background-color: rgba(255, 255, 255, 1);
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  align-items: center;
  border-top: 1px solid rgba(240, 240, 240, 1);
  box-sizing: border-box;

  @media (max-width: 1669px) {
    padding: 80px 64px;
  }

  @media (max-width: 1199px) {
    padding: 64px 28px;
  }

  @media (max-width: 991px) {
    padding: 56px 24px;
  }

  @media (max-width: 767px) {
    padding: 48px 20px;
  }

  @media (max-width: 575px) {
    padding: 40px 16px;
  }
}

.main-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 66px;
  color: #191919;
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 1399px) {
    font-size: 38px;
    line-height: 56px;
  }

  @media (max-width: 1199px) {
    font-size: 34px;
    line-height: 50px;
  }

  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 44px;
    margin-bottom: 14px;
  }

  @media (max-width: 767px) {
    font-size: 26px;
    line-height: 38px;
    margin-bottom: 12px;
  }

  @media (max-width: 575px) {
    font-size: 22px;
    line-height: 32px;
  }
}

.sub-title {
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  letter-spacing: 1px;
  color: rgba(128, 128, 128, 1);
  margin-bottom: 60px;
  text-align: center;
  max-width: 720px;

  @media (max-width: 1399px) {
    font-size: 19px;
    margin-bottom: 52px;
  }

  @media (max-width: 1199px) {
    font-size: 18px;
    margin-bottom: 44px;
  }

  @media (max-width: 991px) {
    font-size: 17px;
    margin-bottom: 36px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 28px;
    letter-spacing: 0.5px;
  }

  @media (max-width: 575px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 42px;
  justify-content: center;
  width: 100%;

  @media (max-width: 1669px) {
    gap: 24px;
  }

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: 575px) {
    gap: 12px;
  }
}

.resource-card {
  width: 100%;
  height: 150px;
  padding: 24px 32px;
  border-radius: 20px;
  background-color: rgba(247, 248, 251, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1399px) {
    padding: 22px 28px;
  }

  @media (max-width: 1199px) {
    padding: 20px 24px;
    border-radius: 16px;
  }

  @media (max-width: 991px) {
    height: 140px;
    padding: 18px 22px;
  }

  @media (max-width: 767px) {
    height: auto;
    min-height: 130px;
    padding: 16px 20px;
    border-radius: 12px;
  }

  @media (max-width: 575px) {
    min-height: 120px;
    padding: 14px 16px;
    border-radius: 8px;
  }
}

.card-title {
  font-size: 22px;
  line-height: 26px;
  color: #191919;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 1199px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: 575px) {
    font-size: 16px;
    line-height: 20px;
  }
}

.card-desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: rgba(89, 89, 89, 1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 1669px) {
    font-size: 12px;
  }

  @media (max-width: 1199px) {
    line-height: 28px;
  }

  @media (max-width: 767px) {
    line-height: 26px;
  }

  @media (max-width: 575px) {
    font-size: 13px;
    line-height: 24px;
  }
}

.desc-link {
  color: rgba(89, 89, 89, 1);
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
}

.desc-link:hover {
  color: #191919;
  text-decoration: underline;
}

.divider {
  color: rgba(89, 89, 89, 1);
}
</style>