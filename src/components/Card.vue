<script lang="ts" setup>
import cardBlue from '../assets/Card_Background_Blue.png'


const props = defineProps({
  shuffledCard: Object,
  addCard: Function,
})

const flipCard = (event:Event) => {
  if (props.shuffledCard === undefined) {
    return
  }

  if ((event.target as HTMLImageElement).alt === props.shuffledCard.position.toString()) {
    props.shuffledCard.isClicked = true
  }
  props.addCard?.(props.shuffledCard)
}
</script>

<template>
  <button class="border-black border-2 h-full w-full rounded-lg" :disabled="props.shuffledCard?.isLocked" @click="flipCard">
    <img v-if="props.shuffledCard?.isClicked" class="h-full w-full rounded-lg cursor-default"
    :src="shuffledCard?.src.medium" :alt="props.shuffledCard?.position">
    <img v-else-if="props.shuffledCard?.isMatched" class="h-full w-full rounded-lg cursor-default"
    :src="shuffledCard?.src.medium" :alt="props.shuffledCard?.position">
    <img v-else class="h-full w-full rounded-lg hover:mt-[-5px] hover:shadow-md
     hover:border-sky-700 hover:shadow-cyan-500/50 cursor-pointer" :src="cardBlue" :alt="props.shuffledCard?.position">
  </button>
</template>
