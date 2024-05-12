<template>
</template>

<script setup>
	import { ref } from 'vue'
	const links = ref(
		[
			{
				key: '帮助',
				title: '帮助',
				href: 'https://www.iviewui.com',
				blankTarget: true
			},
			{
				key: 'github',
				icon: 'logo-github',
				href: 'https://github.com/view-design/ViewUIPlus',
				blankTarget: true
			},
			{
				key: '条款',
				title: '条款',
				href: '',
				blankTarget: true
			}
		]
	)
	const copyright = ref('Copyright © 2024 View Design All Rights Reserved')
</script>

<style>
</style>