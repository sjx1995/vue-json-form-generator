/*
 * @Description: 选择器组件
 * @Author: Sunly
 * @Date: 2023-12-04 15:40:35
 */
import { type ISelect } from "@packages/generator";
import { v4 as uuid } from "uuid";
import { type IComponentItem } from "./index";

const createSelectComponent = (): IComponentItem<ISelect> => ({
  name: "select",
  title: "选择器",
  id: uuid(),
  icon: "formkit:select",
  props: {
    label: "选择器",
    disabled: false,
    value: "1",
    componentType: "select",
    options: [
      {
        label: "选项一",
        value: "1",
      },
      {
        label: "选项二",
        value: "2",
      },
    ],
  },
});

export { createSelectComponent };
