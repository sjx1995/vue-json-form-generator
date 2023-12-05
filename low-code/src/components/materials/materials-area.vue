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
import { createButtonComponent } from "./button-component";

const components = reactive([
  createInputComponent(1),
  createSelectComponent(2),
  createSwitchComponent(3),
  createButtonComponent(4),
]);
</script>

<template>
  <div class="component-area">
    <VueDraggable
      class="dragArea list-group"
      :list="components"
      :group="{ name: 'people', pull: 'clone', put: false }"
      item-key="name"
    >
      <template #item="{ element }">
        <div class="material-item">
          <component :is="element.component" v-bind="element.props" />
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
}
</style>
