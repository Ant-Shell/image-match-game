<script lang="ts" setup>

defineProps({
  image: Object
})
</script>

<template>
  <section class="w-fit h-fit">
    {{ image?.imageURL }}
  </section> 
</template>

