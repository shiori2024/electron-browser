<template>
  <CardItem :title="pageTitle">
    <template #default>
      <n-space>
        <n-card class="card" title="黑白" hoverable> 黑白主题 </n-card>
        <n-card class="card" title="传统" hoverable> 传统主题 </n-card>
        <n-card class="card" title="蓝白" hoverable> 蓝白主题 </n-card>
        <n-card class="card" title="粉白" hoverable> 粉白主题 </n-card>
      </n-space>
    </template>
  </CardItem>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Pencil, Trash, Open } from "@vicons/ionicons5";

export default defineComponent({
  components: { Pencil, Trash },
  setup() {
    const pageTitle = ref("主题");
    return {
      // 组件
      Pencil,
      Trash,
      Open,
      //---------
      pageTitle,
    };
  },
});
</script>

<style scoped>
.layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.info {
  display: flex;
  flex-direction: column; /* 使得子元素垂直排列 */
  justify-content: center;
  align-items: flex-start; /* 使得子元素垂直居中 */
  margin-right: 600px;
  line-height: 0.2;
  vertical-align: middle;
  height: 30px;
}

.btns {
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
}

.layout-list {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 100%;
}

.card {
  border: 2px solid #18A058;
  &:hover {
    cursor: pointer;
  }
  &:active {
    border: 3px solid #18A058;
  }
  &:visited {
    border: 3px solid #18A058;
  }
  &:focus {
    border: 3px solid #18A058;
  }
}
</style>
