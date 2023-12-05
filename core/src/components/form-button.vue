<!--
 * @Description: 按钮组件
 * @Author: Sunly
 * @Date: 2023-11-30 05:33:37
-->
<script lang="ts" setup>
import { ElButton } from "element-plus";
import { getReactData } from "../component-context";
import FormItem from "./form-item.vue";
import type { ButtonProps } from "element-plus";
import type { IReactiveData } from "../component-context";

export type IButtonProp = {
  // 自定义属性
  componentType: "button";
  buttonText: string;
  label?: string;
  block?: boolean;
  onSubmit?: (data: IReactiveData) => void;
  // Element-plus Button 属性
  disabled?: ButtonProps["disabled"];
  loading?: ButtonProps["loading"];
  type?: ButtonProps["type"];
  size?: ButtonProps["size"];
  text?: ButtonProps["text"];
  round?: ButtonProps["round"];
  circle?: ButtonProps["circle"];
  icon?: ButtonProps["icon"];
};

const props = defineProps<IButtonProp>();

const style = {
  width: props.block ? "100%" : "",
};
</script>

<template>
  <FormItem :label="props.label">
    <ElButton
      :style="style"
      @click="() => props.onSubmit && props.onSubmit(getReactData())"
      :loading="props.loading"
      :disabled="props.disabled"
      :type="props.type"
      :size="props.size"
      :text="props.text"
      :round="props.round"
      :circle="props.circle"
      :icon="props.icon"
    >
      {{ props.buttonText || "确定" }}
    </ElButton>
  </FormItem>
</template>
