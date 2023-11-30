<!--
 * @Description: 选择器组件
 * @Author: Sunly
 * @Date: 2023-11-30 07:19:18
-->
<script lang="ts" setup>
import { ElOption, ElSelect } from "element-plus";
import { ref } from "vue";
import { setReactiveData } from "../component-context";
import type { IComponentExtraPropType } from "../reduce-component";
import FormItem from "./form-item.vue";

export type ISelectProp = {
  // 自定义属性
  componentType: "select";
  label: string;
  defaultValue: string | number;
  options: { label: string; value: string | number }[];
};

const props = defineProps<ISelectProp & IComponentExtraPropType>();

const value = ref(props.defaultValue);
const handleChange = (val: string | number) => {
  value.value = val;
  setReactiveData(props.__name, val);
};
</script>

<template>
  <FormItem :label="props.label">
    <ElSelect :model-value="value" @change="handleChange">
      <ElOption
        v-for="item of props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>
  </FormItem>
</template>
