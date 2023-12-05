<!--
 * @Description: 选择器组件
 * @Author: Sunly
 * @Date: 2023-11-30 07:19:18
-->
<script lang="ts" setup>
import { ElOption, ElSelect } from "element-plus";
import FormItem, { type IFormItemRule } from "./form-item.vue";
import { computed } from "vue";

type ISelectValue = string | number;

export type ISelectProp = {
  // 自定义属性
  __name: string;
  componentType: "select";
  label?: string;
  value: ISelectValue;
  options: { label: string; value: ISelectValue }[];
  // Element-plus Select 属性
  rules?: IFormItemRule;
  disabled?: boolean;
};

const props = defineProps<ISelectProp>();
const emits = defineEmits<{
  (event: "update:modelValue", val: ISelectValue): void;
}>();

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
  <FormItem
    :label="props.label"
    :rules-name="props.__name"
    :rules="props.rules"
  >
    <ElSelect v-model:model-value="value" :disabled="props.disabled">
      <ElOption
        v-for="item of props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>
  </FormItem>
</template>
