/*
 * @Description: 组件相关上下文
 * @Author: Sunly
 * @Date: 2023-11-30 03:20:01
 */
import { reactive } from "vue";
import type { IButtonProp } from "./components/form-button.vue";
import type { IInputProp } from "./components/form-input.vue";
import type { ISelectProp } from "./components/form-select.vue";
import type { ISwitchProp } from "./components/form-switch.vue";

type IComponentProp = IButtonProp | IInputProp | ISelectProp | ISwitchProp;

type IReactiveData = {
  [key: string]: IComponentProp;
};

type ICreateReactiveData = (
  key: string,
  value: IReactiveData[string]
) => IComponentProp;

const reactiveData = reactive<IReactiveData>({});

const createReactiveData: ICreateReactiveData = (key, value) => {
  const data = reactive(value);
  reactiveData[key] = data;
  return data;
};

const getReactData = (): IReactiveData => {
  return reactiveData;
};

type IFormComponentProp = Exclude<IComponentProp, IButtonProp>;

type IFromValue = Record<string, IFormComponentProp["value"]>;

const getValue = () => {
  const forms = Object.values(reactiveData).filter(
    ({ componentType }) => componentType !== "button"
  ) as IFormComponentProp[];
  const res: IFromValue = {};
  forms.forEach(({ __name, value }) => {
    res[__name] = value;
  });
  return res;
};

export {
  createReactiveData,
  getReactData,
  getValue,
  type IFromValue,
  type IReactiveData,
};
