<!--
 * @Description: 按钮组件
 * @Author: Sunly
 * @Date: 2023-11-30 05:33:37
-->
<script lang="ts" setup>
import type { ButtonProps } from "element-plus";
import { ElButton } from "element-plus";
import { getValue, type IFromValue } from "../component-context";
import FormItem from "./form-item.vue";
import { computed } from "vue";

export type IButtonProp = {
  // 自定义属性
  componentType: "button";
  buttonText: string;
  label?: string;
  block?: boolean;
  onSubmit?: (data: IFromValue) => void;
  // Element-plus Button 属性
  disabled?: ButtonProps["disabled"];
  loading?: ButtonProps["loading"];
  type?: ButtonProps["type"];
  size?: ButtonProps["size"];
  text?: ButtonProps["text"];
  round?: ButtonProps["round"];
  circle?: ButtonProps["circle"];
  icon?: ButtonProps["icon"];
  plain?: ButtonProps["plain"];
};

const props = defineProps<IButtonProp>();

const style = computed(() =>
  props.block
    ? {
        width: "100%",
      }
    : null
);

// const style = {
//   width: props.block ? "100%" : "",
// };
</script>

<template>
  <FormItem :label="props.label">
    <ElButton
      :style="style"
      @click="() => props.onSubmit && props.onSubmit(getValue())"
      :loading="props.loading"
      :disabled="props.disabled"
      :type="props.type"
      :size="props.size"
      :text="props.text"
      :round="props.round"
      :circle="props.circle"
      :icon="props.icon"
      :plain="props.plain"
    >
      {{ props.buttonText || "确定" }}
    </ElButton>
  </FormItem>
</template>
