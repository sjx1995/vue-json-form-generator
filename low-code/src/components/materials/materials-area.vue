<!--
 * @Description: 物料区域
 * @Author: Sunly
 * @Date: 2023-12-04 03:38:54
-->
<script lang="ts" setup>
import { reactive } from "vue";
import VueDraggable from "vuedraggable";
import { createInputComponent } from "./input-component";
import { createSelectComponent } from "./select-component";
import { createSwitchComponent } from "./switch-component";
import { createComponent, type IComponentItem } from "./index";
import { Icon } from "@iconify/vue";
import { createButtonComponent } from "./button-component";

const components = reactive([
  createInputComponent(),
  createSelectComponent(),
  createSwitchComponent(),
  createButtonComponent(),
]);

const handleCloneComponent = (element: IComponentItem<unknown>) => {
  return createComponent(element.name);
};
</script>

<template>
  <div class="component-area">
    <VueDraggable
      class="dragArea list-group"
      :list="components"
      :group="{ name: 'components', pull: 'clone', put: false }"
      item-key="name"
      :sort="false"
      :clone="handleCloneComponent"
    >
      <template #item="{ element }">
        <div class="material-item">
          <Icon :icon="element.icon" />
          {{ element.title }}
        </div>
      </template>
    </VueDraggable>
  </div>
</template>

<style lang="scss" scoped>
.component-area {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  min-width: 240px;
  .material-item {
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    padding: 8px;
    border-radius: 4px;
    cursor: move;
    transition: all 0.3s;
    &:hover {
      background-color: #eee;
    }
    &:active {
      background-color: #ddd;
    }
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    .iconify {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
}
</style>
