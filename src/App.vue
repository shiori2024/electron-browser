<script lang="ts">
import { defineComponent, created, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { NMenu, NInput, NIcon } from "naive-ui";
import { ArrowBack, ArrowForward, Refresh, Apps, Search } from "@vicons/ionicons5";
// import ArrowBack from "@/components/ArrowBack.vue";
export default defineComponent({
  components: {
    ArrowBack,
    ArrowForward,
    Refresh,
    Apps,
    Search,
  },
  setup() {
    const router = useRouter();
    // 网址值
    const url = ref("https://www.baidu.com");
    // webviewRef
    const webviewRef = ref<any>(null);
    // 列表选中值
    const selectedValue = ref<any>(null);
    // 输入框值
    const valueRef = ref("");
    const showMenu = ref(true);
    const options = ref([
      {
        label: "关于",
        value: "about",
      },
      {
        label: "打开新的标签页",
        value: "newTab",
      },
      {
        label: "书签",
        value: "mark",
      },
      {
        label: "下载内容",
        value: "download",
        disabled: false,
      },
      {
        label: "缩放",
        value: "zoom",
      },
      {
        label: "清除浏览数据...",
        value: "clearData",
      },
      {
        label: "打印...",
        value: "print",
      },
      {
        label: "查找",
        value: "find",
      },
      {
        label: "帮助",
        value: "help",
      },
      {
        label: "设置",
        value: "setting",
      },
      {
        label: "退出",
        value: "quit",
      },
    ]);
    const menuOptions = [
      {
        label: "前进",
        key: "back",
        // 您可以添加图标或其他属性
        icon: () => h(NIcon, { component: ArrowBack }),
      },
      {
        label: "后退",
        key: "forward",
        icon: () => h(NIcon, { component: ArrowForward }),
      },
      {
        label: "刷新",
        key: "refresh",
        icon: () => h(NIcon, { component: Refresh }),
      },
      // 更多菜单项...
    ];
    const navigate = (e: Event) => {
      if (webviewRef.value) {
        webviewRef.value.loadURL(url.value);
      }
    };
    const back = () => {
      if (webviewRef.value) {
        webviewRef.value.goBack();
        // webviewRef.addEventListener("did-navigate", (e: Event) => {
        //   url.value = e.url;
        // });
      }
    };

    const forward = () => {
      if (webviewRef.value) {
        webviewRef.value.goForward();
      }
    };
    const refresh = () => {
      if (webviewRef.value) {
        webviewRef.value.reload();
      }
    };
    const handleOptionChange = (value) => {
      // 跳转路由
      router.push("/" + value);
      showMenu.value = !showMenu.value;
    };

    return {
      // 组件
      ArrowBack,
      ArrowForward,
      Refresh,
      Apps,
      Search,
      // 常量
      options,
      url,
      value: valueRef,
      webviewRef,
      menuOptions,
      selectedValue,
      showMenu,
      // 方法
      navigate,
      back,
      forward,
      refresh,
      handleOptionChange,
    };
  },
});
</script>

<template>
  <n-flex vertical>
    <n-layout vertical size="large">
      <!-- 顶部导航栏 -->
      <n-layout-header>
        <!-- 导航按钮组件 -->
        <!-- <n-menu
          v-model:value="activeKey"
          mode="horizontal"
          :options="menuOptions"></n-menu> 
		-->
        <MyButton :IconName="ArrowBack" :webviewRef="webviewRef" @click="back" />
        <MyButton :IconName="ArrowForward" :webviewRef="webviewRef" @click="forward" />
        <MyButton :IconName="Refresh" :webviewRef="webviewRef" @click="refresh" />
        <!-- 搜索栏 -->
        <n-input round v-model:value="url" @keyup.enter="navigate" placeholder="搜索">
          <template #suffix>
            <n-icon :component="Search" />
          </template>
        </n-input>
        <n-popselect
          :options="options"
          v-model:value="selectedValue"
          @update:value="handleOptionChange"
        >
          <n-button quaternary>
            <n-icon :component="Apps" />
          </n-button>
          <template #action>
            <n-thing title="ElectronBrowserV1.0.1"></n-thing>
            <!-- <n-list hoverable clickable>
				<n-thing title="关于"></n-thing>
				<n-thing title="打开新的标签页"></n-thing>
				<n-thing title="打开新的标签页"></n-thing>
				<n-thing title="打开新的标签页"></n-thing>
				<n-thing title="打开新的标签页"></n-thing>
              <n-list-item>
                <n-thing title="关于" content-style="margin-top: 10px;"></n-thing>
              </n-list-item>
            </n-list> -->
          </template>
        </n-popselect>
      </n-layout-header>
      <!-- 主体内容 -->
      <n-layout-content>
        <webview v-if="showMenu" ref="webviewRef" class="webview" :src="url" />
        <template v-else><router-view></router-view></template>
      </n-layout-content>
    </n-layout>
  </n-flex>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.layout-content {
  background: #ffffff;
  flex: 1;
  min-height: 500px;
  /* 留出头部空间 */
  margin-top: 50px;
}

.webview {
  background: #ffffff;
  min-height: 500px;
  height: 100vh;
  width: 100%;
  margin-top: 50px;
}

.layout-footer-center {
  text-align: center;
  padding: 10px;
}

@media (max-width: 600px) {
  .layout-nav {
    flex-direction: column;
  }
}

.n-layout-header {
  background-color: #f0f0f0;
  /* padding: 10px; */
  padding: 0 10px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  /* 要不要底部边框线 */
  /* border-bottom: 1px solid #ccc; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.n-menu {
  width: 255px;
  /* 您可以根据需要调整宽度 */
  margin-left: auto;
  /* 将输入框推到右侧 */
}

.n-input {
  flex-grow: 1;
}
</style>
