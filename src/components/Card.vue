<script lang="ts" setup>

defineProps({
  shuffledImage: Object
})
</script>

<template>
  <section className="border-black border-2 h-full w-full rounded-lg">
      <img className="h-full w-full rounded-lg" :src="shuffledImage?.src.medium">
  </section> 
</template>
