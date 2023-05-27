import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/src/assets/style/tailwind.css'
import '/src/assets/style/base.css'

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import Prism from 'prismjs';
// 代码高亮样式
import hljs from 'highlight.js';
// 快捷复制代码插件
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
  extend(md) {
  },
  Prism,
}).use(createCopyCodePlugin());
createApp(App).use(VueMarkdownEditor).use(router).mount('#app');
