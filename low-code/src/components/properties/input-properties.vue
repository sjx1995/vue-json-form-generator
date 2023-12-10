<!--
 * @Description: 输入框props
 * @Author: Sunly
 * @Date: 2023-12-10 13:08:45
-->
<script setup lang="ts">
import { type IComponents } from "../materials/index";

const props = defineProps<IComponents["input"]>();
</script>

<template>
  <div class="properties">
    <h2>{{ props.title }}</h2>
  </div>
</template>
