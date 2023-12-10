<!--
 * @Description: App
 * @Author: Sunly
 * @Date: 2023-12-04 03:09:50
-->
<script lang="ts" setup>
import CanvasArea from "./components/canvas/canvas-area.vue";
import Header from "./components/i-header.vue";
import ComponentArea from "./components/materials/materials-area.vue";
import PropertiesArea from "./components/properties/properties-area.vue";
</script>

<template>
  <Header />
  <main>
    <ComponentArea />
    <CanvasArea />
    <PropertiesArea />
  </main>
</template>

<style lang="scss" scoped>
main {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
