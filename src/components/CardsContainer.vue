<script lang="ts" setup>
import Card from './Card.vue'

interface Card {
  id: number,
  src: { medium: string },
  position?: number,
  isClicked?: boolean,
  isMatched?: boolean,
  isLocked?: boolean,
}

const props = defineProps({
  shuffledCards: Array<Card>,
  addCard: Function,
})
</script>

<template>
  <section class="grid grid-cols-4 gap-1 justify-items-center h-full p-2 lg:pt-1 lg:pb-1 overflow-y-auto">
    <div v-for="shuffledCard in props.shuffledCards" v-bind:key="shuffledCard.position" class="w-20 h-36 md:w-32 md:h-60
      lg:w-52 lg:h-80 xl:w-32 xl:h-48 2xl:w-36 2xl:h-52">
      <Card v-bind:shuffledCard="shuffledCard" :addCard="props.addCard"/>
    </div>
  </section>
</template>


