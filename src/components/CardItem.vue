<template>
  <n-card :title="title">
    <slot name="default"></slot>
  </n-card>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, ref, PropType } from "vue";
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: "标题",
  },
});
</script>

<style scoped>
.n-card {
  /* 阴影 */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.n-input {
  width: 100%;
}
</style>
