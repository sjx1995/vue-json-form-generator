<!--
 * @Description: 选择器props
 * @Author: Sunly
 * @Date: 2023-12-10 13:11:26
-->
<script setup lang="ts">
import { type IComponents } from "../materials/index";

const props = defineProps<IComponents["select"]>();
</script>

<template>
  <div class="properties">
    <h2>{{ props.title }}</h2>
  </div>
</template>
