<!--
 * @Description: 切换组件
 * @Author: Sunly
 * @Date: 2023-11-30 17:06:48
-->
<script lang="ts" setup>
import { ElSwitch, type SwitchProps } from "element-plus";
import FormItem, { type IFormItemRule } from "./form-item.vue";
import { computed } from "vue";

export type ISwitchProp = {
  // 自定义属性
  __name: string;
  componentType: "switch";
  label?: string;
  value: SwitchProps["modelValue"];
  // Element-plus Button 属性
  disabled?: SwitchProps["disabled"];
  loading?: SwitchProps["loading"];
  size?: SwitchProps["size"];
  rules?: IFormItemRule;
};

const props = defineProps<ISwitchProp>();
const emits = defineEmits<{
  (event: "update:modelValue", val: SwitchProps["modelValue"]): void;
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
    <el-switch
      v-model:model-value="value"
      :disabled="props.disabled"
      :size="props.size"
      :loading="props.loading"
    />
  </FormItem>
</template>
