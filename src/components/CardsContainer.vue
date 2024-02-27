<script lang="ts" setup>
import Card from './Card.vue'

const props = defineProps({
  shuffledImages: Array<{id: number, src: { medium: string }}>,
  clickedCards: Array<string>
})
</script>

<template>
  <section className="grid gap-4 grid-cols-4 p-8 h-[120vh] sm:h-[130vh] md:h-[170vh] lg:h-[250vh] xl:h-[290vh] 2xl:h-[400vh] w-screen">
    <div v-for="shuffledImage in shuffledImages" :key="props.shuffledImages?.indexOf(shuffledImage)" className="w-full h-full">
      <Card v-bind:shuffledImage="shuffledImage" v-bind:clickedCards="clickedCards" />
    </div>
  </section>
</template>


