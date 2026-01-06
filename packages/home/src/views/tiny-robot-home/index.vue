<template>
  <div class="home">
    <HomeTop />
    <HomeTechnicalCore />
    <HomeAccess />
    <HomeServiceScene />
    <HomeComponent />
    <HomeSceneCases />
  </div>
</template>
<script setup>
import HomeTop from "./homeTop.vue"
import HomeTechnicalCore from "./homeTechnicalCore.vue"
import HomeAccess from "./homeAccess.vue"
import HomeServiceScene from "./homeServiceScene.vue"
import HomeComponent from "./homeComponent.vue"
import HomeSceneCases from "./homeSceneCases.vue"
</script>
<style lang="less" scoped>
.home{
  --max-width: 1440px;
  --mobile-width: calc(100% - 40px);
}
@media (min-width: 1024px) {
  .home{
    :deep(.home-top){
      .home-top-wrap{
        max-width: var(--max-width);
      }
    }
    :deep(.home-technical-core){
      max-width: var(--max-width);
    }
    :deep(.home-access){
      max-width: var(--max-width);
    }
    :deep(.home-service-scene){
      .home-service-scene-container{
        max-width: var(--max-width);
      }
    }
    :deep(.home-component){
      max-width: var(--max-width);
    }
    :deep(.home-scene-cases){
      max-width: var(--max-width);
    }
    :deep(.home-about-us){
      .home-about-us-container{
        max-width: var(--max-width);
      }
    }
  }
}
</style>