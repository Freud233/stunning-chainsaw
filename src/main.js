import { createApp, provide, h } from 'vue';
import App from './App.vue';
import router from './router';
// tailwindcss
import '/src/assets/style/tailwind.css'
import '/src/assets/style/base.css'
// markdown
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// 代码高亮样式
import Prism from 'prismjs';
// 快捷复制代码插件
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// ApolloClient 
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  // 你需要在这里使用绝对路径
  uri: 'https://api.zhangxiang.link/graphql',
})

// 缓存实现
const cache = new InMemoryCache()

// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
VueMarkdownEditor.use(vuepressTheme, {
  extend(md) {
  },
  Prism,
}).use(createCopyCodePlugin());
// 连接 Apollo Client 到 Vue 应用
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
app.use(provide(DefaultApolloClient, apolloClient)).use(VueMarkdownEditor).use(router).mount('#app');
