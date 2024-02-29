<script lang="ts" setup>
import cardBlue from '../assets/Card_Background_Blue.png'

interface Photo {
    id: number,
    src: { medium: string },
    isClicked?: boolean
  }

const props = defineProps({
  shuffledImage: Object,
  clickedCards: Array<Photo>,
  matchedCards: Array<Photo>
})

  const flipCard = (event:Event) => {
    if (props.shuffledImage === undefined) {
      return
    }

    if ((event.target as HTMLImageElement).alt === props.shuffledImage.id.toString()) {
      props.shuffledImage.isClicked = true
    }
    addCard()
  }

  const addCard = () => {
    const photo = props.shuffledImage as Photo

    if (props.shuffledImage === undefined) {
      return
    }

    if (props.clickedCards !== undefined && props.clickedCards.length < 2) {
      props.clickedCards?.push(photo)
    }
    checkForMatch()
  }

  const checkForMatch = () => {
    if (props.clickedCards === undefined) {
      return
    }

    if (props.clickedCards?.length === 2)
      if (props.clickedCards[0].src.medium === props.clickedCards[1].src.medium) {
        console.log("It's a match!")
        props.clickedCards.length = 0
      } else {
        console.log("Not a match")
        props.clickedCards.length = 0
      }
      console.log(props.clickedCards)
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
