<script lang="ts" setup>
import Card from './Card.vue'

defineProps({
  shuffledImages: Array<{id: number, src: { medium: string }}>
})

</script>


<template>
  <section class="grid grid-cols-4 place-items-center h-screen">
    <div v-for="shuffledImage in shuffledImages">
      <Card v-bind:shuffledImage="shuffledImage"/>
    </div>
  </section>
</template>


