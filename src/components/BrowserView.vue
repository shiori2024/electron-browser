<script lang="ts" setup>
	import { defineProps, ref, onMounted } from 'vue';

	const props = defineProps({
		url: {
			type: String,
			required: true,
		},
	});


	const webviewRef = ref<any>(null);

	onMounted(() => {
		webviewRef.value.loadURL(props.url); // 加载 URL
	})
</script>

<template>
	<div class="panel">
		<webview ref="webviewRef" class="webview" :src="props.url" />
	</div>
</template>

<style scoped>
	.panel {
		/* 面板的样式 */
	}

	.webview {
		background: #ffffff;
		flex: 1;
		min-height: 500px;
		/* 留出头部空间 */
		margin-top: 50px;
	}
</style>