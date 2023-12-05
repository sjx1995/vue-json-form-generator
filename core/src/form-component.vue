<!--
 * @Description: 入口组件
 * @Author: Sunly
 * @Date: 2023-11-30 03:19:29
-->
<script lang="ts" setup>
import { ElForm } from "element-plus";
import { computed, reactive } from "vue";
import { getReactData } from "./component-context";
import {
  reduceComponent,
  type IFormComponentProp,
  type IFormJSON,
} from "./reduce-component";

const props = defineProps<{
  form: IFormJSON;
}>();

const components = reduceComponent(props.form);
const reactiveData = getReactData();
const ruleForm = computed(() => {
  const rules = reactive<Record<string, IFormComponentProp["value"]>>({});
  const forms = Object.values(reactiveData).filter(
    ({ componentType }) => componentType !== "button"
  ) as IFormComponentProp[];
  forms.forEach(({ __name, value }) => {
    if (value != null) {
      rules[__name] = value;
    }
  });
  return rules;
});
</script>

<template>
  <ElForm :show-message="true" :model="ruleForm">
    <template v-for="component of components">
      <component :is="component" />
    </template>
  </ElForm>
</template>
