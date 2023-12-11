<!--
 * @Description: 按钮props
 * @Author: Sunly
 * @Date: 2023-12-10 13:11:21
-->
<script setup lang="ts">
import { computed } from "vue";
import { emitSetProps } from "../../utils/event-emitter";
import { type IComponents } from "../materials/index";
import PropertyItemInput from "./common/property-item-input.vue";
import PropertyItemSwitch from "./common/property-item-switch.vue";
import PropertyItemSelect from "./common/property-item-select.vue";
import { type ButtonProps } from "element-plus";

const props = defineProps<IComponents["button"]>();

const name = computed(() => props.__name || "");
const label = computed(() => props.props.label || "");
const disabled = computed(() => props.props.disabled ?? false);
const buttonText = computed(() => props.props.buttonText || "");
const circle = computed(() => props.props.circle ?? false);
const block = computed(() => props.props.block ?? false);
// todo 支持组件icon
const icon = computed(() => (props.props.icon as string) || "");
const loading = computed(() => props.props.loading ?? false);
const round = computed(() => props.props.round ?? false);
const size = computed(() => props.props.size || "default");
const isText = computed(() => props.props.text ?? false);
const type = computed(() => props.props.type || "primary");
const isPlain = computed(() => props.props.plain ?? false);

const setSelectedProp = <T extends keyof IComponents["button"]["props"]>(
  key: T | "__name",
  value: IComponents["button"]["props"][T]
) => {
  emitSetProps<"button">(props.id, key, value);
};

const sizeOptions = [
  { label: "默认尺寸", value: "default" },
  { label: "大尺寸", value: "large" },
  { label: "小尺寸", value: "small" },
];

const typeOptions = [
  { label: "默认", value: "default" },
  { label: "主要", value: "primary" },
  { label: "成功", value: "success" },
  { label: "警告", value: "warning" },
  { label: "危险", value: "danger" },
  { label: "信息", value: "info" },
  { label: "文本", value: "text" },
];
</script>

<template>
  <div class="properties">
    <h3>{{ props.title }} 组件属性</h3>
    <PropertyItemInput
      :model-value="name"
      @update:model-value="(value) => setSelectedProp('__name', value)"
      title="数据键名"
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
    <PropertyItemInput
      :model-value="buttonText"
      @update:model-value="
        (value: string) => setSelectedProp('buttonText', value)
      "
      title="按钮文字"
    />
    <PropertyItemSelect
      :model-value="type"
      @update:model-value="
        (value) => setSelectedProp('type', value as ButtonProps['type'])
      "
      :options="typeOptions"
      title="按钮类型"
    />
    <PropertyItemSelect
      :model-value="size"
      @update:model-value="
        (value) => setSelectedProp('size', value as ButtonProps['size'])
      "
      :options="sizeOptions"
      title="按钮尺寸"
    />
    <PropertyItemSwitch
      :model-value="isPlain"
      @update:model-value="(value) => setSelectedProp('plain', value)"
      title="幽灵按钮"
    />
    <PropertyItemSwitch
      :model-value="circle"
      @update:model-value="(value) => setSelectedProp('circle', value)"
      title="圆形按钮"
    />
    <PropertyItemSwitch
      :model-value="block"
      @update:model-value="(value) => setSelectedProp('block', value)"
      title="块级按钮"
    />
    <PropertyItemInput
      :model-value="icon"
      @update:model-value="(value) => setSelectedProp('icon', value)"
      title="icon"
    />
    <PropertyItemSwitch
      :model-value="loading"
      @update:model-value="(value) => setSelectedProp('loading', value)"
      title="加载状态"
    />
    <PropertyItemSwitch
      :model-value="round"
      @update:model-value="(value) => setSelectedProp('round', value)"
      title="圆角"
    />
    <PropertyItemSwitch
      :model-value="isText"
      @update:model-value="(value) => setSelectedProp('text', value)"
      title="文字按钮"
    />
  </div>
</template>
