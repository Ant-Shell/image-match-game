<script lang="ts" setup>

defineProps({
  image: Object
})
</script>

<template>
  <section>
    {{ image?.imageURL }}
  </section> 
</template>

