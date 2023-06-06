<script setup lang='ts'>
let mdValue = ref('')
let props = defineProps({
  content: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: '600px'
  },
  includeLevel: {
    type: Array,
    default: () => [2, 3, 4]
  },
  mode: {
    type: String,
    default: 'editor'
  },
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  // 上传图片
  handleUploadImage: {
    type: Function,
    default: () => { }
  },
  // 复制代码
  handleCopyCodeSuccess: {
    type: Function,
    default: () => { }
  },
  disabledMenus: {
    type: Array,
    default: () => []
  },
})
let emits = defineEmits(['update:modelValue'])
// TODO: 上传图片

let handleUploadImage = (event, insertImage, files) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(files);

  // 此处只做示例
  insertImage({
    url:
      'https://logos-download.com/wp-content/uploads/2019/06/Dota_2_Logo.png',
    desc: '七龙珠',
    // width: 'auto',
    // height: 'auto',
  });
}
let changeHandle = (value) => {
  console.log(value);
  emits('update:modelValue', value)
}
</script>
<template>
  {{ content }}
  <v-md-editor v-model="mdValue" class="my-2" :height="height" :placeholder="placeholder" :autofocus="true"
    :disabled-menus="disabledMenus" @change="changeHandle" @upload-image="handleUploadImage"></v-md-editor>
</template>
<style scoped></style>