<!--
 * @Description: 按钮props
 * @Author: Sunly
 * @Date: 2023-12-10 13:11:21
-->
<script setup lang="ts">
import { type IComponents } from "../materials/index";

const props = defineProps<IComponents["button"]>();
</script>

<template>
  <div class="properties">
    <h2>{{ props.title }}</h2>
  </div>
</template>
