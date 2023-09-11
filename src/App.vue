<script setup lang="ts">
import CardsContainer from './components/CardsContainer.vue'
import { ref } from 'vue'

let id = 0
const images = ref([
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  {id: id++, imageURL: `Image ${id}`},
  ])

  defineProps({
    images: Array<{id: number, imageURL: string}>
  })

</script>

<template>
  <html class="h-screen">
    <body>
      <CardsContainer v-bind:images="images"/>
    </body>
  </html>
</template>
