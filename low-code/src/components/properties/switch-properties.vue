<!--
 * @Description: 开关props
 * @Author: Sunly
 * @Date: 2023-12-10 13:11:24
-->
<script setup lang="ts">
import { type IComponents } from "../materials/index";

const props = defineProps<IComponents["switch"]>();
</script>

<template>
  <div class="properties">
    <h2>{{ props.title }}</h2>
  </div>
</template>
