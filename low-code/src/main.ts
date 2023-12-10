/*
 * @Description: main
 * @Author: Sunly
 * @Date: 2023-12-04 03:09:50
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(ElementPlus).mount("#app");
