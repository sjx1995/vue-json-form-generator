/*
 * @Description: 输入框组件
 * @Author: Sunly
 * @Date: 2023-12-04 15:35:59
 */
import { FormInput, type IInput } from "@packages/generator";
import type { IComponentItem } from "./index";

const createInputComponent = (id: number): IComponentItem<IInput> => ({
  component: FormInput,
  name: "input",
  id,
  props: {
    label: "输入框",
    componentType: "input",
    placeholder: "请输入",
    disabled: true,
    value: "",
    type: "text",
  },
});

export { createInputComponent };
