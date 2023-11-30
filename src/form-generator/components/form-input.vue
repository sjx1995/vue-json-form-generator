<!--
 * @Description: 输入框组件
 * @Author: Sunly
 * @Date: 2023-11-30 02:58:23
-->
<script lang="ts" setup>
import { ElInput, type InputProps } from "element-plus";
import { ref, watch, type InputTypeHTMLAttribute } from "vue";
import { setReactiveData } from "../component-context";
import type { IComponentExtraPropType } from "../reduce-component";
import FormItem from "./form-item.vue";

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

const value = ref(props.defaultValue);
const handleInput = (val: string) => {
  value.value = val;
  setReactiveData(props.__name, val);
};
</script>

<template>
  <FormItem :label="props.label">
    <ElInput
      :model-value="value"
      @input="handleInput"
      :type="props.type"
      :maxlength="props.maxlength"
      :minlength="props.minlength"
      :show-word-limit="props.showWordLimit"
      :placeholder="placeholder || `请输入${props.label}`"
    />
  </FormItem>
</template>
