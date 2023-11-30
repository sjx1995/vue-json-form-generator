<!--
 * @Description: 按钮组件
 * @Author: Sunly
 * @Date: 2023-11-30 05:33:37
-->
<script lang="ts" setup>
import { ElButton, type ButtonProps } from "element-plus";
import { h } from "vue";
import type { IReactiveData } from "../component-context";
import { getReactData } from "../component-context";
import FormItem from "./form-item.vue";

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

const button = h(
  ElButton,
  {
    style,
    onClick() {
      props.onSubmit && props.onSubmit(getReactData());
    },
    loading: props.loading,
    disabled: props.disabled,
    type: props.type,
    size: props.size,
    text: props.text,
    round: props.round,
    circle: props.circle,
    icon: props.icon,
  },
  {
    default: () => props.buttonText || "确定",
  }
);
</script>

<template>
  <FormItem v-if="props.label" :label="props.label">
    <component :is="button" />
  </FormItem>

  <component v-else :is="button" />
</template>
