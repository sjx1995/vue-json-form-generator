/*
 * @Description: 物料组件
 * @Author: Sunly
 * @Date: 2023-12-04 15:57:53
 */
import {
  FormButton,
  FormInput,
  FormSelect,
  FormSwitch,
  type IInput,
  type IButton,
  type ISelect,
  type ISwitch,
} from "@packages/generator";
import { createButtonComponent } from "./button-component";
import { createInputComponent } from "./input-component";
import { createSelectComponent } from "./select-component";
import { createSwitchComponent } from "./switch-component";

type IComponents = {
  input: IComponentItem<IInput> & {
    component: typeof FormInput;
  };
  button: IComponentItem<IButton> & {
    component: typeof FormButton;
  };
  select: IComponentItem<ISelect> & {
    component: typeof FormSelect;
  };
  switch: IComponentItem<ISwitch> & {
    component: typeof FormSwitch;
  };
};

const createComponent = <T extends keyof IComponents>(
  name: keyof IComponents
): IComponents[T] | null => {
  if (name === "button") {
    return {
      ...createButtonComponent(),
      component: FormButton,
    } as IComponents[T];
  } else if (name === "input") {
    return {
      ...createInputComponent(),
      component: FormInput,
    } as IComponents[T];
  } else if (name === "select") {
    return {
      ...createSelectComponent(),
      component: FormSelect,
    } as IComponents[T];
  } else if (name === "switch") {
    return {
      ...createSwitchComponent(),
      component: FormSwitch,
    } as IComponents[T];
  }
  return null;
};

type IComponentItem<U> = {
  name: keyof IComponents;
  id: string;
  title: string;
  icon: string;
  props: U;
};

export { createComponent, type IComponentItem, type IComponents };
