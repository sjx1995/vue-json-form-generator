<!--
 * @Description: 文本框props
 * @Author: Sunly
 * @Date: 2023-12-10 13:08:45
-->
<script setup lang="ts">
import { type InputProps } from "element-plus";
import { computed, ref, watch } from "vue";
import { emitSetProps } from "../../utils/event-emitter";
import { type IComponents } from "../materials/index";
import PropertyItemInputNumber from "./common/property-item-input-number.vue";
import PropertyItemInput from "./common/property-item-input.vue";
import PropertyItemSelect from "./common/property-item-select.vue";
import PropertyItemSwitch from "./common/property-item-switch.vue";

const props = defineProps<IComponents["input"]>();

const name = computed(() => props.__name || "");
const value = computed(() => props.props.value as string);
const label = computed(() => props.props.label || "");
const disabled = computed(() => props.props.disabled ?? false);
const size = computed(() => props.props.size || "default");
const type = computed(() => props.props.type || "text");
const enableMinLength = ref(false);
const minLength = computed(() => props.props.minlength || 0);
const enableMaxLength = ref(false);
const maxLength = computed(() => props.props.maxlength || 10);
const showWordLimit = computed(() => props.props.showWordLimit ?? false);

watch(
  () => enableMinLength.value,
  (enableMinLength) => {
    if (enableMinLength) {
      setSelectedProp("minlength", 0);
    } else {
      setSelectedProp("minlength", undefined);
    }
  }
);

watch(
  () => enableMaxLength.value,
  (enableMaxLength) => {
    if (enableMaxLength) {
      setSelectedProp("maxlength", 10);
    } else {
      setSelectedProp("maxlength", undefined);
    }
  }
);

watch(
  () => type.value,
  (type) => {
    if (type === "text" || type === "textarea") {
      setSelectedProp("showWordLimit", false);
    } else {
      setSelectedProp("showWordLimit", undefined);
    }
  }
);

const setSelectedProp = <T extends keyof IComponents["input"]["props"]>(
  key: T | "__name",
  value: IComponents["input"]["props"][T]
) => {
  emitSetProps<"input">(props.id, key, value);
};

const typeOptions = [
  { label: "文本", value: "text" },
  { label: "密码", value: "password" },
  { label: "文本域", value: "textarea" },
  { label: "邮箱", value: "email" },
  { label: "网址", value: "url" },
];

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
    <PropertyItemInput
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
    <PropertyItemSelect
      :model-value="type"
      @update:model-value="
        (value) => setSelectedProp('type', value as InputProps['type'])
      "
      :options="typeOptions"
      title="类型"
    />
    <PropertyItemSelect
      :model-value="size"
      @update:model-value="
        (value) => setSelectedProp('size', value as InputProps['size'])
      "
      :options="sizeOptions"
      title="尺寸"
    />
    <PropertyItemSwitch v-model="enableMinLength" title="允许最小长度" />
    <PropertyItemInputNumber
      v-if="enableMinLength"
      :model-value="minLength"
      @update:model-value="(value) => setSelectedProp('minlength', value)"
      title="最小长度"
    />
    <PropertyItemSwitch v-model="enableMaxLength" title="允许最大长度" />
    <PropertyItemInputNumber
      v-if="enableMaxLength"
      :model-value="maxLength"
      @update:model-value="(value) => setSelectedProp('maxlength', value)"
      title="最大长度"
    />
    <PropertyItemSwitch
      :model-value="showWordLimit"
      @update:model-value="(value) => setSelectedProp('showWordLimit', value)"
      v-show="(type === 'text' || type === 'textarea') && enableMaxLength"
      title="显示限制字符"
    />
  </div>
</template>
