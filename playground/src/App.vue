<!--
 * @Description: repl
 * @Author: Sunly
 * @Date: 2023-12-03 15:34:19
-->
<script lang="ts" setup>
import { Repl, ReplStore } from "@vue/repl";
import Monaco from "@vue/repl/monaco-editor";
import { reactive } from "vue";

const store = new ReplStore({
  showOutput: true,
  outputMode: "preview",
});

const state = reactive({
  showCompileOutput: true,
  showImportMap: true,
  previewOptions: { headHTML: "" },
});
</script>

<template>
  <Repl
    :store="store"
    :editor="Monaco"
    :show-compile-output="state.showCompileOutput"
    :show-import-map="state.showImportMap"
    :previewOptions="state.previewOptions"
    :clear-console="false"
  ></Repl>
</template>
