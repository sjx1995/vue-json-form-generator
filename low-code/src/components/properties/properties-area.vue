<!--
 * @Description: 属性区域
 * @Author: Sunly
 * @Date: 2023-12-04 03:41:46
-->
<script lang="ts" setup>
import { shallowRef, watch, type Component } from "vue";
import { useLowCodeStore } from "../../store/low-code-store";
import { type IComponents } from "../materials";
import ButtonProperties from "./button-properties.vue";
import InputProperties from "./input-properties.vue";
import NonSelectProperties from "./non-select-properties.vue";
import SelectProperties from "./select-properties.vue";
import SwitchProperties from "./switch-properties.vue";

const lowCodeStore = useLowCodeStore();

const selectedComponent = shallowRef<Component>(NonSelectProperties);
const selectedProps = shallowRef<IComponents[keyof IComponents] | null>(null);
watch(
  () => lowCodeStore.selected,
  (selected) => {
    if (selected?.name === "input") {
      selectedComponent.value = InputProperties;
      selectedProps.value = selected;
    } else if (selected?.name === "button") {
      selectedComponent.value = ButtonProperties;
      selectedProps.value = selected;
    } else if (selected?.name === "select") {
      selectedComponent.value = SelectProperties;
      selectedProps.value = selected;
    } else if (selected?.name === "switch") {
      selectedComponent.value = SwitchProperties;
      selectedProps.value = selected;
    } else {
      selectedComponent.value = NonSelectProperties;
      selectedProps.value = null;
    }
  }
);
</script>

<template>
  <div class="controller-area">
    <component :is="selectedComponent" v-bind="selectedProps" />
  </div>
</template>

<style lang="scss" scoped>
.controller-area {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  min-width: 240px;
}
</style>
