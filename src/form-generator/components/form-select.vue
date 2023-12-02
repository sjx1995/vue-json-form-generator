<!--
 * @Description: 选择器组件
 * @Author: Sunly
 * @Date: 2023-11-30 07:19:18
-->
<script lang="ts" setup>
import { ElOption, ElSelect } from "element-plus";
import type { IComponentExtraPropType } from "../reduce-component";
import FormItem, { type IFormItemRule } from "./form-item.vue";
import { getReactData } from "../component-context";

export type ISelectProp = {
  // 自定义属性
  componentType: "select";
  label: string;
  defaultValue: string | number;
  options: { label: string; value: string | number }[];
  // Element-plus Select 属性
  rules?: IFormItemRule;
};

const props = defineProps<ISelectProp & IComponentExtraPropType>();

const reactiveData = getReactData() as Record<string, string | number>;
</script>

<template>
  <FormItem :label="props.label">
    <ElSelect v-model:model-value="reactiveData[props.__name]">
      <ElOption
        v-for="item of props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>
  </FormItem>
</template>
