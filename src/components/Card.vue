<script lang="ts" setup>

defineProps({
  // image: Object,
  shuffledImage: Object
})
</script>

<template>
  <section class="w-fit h-fit">
    {{ shuffledImage?.imageURL }}
  </section> 
</template>

