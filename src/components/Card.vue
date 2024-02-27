<script lang="ts" setup>
import cardBlue from '../assets/Card_Background_Blue.png'

const props = defineProps({
  shuffledImage: Object,
  clickedCards: Array<string>
})

const addCard = (event:Event):void => {
    if (props.clickedCards !== undefined && props.clickedCards.length < 2) {
      props.clickedCards.push((event.target as HTMLImageElement).src)
    }
    checkForMatch()
}

const checkForMatch = () => {
  if (props.clickedCards === undefined) {
    return
  }

  if (props.clickedCards[0] === props.clickedCards[1]) { // Cards match, reset clickedCards array
    props.clickedCards.length = 0
    // console.log("Hello")
    // If cards match, leave cards face up
  } else if (props.clickedCards.length === 2) { // Cards don't match, reset clickedCards array
    props.clickedCards.length = 0
    // console.log("Hi")
    // If cards do not match, flip cards face down again
  }
}
</script>

<template>
  <section className="border-black border-2 h-full w-full rounded-lg hover:border-sky-700
  hover:mt-[-5px] hover:shadow-md hover:shadow-cyan-500/50 cursor-pointer" @click="addCard">
      <!-- <img className="h-full w-full rounded-lg" :src="shuffledImage?.src.medium"> -->
      <img className="h-full w-full rounded-lg" :src="cardBlue">
  </section> 
</template>
