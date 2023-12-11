<!--
 * @Description: 属性选项
 * @Author: Sunly
 * @Date: 2023-12-10 13:45:33
-->
<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="property-item">
    <div class="property-item-name">
      {{ title }}
    </div>
    <div class="property-item-value">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.property-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
  .property-item-name {
    width: 80px;
    margin-right: 8px;
  }
  .property-item-value {
    flex: 1;
  }
}
</style>
