/*
 * @Description: events
 * @Author: Sunly
 * @Date: 2023-12-10 15:21:26
 */
import Events from "events";
import { type IComponents } from "../components/materials";

const ee = new Events();

// 选中列表中的组件，设置选中组件
type ISelectedComponent<T extends keyof IComponents> = IComponents[T];

const SET_SELECTED_COMPONENT = "setSelectedComponent";
const emitSetSelected = <T extends keyof IComponents>(
  selected: ISelectedComponent<T> | null
) => {
  ee.emit(SET_SELECTED_COMPONENT, selected);
};
const onSetSelected = <T extends keyof IComponents>(
  callback: (selected: ISelectedComponent<T> | null) => void
) => {
  ee.on(SET_SELECTED_COMPONENT, callback);
};

// 修改组件属性，修改列表
type IPropKey<T extends keyof IComponents> = keyof IComponents[T]["props"];
type IPropValue<T extends keyof IComponents> =
  IComponents[T]["props"][IPropKey<T>];

const SET_COMPONENT_PROP = "setComponentProp";
const emitSetProps = <T extends keyof IComponents>(
  id: string,
  key: IPropKey<T> | "__name",
  value: IPropValue<T>
) => {
  ee.emit(SET_COMPONENT_PROP, id, key, value);
};
const onSetProps = <T extends keyof IComponents>(
  callback: (
    id: string,
    key: IPropKey<T> | "__name",
    value: IPropValue<T>
  ) => void
) => {
  ee.on(SET_COMPONENT_PROP, callback);
};

export { emitSetProps, onSetProps, emitSetSelected, onSetSelected };
