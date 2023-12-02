<!--
 * @Description: 入口组件
 * @Author: Sunly
 * @Date: 2023-11-30 03:19:29
-->
<script lang="ts" setup>
import { ElForm } from "element-plus";
import { getReactData } from "./component-context";
import { reduceComponent, type IFormJSON } from "./reduce-component";

export type { IFormJSON };

const props = defineProps<{
  form: IFormJSON;
}>();

const component = reduceComponent(props.form);
const reactiveData = getReactData();
</script>

<template>
  <ElForm :show-message="true" :model="reactiveData">
    <component :is="component" />
  </ElForm>
</template>
