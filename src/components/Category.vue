<script setup>
import { getCategories } from '../request/category';
import { useRoute } from 'vue-router';
const { params } = useRoute();
const getCategoriesHandler = async () => {
  const res = await getCategories(params.id);
  console.log(res);
}
getCategoriesHandler()
</script>

<template>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, debitis odit. Dolores ea officiis dolore quos
  optio, rerum illum tenetur accusamus doloremque fugit blanditiis repudiandae asperiores et corrupti sunt soluta.
</template>