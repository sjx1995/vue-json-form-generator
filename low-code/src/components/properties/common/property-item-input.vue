<!--
 * @Description: 属性设置输入框
 * @Author: Sunly
 * @Date: 2023-12-10 13:47:22
-->
<script setup lang="ts">
import { computed } from "vue";
import PropertyItem from "./property-item.vue";
import { ElInput } from "element-plus";

const props = defineProps<{
  title: string;
  placeholder?: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
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
    <ElInput
      type="text"
      v-model="value"
      :placeholder="placeholder || '请输入'"
    />
  </PropertyItem>
</template>
