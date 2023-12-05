/*
 * @Description: 物料组件
 * @Author: Sunly
 * @Date: 2023-12-04 15:57:53
 */
import type { Component } from "vue";

type IComponentItem<U> = {
  name: string;
  id: number;
  component: Component;
  props: U;
};

export { type IComponentItem };
("vue");
