<script lang="ts" setup>
import Card from './Card.vue'

type Image  = {
    id: number,
    src: { medium: string },
    isClicked?: boolean
  }

defineProps({
  shuffledImages: Array<Image>,
  clickedCards: Array<string>,
  matchedCards: Array<string>
})
</script>

<template>
  <section className="grid gap-4 grid-cols-4 p-8 h-[120vh] sm:h-[130vh] md:h-[170vh] lg:h-[250vh] xl:h-[290vh] 2xl:h-[400vh] w-screen">
    <div v-for="(shuffledImage, index) in shuffledImages" v-bind:key="index" className="w-full h-full">
      <Card v-bind:shuffledImage="shuffledImage" v-bind:clickedCards="clickedCards" v-bind:matchedCards="matchedCards" />
    </div>
  </section>
</template>


