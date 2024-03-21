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
  <section class="grid gap-1 grid-cols-4 h-full p-2 overflow-y-auto">
    <div v-for="shuffledPhoto in shuffledPhotos" v-bind:key="shuffledPhoto.id" class="w-full h-full">
      <Card v-bind:shuffledPhoto="shuffledPhoto" v-bind:clickedCards="clickedCards" v-bind:shuffledPhotos="shuffledPhotos"/>
    </div>
  </section>
</template>


