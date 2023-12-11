<!--
 * @Description: 属性设置选择器
 * @Author: Sunly
 * @Date: 2023-12-11 04:17:56
-->
<script setup lang="ts">
import { ElSelect } from "element-plus";
import { computed } from "vue";
import PropertyItem from "./property-item.vue";

const props = defineProps<{
  title: string;
  modelValue: string | number;
  options: {
    label: string;
    value: string | number;
  }[];
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string | number): void;
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
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </PropertyItem>
</template>
