<script lang="ts" setup>

defineProps({
  shuffledImage: Object
})
</script>

<template>
  <section class="w-fit h-fit">
    {{ shuffledImage?.url }}
  </section> 
</template>

