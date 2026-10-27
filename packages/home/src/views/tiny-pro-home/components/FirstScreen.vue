<template>
  <div class="first-screen">
    <div class="first-screen-wrap">
      <div class="first-screen-content fade-in-up">
        <div class="first-screen-content-title">{{ state.title1 }}</div>
        <div class="first-screen-content-title">{{ state.title2 }}</div>
        <div class="first-screen-content-subtitle">{{ state.subtitle }}</div>
        <div class="first-screen-content-text">{{ state.description }}</div>
        <div class="cta-group">
          <a class="btn primary" :href="state.experienceUrl" target="_blank" rel="noopener noreferrer">立即体验</a>
          <a class="btn secondary" :href="state.docsUrl" target="_blank" rel="noopener noreferrer">产品文档</a>
        </div>
      </div>
      <div class="first-screen-image fade-in-up">
        <img :src="state.image" alt="TinyPro 中后台应用开发模版" />
      </div>
    </div>
  </div>
</template>
<script setup>
import img from '@/assets/images/home/tiny-pro-home/top.png'

const state = {
  title1: 'TinyPro',
  title2: '中后台应用开发模版',
  subtitle: '开箱即用，全局模版',
  description: '完整后台开箱即用，多模版预支，无需从零搭建。',
  image: img,
  experienceUrl: 'https://opentiny.github.io/tiny-pro/',
  docsUrl: 'https://docs.opentiny.design/tiny-pro/guide/start.html'
}
</script>
<style lang="less" scoped>
.first-screen {
  background-image: url(@/assets/images/home/tiny-pro-home/top_banner.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  .first-screen-wrap {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 130px;
    .first-screen-content {
      max-width: 682px;
      .first-screen-content-title {
        font-size: 54px;
        font-weight: 700;
        line-height: 72px;
        color: #191919;
      }
      .first-screen-content-subtitle {
        font-size: 50px;
        font-weight: 700;
        line-height: 72px;
        background: linear-gradient(90deg, #ff943f, #e449db, #9d36f0, #1273ff);
        background-clip: text;
        color: transparent;
        width: fit-content;
        margin-top: 6px;
      }
      .first-screen-content-text {
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        margin-top: 30px;
        color: #808080;
      }
      .cta-group {
        display: flex;
        gap: 30px;
        margin-top: 54px;
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 44px;
          line-height: 24px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 400;
          text-decoration: none;
          cursor: pointer;
          box-sizing: border-box;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn.primary {
          background: #191919;
          color: #fff;
          border: none;
          &:hover {
            transform: translateY(-3px);
          }
        }
        .btn.secondary {
          background: transparent;
          color: #595959;
          border: 1px solid #808080;
          &:hover {
            color: #191919;
            transform: translateY(-3px);
            border-color: #191919;
          }
        }
      }
    }
    .first-screen-image {
      max-width: 682px;
      img {
        width: 100%;
      }
    }
  }
}

@media (max-width: 1023px) {
  .first-screen {
    .first-screen-wrap {
      flex-direction: column;
      padding: 0;
      .first-screen-content {
        width: 100%;
        min-width: 0;
        margin-top: 50px;
        box-sizing: border-box;
        .first-screen-content-title {
          font-size: 24px;
          line-height: 32px;
          text-align: center;
          overflow-wrap: anywhere;
        }
        .first-screen-content-subtitle {
          font-size: 24px;
          line-height: 32px;
          text-align: center;
          margin: 4px auto;
        }
        .first-screen-content-text {
          width: 249px;
          font-size: 12px;
          line-height: 18px;
          margin-top: 18px;
          text-align: center;
          margin-left: 27px;
        }
        .cta-group {
          margin-top: 36px;
          gap: 15px;
          width: 100%;
          justify-content: center;
          .btn {
            padding: 14px 30px;
            font-size: 14px;
          }
        }
      }
      .first-screen-image {
        width: 100%;
        max-width: 100%;
        min-width: 0;
        margin-top: 38px;
        margin-bottom: 38px;
        img {
          width: 100%;
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .first-screen {
    .first-screen-wrap {
      padding: 64px 0 56px;
      .first-screen-content {
        max-width: 640px;
        margin-top: 0;
        .first-screen-content-title {
          font-size: 40px;
          line-height: 52px;
        }
        .first-screen-content-subtitle {
          font-size: 38px;
          line-height: 50px;
        }
        .first-screen-content-text {
          width: 560px;
          font-size: 16px;
          line-height: 24px;
          margin: 20px auto 0;
        }
        .cta-group {
          margin-top: 36px;
          justify-content: center;
          .btn {
            padding: 12px 36px;
            font-size: 16px;
          }
        }
      }
      .first-screen-image {
        width: 76%;
        margin-top: 48px;
        margin-bottom: 0;
      }
    }
  }
}
@media (max-width: 480px) {
  .first-screen {
    .first-screen-wrap {
      .first-screen-content {
        .cta-group {
          .btn {
            padding: 12px 24px;
            font-size: 14px;
            line-height: 1;
          }
        }
      }
    }
  }
}
</style>
