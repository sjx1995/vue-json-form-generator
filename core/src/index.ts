/*
 * @Description: 入口
 * @Author: Sunly
 * @Date: 2023-12-02 10:42:48
 */
import type { App } from "vue";
import FormComponent from "./form-component.vue";

export type {
  IButtonProp,
  IFormJSON,
  IInputProp,
  ISelectProp,
  ISwitchProp,
} from "./reduce-component";

export default {
  install(app: App) {
    app.component("FormComponent", FormComponent);
  },
};
