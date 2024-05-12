<template>
  <CardItem :title="pageTitle">
    <template #default>
      <div class="layout">
        <div class="avatar">
          <n-avatar
            round
            size="large"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
        <div class="info">
          <n-h3>个人</n-h3>
          <n-p>邮箱：1046700338@qq.com</n-p>
        </div>
        <div class="btns">
          <n-space>
            <n-button>
              <template #icon>
                <n-icon><Pencil /></n-icon>
              </template>
            </n-button>
            <n-button>
              <template #icon>
                <n-icon><Trash /></n-icon>
              </template>
            </n-button>
            <n-button type="primary">退出登录</n-button>
          </n-space>
        </div>
      </div>
      <hr />
      <div class="layout">
        <span>管理账户</span>
        <n-button>
          <template #icon>
            <n-icon><Open /></n-icon>
          </template>
        </n-button>
      </div>
    </template>
  </CardItem>
  <br />
  <CardItem :title="pageTitle2">
    <template #default>
      <hr />
      <div class="layout-list">
        <div class="item">
          <span>同步</span>
          <n-button>
            <template #icon>
              <n-icon><Open /></n-icon>
            </template>
          </n-button>
        </div>
        <div class="item">
          <span>导入浏览器数据</span>
          <n-button>
            <template #icon>
              <n-icon><Open /></n-icon>
            </template>
          </n-button>
        </div>
      </div>
    </template>
  </CardItem>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Pencil, Trash, Open } from "@vicons/ionicons5";

export default defineComponent({
  components: { Pencil, Trash },
  setup() {
    const pageTitle = ref("你的用户配置");
    const pageTitle2 = ref("个人资料");
    return {
      // 组件
      Pencil,
      Trash,
      Open,
      //---------
      pageTitle,
      pageTitle2,
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
</style>
