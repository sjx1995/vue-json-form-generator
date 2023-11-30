/*
 * @Description: 组件相关上下文
 * @Author: Sunly
 * @Date: 2023-11-30 03:20:01
 */
import type { IButtonProp } from "./components/form-button.vue";
import type { IFormJSON } from "./reduce-component";

type IFormValueTypeExcludeButton = Exclude<
  IFormJSON[string],
  IButtonProp
>["defaultValue"];

type IReactiveData = {
  [key: string]: IFormValueTypeExcludeButton;
};

type ISetReactiveData = (
  key: string,
  value: IFormValueTypeExcludeButton
) => void;

const reactiveData: IReactiveData = {};

const setReactiveData: ISetReactiveData = (key, value) => {
  reactiveData[key] = value;
};

const getReactData = (): IReactiveData => {
  // todo 处理一下data
  return reactiveData;
};

export { setReactiveData, getReactData, type IReactiveData };
