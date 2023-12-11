/*
 * @Description: 输入框组件
 * @Author: Sunly
 * @Date: 2023-12-04 15:35:59
 */
import { type IInput } from "@packages/generator";
import { v4 as uuid } from "uuid";
import { type IComponentItem } from "./index";

const createInputComponent = (): IComponentItem<IInput> => ({
  name: "input",
  title: "输入框",
  id: uuid(),
  icon: "vaadin:input",
  props: {
    label: "输入框",
    componentType: "input",
    placeholder: "请输入",
    disabled: false,
    value: "",
    type: "text",
    maxlength: undefined,
    minlength: undefined,
    showWordLimit: false,
    size: "default",
  },
});

export { createInputComponent };
