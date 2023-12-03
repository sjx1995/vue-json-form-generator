<!--
 * @Description: 输入框组件
 * @Author: Sunly
 * @Date: 2023-11-30 02:58:23
-->
<script lang="ts" setup>
import { ElInput, type InputProps } from "element-plus";
import type { InputTypeHTMLAttribute } from "vue";
import { watch } from "vue";
import { getReactData } from "../component-context";
import type { IComponentExtraPropType } from "../reduce-component";
import FormItem, { type IFormItemRule } from "./form-item.vue";

export type IInputProp = {
  // 自定义属性
  componentType: "input";
  label: string;
  defaultValue: InputProps["modelValue"];
  // Element-plus Input 属性
  type: InputTypeHTMLAttribute;
  maxlength?: number;
  minlength?: number;
  showWordLimit?: InputProps["showPassword"];
  placeholder?: InputProps["placeholder"];
  rules?: IFormItemRule;
};

const props = defineProps<IInputProp & IComponentExtraPropType>();

// maxlength 和 minlength 的校验
watch(
  () => [props.maxlength, props.minlength],
  ([maxlength, minlength]) => {
    if (maxlength && minlength && maxlength < minlength) {
      console.warn(
        `maxlength(${maxlength}) should be greater than minlength(${minlength})`
      );
    }
  }
);
// 显示限制字符只能用在 type="text" 或 type="textarea"
watch(
  () => props.showWordLimit,
  (showWordLimit) => {
    if (showWordLimit && (props.type !== "text" || props.type !== "textarea")) {
      console.warn(
        `showWordLimit should be used with type="text" or type="textarea"`
      );
    }
  }
);

const reactiveData = getReactData() as Record<string, InputProps["modelValue"]>;
</script>

<template>
  <FormItem :label="props.label" :rules-name="props.__name" :rules="rules">
    <ElInput
      v-model:model-value="reactiveData[props.__name]"
      :type="props.type"
      :maxlength="props.maxlength"
      :minlength="props.minlength"
      :show-word-limit="props.showWordLimit"
      :placeholder="placeholder || `请输入${props.label}`"
    />
  </FormItem>
</template>
