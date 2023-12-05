/*
 * @Description: 按钮组件
 * @Author: Sunly
 * @Date: 2023-12-04 16:17:32
 */
import { FormButton, type IButton } from "@packages/generator";
import type { IComponentItem } from "./index";

const createButtonComponent = (id: number): IComponentItem<IButton> => ({
  component: FormButton,
  name: "button",
  id,
  props: {
    label: "按钮",
    disabled: true,
    buttonText: "确定",
    componentType: "button",
  },
});

export { createButtonComponent };
