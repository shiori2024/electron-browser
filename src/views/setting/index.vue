<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider bordered :width="240">
        <h2 class="f-title">设置</h2>
        <n-menu
          v-model:value="activeKey"
          :options="menuOptions"
          @update:value="handleMenuSelect"
        />
      </n-layout-sider>
      <n-layout>
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from "vue";
import { useRouter } from "vue-router";
import type { MenuOption } from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: "用户信息",
    key: "user-info",
  },
  {
    label: "外观",
    key: "theme",
  },
  {
    label: "启动页、主页",
    key: "start-home",
  },
  {
    label: "下载",
    key: "download",
  },
  {
    label: "语言",
    key: "language",
  },
  {
    label: "打印",
    key: "print",
  },
  {
    label: "开发者工具",
    key: "dev",
  },
  {
    label: "关于",
    key: "about",
  },
];

export default defineComponent({
  setup() {
    const router = useRouter();
    const handleMenuSelect = (key) => {
      router.push(`/setting/${key}`);
      console.log(`/setting/${key}`);
    };
    return {
      activeKey: ref<string | null>(null),
      collapsed: ref(true),
      menuOptions,
      handleMenuSelect,
    };
  },
});
</script>

<style scoped>
.n-layout {
  margin-top: 50px;
  padding: 20px;
}

.f-title {
  text-align: center;
}
</style>
