<template>
  <div class="product-matrix">
    <div class="product-matrix-container">
      <div class="product-matrix-title">{{ info.title }}</div>
      <div class="product-matrix-subtitle">{{ info.subtitle }}</div>
      <div class="product-matrix-content">
        <div v-for="item in info.list" :key="item.title" class="item">
          <div class="item-image">
            <img :src="item.imgUrl" :alt="item.title" />
          </div>
          <div class="item-content">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-description">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import productTmgUrl1 from '@/assets/images/home/tiny-pro-home/product-tmg1.svg'
import productTmgUrl2 from '@/assets/images/home/tiny-pro-home/product-tmg2.svg'
import productTmgUrl3 from '@/assets/images/home/tiny-pro-home/product-tmg3.svg'
import productTmgUrl4 from '@/assets/images/home/tiny-pro-home/product-tmg4.svg'
import productTmgUrl5 from '@/assets/images/home/tiny-pro-home/product-tmg5.svg'
import productTmgUrl6 from '@/assets/images/home/tiny-pro-home/product-tmg6.svg'

const info = {
  title: '功能全面 开箱即用',
  subtitle: '架构完整，初始化可选构建工具和后端模型，数据数据和页面可以自由选择',
  list: [
    { title: 'Mock 独立启动', description: '一条 npm start 同时拉起 Mock 与 Vite。没有 MySQL、没有 Redis，也能把后台走通。', imgUrl: productTmgUrl6  },
    { title: '细粒度权限', description: '角色、用户、菜单、组件四级管控。按钮级权限走 v-permission，与系统管理页同一套数据。', imgUrl: productTmgUrl4 },
    { title: '可视化菜单', description: '在菜单管理里配名称、路径、组件、图标和词条，多级菜单与页签立刻生效。', imgUrl: productTmgUrl5 },
    { title: '四种构建链', description: '初始化时选择 Vite、Webpack、Rspack 或 Farm。同一套 Vue 模板，不绑死打包器。', imgUrl: productTmgUrl1 },
    { title: '主题与布局', description: '默认 / 蜜糖 / 紫罗兰 / 深邃夜空，以及深色浅色。简约、经典、时尚，可开多页签。', imgUrl: productTmgUrl2 },
    { title: '国际化语言', description: '产品内切换语言,国际化管理维护词条，菜单与页面走同一套 Key。', imgUrl: productTmgUrl3 }
  ]
}
</script>
<style lang="less" scoped>
.product-matrix {
  background-image: url(@/assets/images/home/tiny-robot-home/product-bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .product-matrix-container {
    margin: 40px auto 0;
    padding: 100px 0;
    .product-matrix-title {
      font-size: 44px;
      line-height: 64px;
      text-align: center;
      font-weight: 700;
    }
    .product-matrix-subtitle {
      font-size: 20px;
      line-height: 28px;
      margin-top: 16px;
      text-align: center;
      color: #808080;
    }
    .product-matrix-content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 66px;
      gap: 45px;
      .item {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 12px 0 rgba(194, 206, 225, 0.05);
        width: calc((100% - 90px) / 3);
        padding: 20px 20px 54px;
        box-sizing: border-box;
        .item-image {
          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
        }
        .item-content {
          margin-top: 34px;
          margin-left: 12px;
          .item-title {
            color: #191919;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
          }
          .item-description {
            color: #808080;
            font-size: 16px;
            line-height: 28px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .product-matrix {
    .product-matrix-container {
      margin-top: 46px;
      padding: 30px 0 40px;
      .product-matrix-title {
        font-size: 22px;
        line-height: 30px;
      }
      .product-matrix-subtitle {
        font-size: 12px;
        line-height: 18px;
        margin-top: 8px;
        padding: 0 8px;
        overflow-wrap: anywhere;
      }
      .product-matrix-content {
        gap: 20px;
        margin-top: 20px;
        .item {
          width: 100%;
          padding: 14px 14px 21px;
          border-radius: 12px;
          box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.02);
          .item-content {
            margin-top: 20px;
            margin-left: 0;
            .item-title {
              font-size: 16px;
              line-height: 22px;
            }
            .item-description {
              font-size: 12px;
              line-height: 20px;
              margin-top: 12px;
              color: #808080;
            }
          }
          .item-image {
            width: 100%;
            img {
              height: 160px;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .product-matrix {
    .product-matrix-container {
      margin-top: 64px;
      padding: 56px 0 64px;
      .product-matrix-title {
        font-size: 34px;
        line-height: 44px;
      }
      .product-matrix-subtitle {
        font-size: 16px;
        line-height: 24px;
        margin-top: 10px;
      }
      .product-matrix-content {
        gap: 24px;
        margin-top: 40px;
        .item {
          width: calc((100% - 48px) / 3);
          padding: 18px 18px 28px;
          .item-content {
            margin-top: 22px;
            .item-title {
              font-size: 18px;
              line-height: 26px;
            }
            .item-description {
              font-size: 13px;
              line-height: 21px;
              margin-top: 10px;
            }
          }
          .item-image {
            width: 100%;
            img {
              height: 140px;
            }
          }
        }
      }
    }
  }
}
</style>
