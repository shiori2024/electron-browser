import { createApp } from 'vue'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
// 导入router
import router from './router'
import App from './App.vue'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'
createApp(App)
	// .use(naive)
	.use(router)
	.mount('#app')
	.$nextTick(() => {
		postMessage({ payload: 'removeLoading' }, '*')
	})