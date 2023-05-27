import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/src/assets/style/tailwind.css'
import '/src/assets/style/base.css'

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// 代码高亮样式
import Prism from 'prismjs';
// 快捷复制代码插件
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
VueMarkdownEditor.use(vuepressTheme, {
  extend(md) {
  },
  Prism,
}).use(createCopyCodePlugin());
createApp(App).use(VueMarkdownEditor).use(router).mount('#app');
