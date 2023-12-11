<!--
 * @Description: 选择器props
 * @Author: Sunly
 * @Date: 2023-12-10 13:11:26
-->
<script setup lang="ts">
import { type SwitchProps } from "element-plus";
import { computed } from "vue";
import { emitSetProps } from "../../utils/event-emitter";
import { type IComponents } from "../materials/index";
import PropertyItemInput from "./common/property-item-input.vue";
import PropertyItemSelect from "./common/property-item-select.vue";
import PropertyItemSwitch from "./common/property-item-switch.vue";

const props = defineProps<IComponents["switch"]>();

const name = computed(() => props.__name || "");
const value = computed(() => props.props.value as boolean);
const label = computed(() => props.props.label || "");
const disabled = computed(() => props.props.disabled ?? false);
const loading = computed(() => props.props.loading ?? false);
const size = computed(() => props.props.size || "default");

const setSelectedProp = <T extends keyof IComponents["switch"]["props"]>(
  key: T | "__name",
  value: IComponents["switch"]["props"][T]
) => {
  emitSetProps<"switch">(props.id, key, value);
};

const sizeOptions = [
  { label: "大尺寸", value: "large" },
  { label: "默认尺寸", value: "default" },
  { label: "小尺寸", value: "small" },
];
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
      @update:model-value="(value) => setSelectedProp('value', value)"
      title="数据值"
    />
    <PropertyItemInput
      :model-value="label"
      @update:model-value="(value) => setSelectedProp('label', value)"
      title="表单名"
    />
    <PropertyItemSwitch
      :model-value="disabled"
      @update:model-value="(value) => setSelectedProp('disabled', value)"
      title="禁用"
    />
    <PropertyItemSwitch
      :model-value="loading"
      @update:model-value="(value) => setSelectedProp('loading', value)"
      title="加载状态"
    />
    <PropertyItemSelect
      :model-value="size"
      @update:model-value="
        (value) => setSelectedProp('size', value as SwitchProps['size'])
      "
      :options="sizeOptions"
      title="尺寸"
    />
  </div>
</template>
