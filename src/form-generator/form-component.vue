<!--
 * @Description: 入口组件
 * @Author: Sunly
 * @Date: 2023-11-30 03:19:29
-->
<script lang="ts" setup>
import { reduceComponent, type IFormJSON } from "./reduce-component";
import { ElForm } from "element-plus";

export type { IFormJSON };

const props = defineProps<{
  form: IFormJSON;
}>();
</script>

<template>
  <ElForm>
    <component :is="reduceComponent(props.form)" />
  </ElForm>
</template>
