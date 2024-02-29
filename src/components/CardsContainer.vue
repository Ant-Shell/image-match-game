<script lang="ts" setup>
import Card from './Card.vue'

  interface Photo {
    id: number,
    src: { medium: string },
    isClicked?: boolean
  }

  defineProps({
    shuffledImages: Array<Photo>,
    clickedCards: Array<Photo>,
    matchedCards: Array<Photo> // Might not need this
  })
</script>

<template>
  <section className="grid gap-4 grid-cols-4 p-8 h-[120vh] sm:h-[130vh] md:h-[170vh] lg:h-[250vh] xl:h-[290vh] 2xl:h-[400vh] w-screen">
    <div v-for="shuffledImage in shuffledImages" v-bind:key="shuffledImage.id" className="w-full h-full">
      <Card v-bind:shuffledImage="shuffledImage" v-bind:clickedCards="clickedCards" v-bind:matchedCards="matchedCards" />
    </div>
  </section>
</template>


