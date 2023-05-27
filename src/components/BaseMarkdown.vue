<script setup lang='ts'>
let text = ref('# Hello world')
// TODO: 上传图片

// let handleUploadImage = (event, insertImage, files) => {
//   // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
//   console.log(files);

//   // 此处只做示例
//   insertImage({
//     url:
//       'https://logos-download.com/wp-content/uploads/2019/06/Dota_2_Logo.png',
//     desc: '七龙珠',
//     // width: 'auto',
//     // height: 'auto',
//   });
// }
</script>
<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>
<style scoped></style>