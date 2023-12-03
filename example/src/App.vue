<!--
 * @Description: App
 * @Author: Sunly
 * @Date: 2023-11-29 07:13:28
-->
<script setup lang="ts">
import { type IFormJSON } from "@packages/generator";

const formJSON: IFormJSON = {
  username: {
    componentType: "input",
    label: "用户名",
    defaultValue: "foo",
    type: "text",
  },
  password: {
    componentType: "input",
    label: "密码",
    defaultValue: "bar",
    type: "password",
    rules: [
      {
        type: "string",
        required: true,
        message: "Please input Activity name",
        trigger: "blur",
      },
      {
        min: 3,
        max: 5,
        message: "Length should be 3 to 5",
        trigger: ["change", "blur"],
      },
    ],
  },
  gender: {
    componentType: "select",
    label: "性别",
    defaultValue: "0",
    options: [
      {
        label: "男",
        value: "0",
      },
      {
        label: "女",
        value: "1",
      },
    ],
  },
  receiveEmail: {
    componentType: "switch",
    label: "接收邮件",
    defaultValue: true,
  },
  submit: {
    componentType: "button",
    buttonText: "注册",
    block: true,
    onSubmit: (data) => {
      console.log(data);
    },
  },
};
</script>

<template>
  <FormComponent :form="formJSON" />
</template>
