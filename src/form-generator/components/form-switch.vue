<!--
 * @Description: 切换组件
 * @Author: Sunly
 * @Date: 2023-11-30 17:06:48
-->
<script lang="ts" setup>
import { ElSwitch, type SwitchProps } from "element-plus";
import { ref } from "vue";
import { setReactiveData } from "../component-context";
import type { IComponentExtraPropType } from "../reduce-component";
import FormItem from "./form-item.vue";

export type ISwitchProp = {
  // 自定义属性
  componentType: "switch";
  label: string;
  defaultValue: SwitchProps["modelValue"];
  // Element-plus Button 属性
  disabled?: SwitchProps["disabled"];
  loading?: SwitchProps["loading"];
  size?: SwitchProps["size"];
};

const props = defineProps<ISwitchProp & IComponentExtraPropType>();

const value = ref(props.defaultValue);
const handleChange = (val: SwitchProps["modelValue"]) => {
  value.value = val;
  setReactiveData(props.__name, val);
};
</script>

<template>
  <FormItem :label="props.label">
    <el-switch :model-value="value" @change="handleChange" />
  </FormItem>
</template>
