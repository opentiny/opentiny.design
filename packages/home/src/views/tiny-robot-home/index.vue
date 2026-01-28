<template>
  <div class="home">
    <FirstScreen />
    <TechnicalCore />
    <IntelligentExperience />
    <ServiceScene />
    <RobotComponent />
    <SceneCases />
  </div>
</template>
<script setup>
import FirstScreen from "./FirstScreen.vue"
import TechnicalCore from "./TechnicalCore.vue"
import IntelligentExperience from "./IntelligentExperience.vue"
import ServiceScene from "./ServiceScene.vue"
import RobotComponent from "./RobotComponent.vue"
import SceneCases from "./SceneCases.vue"
</script>
<style lang="less" scoped>
.home{
  --max-width: 1440px;
  --mobile-width: calc(100% - 40px);
}
@media (min-width: 1024px) {
  .home{
    :deep(.first-screen){
      .first-screen-wrap{
        max-width: var(--max-width);
      }
    }
    :deep(.technical-core){
      max-width: var(--max-width);
    }
    :deep(.intelligent-experience){
      max-width: var(--max-width);
    }
    :deep(.service-scene){
      .service-scene-container{
        max-width: var(--max-width);
      }
    }
    :deep(.robot-component){
      max-width: var(--max-width);
    }
    :deep(.scene-cases){
      max-width: var(--max-width);
    }
  }
}
@media (max-width: 1023px) {
  .home{
    :deep(.first-screen){
      .first-screen-wrap{
        max-width: var(--mobile-width);
      }
    }
    :deep(.technical-core){
      max-width: var(--mobile-width);
    }
    :deep(.intelligent-experience){
      max-width: var(--mobile-width);
    }
    :deep(.service-scene){
      .service-scene-container{
        max-width: var(--mobile-width);
      }
    }
    :deep(.robot-component){
      max-width: var(--mobile-width);
    }
    :deep(.scene-cases){
      max-width: var(--mobile-width);
    }
  }
}
</style>