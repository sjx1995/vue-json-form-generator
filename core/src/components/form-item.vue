<!--
 * @Description: 表单项组件
 * @Author: Sunly
 * @Date: 2023-11-30 03:04:52
-->
<script lang="ts" setup>
import { ElFormItem, type FormItemRule } from "element-plus";
import type { Arrayable } from "element-plus/lib/utils/index.js";

export type IFormItemRule = Arrayable<FormItemRule>;

export type IFromItem = {
  label?: string;
  rulesName?: string;
  rules?: IFormItemRule;
};

const props = defineProps<IFromItem>();
</script>

<template>
  <ElFormItem :label="props.label" :prop="rulesName" :rules="rules">
    <slot></slot>
  </ElFormItem>
</template>
