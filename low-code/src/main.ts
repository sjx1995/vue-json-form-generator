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

createApp(App).use(ElementPlus).mount("#app");
