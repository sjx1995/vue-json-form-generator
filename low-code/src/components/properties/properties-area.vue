<!--
 * @Description: 属性区域
 * @Author: Sunly
 * @Date: 2023-12-04 03:41:46
-->
<script lang="ts" setup>
import { shallowRef, type Component } from "vue";
import ButtonProperties from "./button-properties.vue";
import InputProperties from "./input-properties.vue";
import NonSelectProperties from "./non-select-properties.vue";
import SelectProperties from "./select-properties.vue";
import SwitchProperties from "./switch-properties.vue";
import { onSetSelected } from "../../utils/event-emitter";
import { IComponents } from "../materials";

const selectedComponent = shallowRef<Component>(NonSelectProperties);
const selectedProp = shallowRef<IComponents[keyof IComponents] | null>(null);
onSetSelected((selected) => {
  if (selected?.name === "input") {
    selectedComponent.value = InputProperties;
    selectedProp.value = selected;
  } else if (selected?.name === "button") {
    selectedComponent.value = ButtonProperties;
    selectedProp.value = selected;
  } else if (selected?.name === "select") {
    selectedComponent.value = SelectProperties;
    selectedProp.value = selected;
  } else if (selected?.name === "switch") {
    selectedComponent.value = SwitchProperties;
    selectedProp.value = selected;
  } else {
    selectedComponent.value = NonSelectProperties;
    selectedProp.value = null;
  }
});
</script>

<template>
  <div class="controller-area">
    <component
      :is="selectedComponent"
      :key="selectedProp?.id"
      v-bind="selectedProp"
    />
  </div>
</template>

<style lang="scss" scoped>
.controller-area {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 8px;
  min-width: 300px;
  box-sizing: border-box;
}
</style>
