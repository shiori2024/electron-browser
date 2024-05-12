# electron-browser
基于`Electron + Vite + Vue`构建的浏览器应用  
UI框架采用：[NaiveUI](https://www.naiveui.com/zh-CN/os-theme)  

## Features
支持多平台：Windows，Linux，MacOS  
📦 Out of the box  
🎯 Based on the official [template-vue-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts), less invasive  
🌱 Extensible, really simple directory structure  
💪 Support using Node.js API in Electron-Renderer  
🔩 Support C/C++ native addons  
🖥 It's easy to implement multiple windows  

## Todo
- [x] ✨ Support `NaiveUI`
- [ ] 主题切换功能
- [ ] 自定义起始页
- [ ] 开发者工具功能
- [ ] 下载功能

## Quick Setup

```sh
# clone the project
git clone https://github.com/shiori2024/electron-browser.git

# enter the project directory
cd electron-browser

# install dependency
npm install

# develop
npm run dev
```

## Debug

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/electron-vite-react-debug.gif?raw=true)

## Directory

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ └── index.ts    entry of Electron-Main
+ │ └─┬ preload
+ │   └── index.ts    entry of Preload-Scripts
  ├─┬ src
  │ └── main.ts       entry of Electron-Renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```
