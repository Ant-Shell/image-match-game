<script lang="ts" setup>

defineProps({
  shuffledImage: Object
})
</script>

<template>
  <section className="border-red-100 border-2 h-full w-full">
      <img className="h-full w-full" :src="shuffledImage?.src.medium">
  </section> 
</template>
