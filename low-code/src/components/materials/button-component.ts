/*
 * @Description: 按钮组件
 * @Author: Sunly
 * @Date: 2023-12-04 16:17:32
 */
import { type IButton } from "@packages/generator";
import { v4 as uuid } from "uuid";
import { type IComponentItem } from "./index";

const createButtonComponent = (): IComponentItem<IButton> => ({
  name: "button",
  title: "按钮",
  id: uuid(),
  icon: "formkit:button",
  props: {
    label: "按钮",
    disabled: false,
    buttonText: "确定",
    componentType: "button",
  },
});

export { createButtonComponent };
