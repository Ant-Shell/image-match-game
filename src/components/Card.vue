<script lang="ts" setup>

defineProps({
  shuffledImage: Object
})
</script>

<template>
  <section class="w-fit h-fit">
    <div>
      <img :src="shuffledImage?.src.medium">
    </div>
  </section> 
</template>
