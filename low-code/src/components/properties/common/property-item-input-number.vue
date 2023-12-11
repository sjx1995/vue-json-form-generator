<!--
 * @Description: 属性设置数字输入框
 * @Author: Sunly
 * @Date: 2023-12-11 14:03:52
-->
<script setup lang="ts">
import { computed } from "vue";
import PropertyItem from "./property-item.vue";
import { ElInputNumber } from "element-plus";

const props = defineProps<{
  title: string;
  modelValue: number;
  min?: number;
  max?: number;
  step?: number;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: number): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <PropertyItem :title="title">
    <ElInputNumber v-model="value" :min="min" :max="max" :step="step" />
  </PropertyItem>
</template>
