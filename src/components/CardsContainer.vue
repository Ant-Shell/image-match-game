<script lang="ts" setup>
import Card from './Card.vue'

interface Photo {
  id: number,
  src: { medium: string },
  isClicked?: boolean,
  isMatched?: boolean,
  isLocked?: boolean,
}

defineProps({
  shuffledPhotos: Array<Photo>,
  clickedCards: Array<Photo>,
})
</script>

<template>
  <section className="grid gap-4 grid-cols-4 p-8 h-[120vh] sm:h-[130vh] md:h-[170vh] lg:h-[250vh] xl:h-[290vh] 2xl:h-[400vh] w-screen">
    <div v-for="shuffledPhoto in shuffledPhotos" v-bind:key="shuffledPhoto.id" className="w-full h-full">
      <Card v-bind:shuffledPhoto="shuffledPhoto" v-bind:clickedCards="clickedCards" v-bind:shuffledPhotos="shuffledPhotos"/>
    </div>
  </section>
</template>


