/*
 * @Description: 低代码store
 * @Author: Sunly
 * @Date: 2023-12-04 03:50:58
 */
import { defineStore } from "pinia";
import type {
  IFormJSON,
  IButtonProp,
  IInputProp,
  ISelectProp,
  ISwitchProp,
} from "@packages/generator";

const useLowCodeStore = defineStore({
  id: "low-code",
  state: () => ({
    components: [],
  }),
  getters: {
    //
  },
  actions: {
    //
  },
});

export { useLowCodeStore };
