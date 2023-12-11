<!--
 * @Description: 属性设置开关
 * @Author: Sunly
 * @Date: 2023-12-11 03:16:54
-->
<script setup lang="ts">
import { ElSwitch } from "element-plus";
import { computed } from "vue";
import PropertyItem from "./property-item.vue";

const props = defineProps<{
  title: string;
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
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
    <ElSwitch type="text" v-model="value" />
  </PropertyItem>
</template>
