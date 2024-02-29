<script lang="ts" setup>
import cardBlue from '../assets/Card_Background_Blue.png'

const props = defineProps({
  shuffledImage: Object,
  clickedCards: Array<Object>,
})

  const flipCard = (event:Event) => {
    if (props.shuffledImage === undefined) {
      return
    }

    if ((event.target as HTMLImageElement).alt === props.shuffledImage.id.toString()) {
      props.shuffledImage.isClicked = true
    }
    addCard((event.target as HTMLImageElement).alt)
  }

  const addCard = (id:string) => {
    if (props.shuffledImage === undefined) {
      return
    }

    if (props.clickedCards !== undefined && props.clickedCards.length < 2) {
      const imageDetails = {
        id: id,
        src: { medium: props.shuffledImage.src.medium },
        isClicked: true
      }

      props.clickedCards.push(imageDetails)
    }
    console.log(props.clickedCards)
    checkForMatch()
}

const checkForMatch = () => {
  if (props.clickedCards === undefined) {
    return
  }

  if (props.clickedCards[0] === props.clickedCards[1]) { // Cards match, reset clickedCards array
    props.clickedCards.length = 0
    console.log("Hello")
    // If cards match, leave cards face up
  } else if (props.clickedCards.length === 2) { // Cards don't match, reset clickedCards array
    props.clickedCards.length = 0
    console.log("Hi")
    // If cards do not match, flip cards face down again
  }
}
</script>

<template>
  <section className="border-black border-2 h-full w-full rounded-lg" @click="flipCard">
    <img v-if="props.shuffledImage?.isClicked" className="h-full w-full rounded-lg"
    :src="shuffledImage?.src.medium" :alt="props.shuffledImage?.id">
    <img v-else className="h-full w-full rounded-lg hover:mt-[-5px] hover:shadow-md
     hover:border-sky-700 hover:shadow-cyan-500/50 cursor-pointer" :src="cardBlue" :alt="props.shuffledImage?.id">
  </section> 
</template>
