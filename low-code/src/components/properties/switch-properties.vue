<!--
 * @Description: 开关props
 * @Author: Sunly
 * @Date: 2023-12-10 13:11:24
-->
<script setup lang="ts">
import { computed } from "vue";
import { emitSetProps } from "../../utils/event-emitter";
import { type IComponents } from "../materials/index";
import PropertyItemInput from "./common/property-item-input.vue";
import PropertyItemSwitch from "./common/property-item-switch.vue";

const props = defineProps<IComponents["switch"]>();

const name = computed(() => props.__name || "");
const value = computed(() => props.props.value as boolean);
const label = computed(() => props.props.label || "");
const disabled = computed(() => props.props.disabled || false);

const setSelectedProp = <T extends keyof IComponents["switch"]["props"]>(
  key: T | "__name",
  value: IComponents["switch"]["props"][T]
) => {
  emitSetProps<"switch">(props.id, key, value);
};
</script>

<template>
  <div class="properties">
    <h3>{{ props.title }} 组件属性</h3>
    <PropertyItemInput
      :model-value="name"
      @update:model-value="(value: string) => setSelectedProp('__name', value)"
      title="数据键名"
    />
    <PropertyItemSwitch
      :model-value="value"
      @update:model-value="(value: boolean) => setSelectedProp('value', value)"
      title="数据值"
    />
    <PropertyItemInput
      :model-value="label"
      @update:model-value="(value: string) => setSelectedProp('label', value)"
      title="表单名"
    />
    <PropertyItemSwitch
      :model-value="disabled"
      @update:model-value="
        (value: boolean) => setSelectedProp('disabled', value)
      "
      title="禁用"
    />
  </div>
</template>
