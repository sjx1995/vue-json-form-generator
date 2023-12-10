/*
 * @Description: 切换组件
 * @Author: Sunly
 * @Date: 2023-12-04 16:07:49
 */
import { type ISwitch } from "@packages/generator";
import { v4 as uuid } from "uuid";
import { type IComponentItem } from "./index";

const createSwitchComponent = (): IComponentItem<ISwitch> => ({
  name: "switch",
  title: "开关",
  id: uuid(),
  icon: "iconoir:switch-on",
  props: {
    label: "开关",
    disabled: false,
    value: true,
    componentType: "switch",
  },
});

export { createSwitchComponent };
