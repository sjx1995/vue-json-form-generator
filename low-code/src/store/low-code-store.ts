/*
 * @Description: 低代码store
 * @Author: Sunly
 * @Date: 2023-12-04 03:50:58
 */
import { defineStore } from "pinia";
import { type IComponents } from "../components/materials";

const useLowCodeStore = defineStore({
  id: "low-code",
  state: () => ({
    selected: null as null | IComponents[keyof IComponents],
  }),
  getters: {},
  actions: {
    setSelected(selected: IComponents[keyof IComponents]) {
      this.selected = selected;
    },
  },
});

export { useLowCodeStore };
