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


VueMarkdownEditor.use(githubTheme, {
  Prism,
});
createApp(App).use(VueMarkdownEditor).use(router).mount('#app');
