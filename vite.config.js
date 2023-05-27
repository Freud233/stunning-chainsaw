import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import mdPlugin from 'vite-plugin-markdown'
import {prismjsPlugin} from 'vite-plugin-prismjs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdPlugin.plugin({ mode: ['html', 'vue'] }),
    prismjsPlugin({
      languages: ['json','javascript']
    }),
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssImport(), autoprefixer(), tailwindcss()],
    },
  },
});
