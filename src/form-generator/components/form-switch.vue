<!--
 * @Description: 切换组件
 * @Author: Sunly
 * @Date: 2023-11-30 17:06:48
-->
<script lang="ts" setup>
import { ElSwitch, type SwitchProps } from "element-plus";
import { getReactData } from "../component-context";
import type { IComponentExtraPropType } from "../reduce-component";
import FormItem, { type IFormItemRule } from "./form-item.vue";

export type ISwitchProp = {
  // 自定义属性
  componentType: "switch";
  label: string;
  defaultValue: SwitchProps["modelValue"];
  // Element-plus Button 属性
  disabled?: SwitchProps["disabled"];
  loading?: SwitchProps["loading"];
  size?: SwitchProps["size"];
  rules?: IFormItemRule;
};

const props = defineProps<ISwitchProp & IComponentExtraPropType>();

const reactiveData = getReactData() as Record<
  string,
  SwitchProps["modelValue"]
>;
</script>

<template>
  <FormItem
    :label="props.label"
    :rules-name="props.__name"
    :rules="props.rules"
  >
    <el-switch v-model:model-value="reactiveData[props.__name]" />
  </FormItem>
</template>
