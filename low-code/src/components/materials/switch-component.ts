/*
 * @Description: 切换组件
 * @Author: Sunly
 * @Date: 2023-12-04 16:07:49
 */
import { FormSwitch, type ISwitch } from "@packages/generator";
import type { IComponentItem } from "./index";

const createSwitchComponent = (id: number): IComponentItem<ISwitch> => ({
  component: FormSwitch,
  name: "switch",
  id,
  props: {
    label: "开关",
    disabled: true,
    value: true,
    componentType: "switch",
  },
});

export { createSwitchComponent };
