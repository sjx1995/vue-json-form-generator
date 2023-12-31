/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-11-29 07:13:28
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import FormComponent from "@packages/generator";

createApp(App).use(FormComponent).use(ElementPlus).mount("#app");
