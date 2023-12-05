/*
 * @Description: 选择器组件
 * @Author: Sunly
 * @Date: 2023-12-04 15:40:35
 */
import { FormSelect, type ISelect } from "@packages/generator";
import type { IComponentItem } from "./index";

const createSelectComponent = (id: number): IComponentItem<ISelect> => ({
  component: FormSelect,
  name: "select",
  id,
  props: {
    label: "选择器",
    disabled: true,
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
