<script lang="ts" setup>
import cardBack from '../assets/alexander-tsang-_frvdyMH6S0-unsplash.jpg'


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
  <button class="h-full w-full rounded-lg perspective-1000" :disabled="props.shuffledCard?.isLocked" @click="flipCard">
    <div class="h-full w-full relative" :class="(props.shuffledCard?.isMatched || props.shuffledCard?.isClicked) ?
      'rotate-y-180 duration-500 preserve-3d' : 'rotate-y-0 duration-500 preserve-3d'">
      <div v-if="props.shuffledCard?.isClicked" class="h-full w-full absolute border-black border-2 rounded-lg cursor-default">
        <img class="h-full w-full rounded-lg"
        :src="shuffledCard?.src.medium" :alt="props.shuffledCard?.position">
        </div>
      <div v-else-if="props.shuffledCard?.isMatched" class="h-full w-full absolute border-black border-2 rounded-lg cursor-default">
        <img class="h-full w-full rounded-lg"
        :src="shuffledCard?.src.medium" :alt="props.shuffledCard?.position">
      </div>
      <div v-else class="h-full w-full absolute border-black border-2 rounded-lg hover:mt-[-3px] hover:shadow-md
        hover:shadow-cyan-500/50 cursor-pointer">
        <img class="h-full w-full rounded-lg" :src="cardBack" :alt="props.shuffledCard?.position">
      </div>
    </div>
  </button>
</template>
