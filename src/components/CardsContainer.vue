<script lang="ts" setup>
import Card from './Card.vue'

defineProps({
  shuffledImages: Array<{id: number, src: { medium: string }}>
})

</script>


<template>
  <section className="grid gap-4 grid-cols-4 p-8 h-screen w-screen">
    <div v-for="shuffledImage in shuffledImages" className="w-full h-full">
      <Card v-bind:shuffledImage="shuffledImage"/>
    </div>
  </section>
</template>


