<template>
  <CardItem>
    <RadioGroup
      :title="pageTitle"
      :list="customList"
      @handleRadioChange="parentHandleRadioChange"
    >
      <template #input>
        <n-space>
          <n-input
            v-model:value="inputValue"
            type="text"
            placeholder="请输入自定义页面网址"
            :status="disabled"
            :disabled="disabled"
            @blur="handleBlur"
          />
          <n-button
            v-show="showBtn"
            @click="handleConfirm"
            type="primary"
            :ghost="disabled"
            :disabled="disabled"
            >确定</n-button
          >
          <n-button
            v-show="showBtn"
            @click="handleUpdate"
            type="info"
            :ghost="!disabled"
            :disabled="!disabled"
            >修改</n-button
          >
        </n-space>
      </template>
    </RadioGroup>
  </CardItem>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const radioValue = ref(null);
    const pageTitle = ref("浏览器启动时");
    const showBtn = ref(false);
    const inputValue = ref("");
    const handleErrorTips = ref("");
    const disabled = ref(false);
    const parentHandleRadioChange = (newValue: string) => {
      console.log("选中的值：" + newValue);
      radioValue.value = newValue;
    };

    // 当用户输入完毕后，触发事件
    const handleBlur = () => {
      // message.info("[Event blur]");
      console.log("[Event blur]");
      if (inputValue.value !== null && inputValue.value.length !== 0) {
        showBtn.value = true;
        handleErrorTips.value = "success";
      } else {
        handleErrorTips.value = "error";
        showBtn.value = false;
      }
    };

    // 点击确定按钮，保存输入的值并将值赋值给webviewUrl
    const handleConfirm = () => {
      console.log("我是确定按钮！");
      console.log(inputValue.value.trim());
      disabled.value = !disabled.value;
    };

    // 点击修改按钮，修改保存输入的值
    const handleUpdate = () => {
      console.log("我是修改按钮！");
      console.log(inputValue.value.trim());
      disabled.value = !disabled.value;
    };

    const customList = [
      {
        value: "打开新标签页",
        label: "打开新标签页",
      },
      {
        value: "打开上一个会话中的标签页",
        label: "打开上一个会话中的标签页",
      },
      {
        value: "打开自定义页面",
        label: "打开自定义页面：",
      },
    ];

    return {
      showBtn,
      inputValue,
      handleErrorTips,
      disabled,
      handleBlur,
      handleConfirm,
      handleUpdate,
      //---------
      radioValue,
      pageTitle,
      customList,
      parentHandleRadioChange,
    };
  },
});
</script>
