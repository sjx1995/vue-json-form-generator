/*
 * @Description: 根据传入的json数据查找对应的组件
 * @Author: Sunly
 * @Date: 2023-11-30 05:57:37
 */
import { Component, VNode, h } from "vue";
import { createReactiveData } from "./component-context";
import FormButton, { type IButtonProp } from "./components/form-button.vue";
import FormInput, { type IInputProp } from "./components/form-input.vue";
import FormSelect, { type ISelectProp } from "./components/form-select.vue";
import FormSwitch, { type ISwitchProp } from "./components/form-switch.vue";

type IButton = IButtonProp;
type IInput = Omit<IInputProp, "__name">;
type ISelect = Omit<ISelectProp, "__name">;
type ISwitch = Omit<ISwitchProp, "__name">;

type IFormComponentProp = IInputProp | ISelectProp | ISwitchProp;

type IFormJSON = {
  [key: string]: IButton | IInput | ISelect | ISwitch;
};

const getComponent = (name: IFormComponentProp["componentType"]): Component => {
  return {
    input: FormInput,
    select: FormSelect,
    switch: FormSwitch,
  }[name];
};

function reduceComponent(json: IFormJSON) {
  const componentList = [] as { render(): VNode }[];

  for (const key in json) {
    const component = json[key];
    const type = component.componentType;

    if (type !== "button") {
      const props: IFormComponentProp = {
        ...component,
        __name: key,
      };
      const data = createReactiveData(key, props) as IFormComponentProp;

      const updateModelValue = (value: IFormComponentProp["value"]) => {
        data.value = value;
      };

      componentList.push({
        render() {
          return h(getComponent(type), {
            ...data,
            modelValue: data.value,
            "onUpdate:modelValue": updateModelValue,
          });
        },
      });
    } else {
      const props: IButtonProp = {
        ...component,
      };

      const data = createReactiveData(key, props) as IButtonProp;

      componentList.push({
        render() {
          return h(FormButton, { ...data });
        },
      });
    }
  }
  return componentList;
}

export {
  FormButton,
  FormInput,
  FormSelect,
  FormSwitch,
  reduceComponent,
  type IButton,
  type IFormJSON,
  type IInput,
  type ISelect,
  type ISwitch,
  type IFormComponentProp,
};
