<script lang="ts" setup>
import cardBlue from '../assets/Card_Background_Blue.png'

const props = defineProps({
  shuffledImage: Object,
  clickedCards: Array<string>,
})

  const flipCard = (event:Event) => {
    if (props.shuffledImage === undefined) {
      return
    }

    if ((event.target as HTMLImageElement).alt === props.shuffledImage.id.toString()) {
      props.shuffledImage.isClicked = true
    }
  }
</script>

<template>
  <section className="border-black border-2 h-full w-full rounded-lg hover:border-sky-700
  hover:mt-[-5px] hover:shadow-md hover:shadow-cyan-500/50 cursor-pointer" @click="flipCard">
    <img v-if="props.shuffledImage?.isClicked" className="h-full w-full rounded-lg"
    :src="shuffledImage?.src.medium" :alt="props.shuffledImage?.id">
    <img v-else className="h-full w-full rounded-lg" :src="cardBlue" :alt="props.shuffledImage?.id">
  </section> 
</template>
