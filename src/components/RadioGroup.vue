<template>
  <n-radio-group
    v-model:value="radioValue"
    name="radiogroup"
    @update:value="handleRadioChange"
  >
    <slot name="header"></slot>
    <n-space vertical>
      <n-radio v-for="i in list" :key="i.value" :value="i.value">
        {{ i.label }}
      </n-radio>
      <slot name="input"></slot>
      <slot name="twoColumn"></slot>
    </n-space>
    <slot name="footer"></slot>
  </n-radio-group>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, ref, PropType } from "vue";
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: "标题",
  },
  list: {
    type: Array as PropType<Array<{ label: string; value: string; checked?: boolean }>>,
    default: () => [],
  },
});
const emit = defineEmits(["handleRadioChange"]); // 定义一个事件发射器
const radioValue = ref(props.list[0].value || null); // 默认选中项

const handleRadioChange = (value: string) => {
  // 发射一个事件，传递新的选中值
  emit("handleRadioChange", value);
  // radioValue.value = value;
};
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
