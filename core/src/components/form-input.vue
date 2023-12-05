<!--
 * @Description: 输入框组件
 * @Author: Sunly
 * @Date: 2023-11-30 02:58:23
-->
<script lang="ts" setup>
import { ElInput, type InputProps } from "element-plus";
import type { InputTypeHTMLAttribute } from "vue";
import { computed, watch } from "vue";
import FormItem, { type IFormItemRule } from "./form-item.vue";

export type IInputProp = {
  // 自定义属性
  __name: string;
  componentType: "input";
  label?: string;
  value: InputProps["modelValue"];
  // Element-plus Input 属性
  disabled?: InputProps["disabled"];
  type: InputTypeHTMLAttribute;
  maxlength?: number;
  minlength?: number;
  showWordLimit?: InputProps["showPassword"];
  placeholder?: InputProps["placeholder"];
  rules?: IFormItemRule;
};

const props = defineProps<IInputProp>();
const emits = defineEmits<{
  (event: "update:modelValue", val: InputProps["modelValue"]): void;
}>();

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

const value = computed({
  get() {
    return props.value;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});
</script>

<template>
  <FormItem :label="props.label" :rules-name="props.__name" :rules="rules">
    <ElInput
      v-model:model-value="value"
      :type="props.type"
      :maxlength="props.maxlength"
      :minlength="props.minlength"
      :disabled="props.disabled"
      :show-word-limit="props.showWordLimit"
      :placeholder="placeholder || `请输入${props.label || ''}`"
    />
  </FormItem>
</template>
