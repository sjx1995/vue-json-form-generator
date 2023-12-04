/*
 * @Description: 根据传入的json数据查找对应的组件
 * @Author: Sunly
 * @Date: 2023-11-30 05:57:37
 */
import { Component, Fragment, h } from "vue";
import { setReactiveData } from "./component-context";
import FormButton, { type IButtonProp } from "./components/form-button.vue";
import FormInput, { type IInputProp } from "./components/form-input.vue";
import FormSelect, { type ISelectProp } from "./components/form-select.vue";
import FormSwitch, { type ISwitchProp } from "./components/form-switch.vue";

type IComponentExtraPropType = {
  __name: string;
};

type IFormJSON = {
  [key: string]: IInputProp | IButtonProp | ISelectProp | ISwitchProp;
};

const getComponent = (
  name: Exclude<IFormJSON[string], IButtonProp>["componentType"]
): Component => {
  return {
    input: FormInput,
    select: FormSelect,
    switch: FormSwitch,
  }[name];
};

function reduceComponent(json: IFormJSON) {
  const componentList = [];

  for (const key in json) {
    const component = json[key];
    const type = component.componentType;

    // 设置默认值
    if (type !== "button") {
      setReactiveData(key, component.defaultValue);
    }

    // ? 需要支持嵌套吗
    if (type === "button") {
      componentList.push(h(FormButton, component));
    } else {
      componentList.push(h(getComponent(type), { ...component, __name: key }));
    }
  }
  return h(Fragment, null, componentList);
}

export {
  FormButton,
  FormInput,
  FormSelect,
  FormSwitch,
  reduceComponent,
  type IButtonProp,
  type IComponentExtraPropType,
  type IFormJSON,
  type IInputProp,
  type ISelectProp,
  type ISwitchProp,
};
