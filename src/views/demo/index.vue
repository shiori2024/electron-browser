<template>
  <n-flex vertical>
    <n-layout>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          设置
          <span>使用n-list写的设置页</span>
          <n-list hoverable clickable>
            <n-list-item>
              <n-thing title="用户信息"></n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="启动页、主页"></n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="外观"></n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="下载"></n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="语言"></n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="打印"></n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="关于"></n-thing>
            </n-list-item>
          </n-list>
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;"> 内容 </n-layout-content>
      </n-layout>
    </n-layout>
  </n-flex>
</template>

<script setup></script>

<style scoped>
.n-layout {
  margin-top: 50px;
}
</style>
