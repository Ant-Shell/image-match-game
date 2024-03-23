<script lang="ts" setup>
import Card from './Card.vue'

interface Photo {
  id: number,
  src: { medium: string },
  isClicked?: boolean,
  isMatched?: boolean,
  isLocked?: boolean,
}

const props = defineProps({
  shuffledPhotos: Array<Photo>,
  addCard: Function,
})
</script>

<template>
  <section class="grid grid-cols-4 gap-1 justify-items-center h-full p-2 lg:pt-1 lg:pb-1 overflow-y-auto">
    <div v-for="shuffledPhoto in props.shuffledPhotos" v-bind:key="shuffledPhoto.id" class="w-20 h-36 md:w-[8rem] md:h-[15rem]
      lg:w-[13rem] lg:h-[21rem] xl:w-[8rem] xl:h-[12rem] 2xl:w-[9rem] 2xl:h-[13rem]">
      <Card v-bind:shuffledPhoto="shuffledPhoto" :addCard="props.addCard"/>
    </div>
  </section>
</template>


