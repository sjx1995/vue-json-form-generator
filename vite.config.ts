/*
 * @Description: vite config
 * @Author: Sunly
 * @Date: 2023-12-02 10:41:59
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./core/src/index.ts"),
      name: "Bundle",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue(), dts({ include: "./core" })],
});
