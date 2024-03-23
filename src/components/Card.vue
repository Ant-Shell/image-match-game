<script lang="ts" setup>
import cardBlue from '../assets/Card_Background_Blue.png'


const props = defineProps({
  shuffledPhoto: Object,
  addCard: Function,
})

const flipCard = (event:Event) => {
  if (props.shuffledPhoto === undefined) {
    return
  }

  if ((event.target as HTMLImageElement).alt === props.shuffledPhoto.id.toString()) {
    props.shuffledPhoto.isClicked = true
  }
  props.addCard?.(props.shuffledPhoto)
}
</script>

<template>
  <button class="border-black border-2 h-full w-full rounded-lg" :disabled="props.shuffledPhoto?.isLocked" @click="flipCard">
    <img v-if="props.shuffledPhoto?.isClicked" class="h-full w-full rounded-lg cursor-default"
    :src="shuffledPhoto?.src.medium" :alt="props.shuffledPhoto?.id">
    <img v-else-if="props.shuffledPhoto?.isMatched" class="h-full w-full rounded-lg cursor-default"
    :src="shuffledPhoto?.src.medium" :alt="props.shuffledPhoto?.id">
    <img v-else class="h-full w-full rounded-lg hover:mt-[-5px] hover:shadow-md
     hover:border-sky-700 hover:shadow-cyan-500/50 cursor-pointer" :src="cardBlue" :alt="props.shuffledPhoto?.id">
  </button>
</template>
