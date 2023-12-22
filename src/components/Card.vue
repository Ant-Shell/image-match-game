<script lang="ts" setup>

defineProps({
  shuffledImage: Object
})
</script>

<template>
  <section>
    <div>
      <img class="object-contain" :src="shuffledImage?.src.medium">
    </div>
  </section> 
</template>
