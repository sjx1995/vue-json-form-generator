/*
 * @Description: 入口
 * @Author: Sunly
 * @Date: 2023-12-02 10:42:48
 */
import type { App } from "vue";
import FormComponent from "./form-component.vue";

export {
  FormButton,
  FormInput,
  FormSelect,
  FormSwitch,
  type IButtonProp,
  type IComponentExtraPropType,
  type IFormJSON,
  type IInputProp,
  type ISelectProp,
  type ISwitchProp,
} from "./reduce-component";

export default {
  install(app: App) {
    app.component("FormComponent", FormComponent);
  },
};
