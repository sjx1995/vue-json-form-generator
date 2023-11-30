<!--
 * @Description: 表单项组件
 * @Author: Sunly
 * @Date: 2023-11-30 03:04:52
-->
<script lang="ts" setup>
import { ElFormItem } from "element-plus";

defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <ElFormItem :label="label">
    <slot></slot>
  </ElFormItem>
</template>
