<template>
  <n-button quaternary :onClick="handleClick" :webviewRef="webviewRef" :url="url">
    <n-icon :component="IconName" />
  </n-button>
</template>

<script lang="ts" setup>
import { defineComponent, ref, PropType } from "vue";
import { NIcon } from "naive-ui";

const props = defineProps({
  IconName: {
    type: Object as PropType<typeof NIcon["component"]>,
    default: () => null,
  },
  webviewRef: {
    type: Object as PropType<any>,
    default: () => null,
  },
  url: {
    type: String,
    default: "",
  },
  onClick: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
});

const handleClick = () => {
  props.onClick();
};
</script>

<style scoped>
/* 在这里添加样式 */
</style>
