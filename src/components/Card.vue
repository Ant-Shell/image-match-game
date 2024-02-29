<script lang="ts" setup>
import cardBlue from '../assets/Card_Background_Blue.png'

interface Photo {
    id: number,
    src: { medium: string },
    isClicked?: boolean
  }

const props = defineProps({
  shuffledPhoto: Object,
  clickedCards: Array<Photo>,
  matchedCards: Array<Photo>,
  shuffledPhotos: Array<Photo>,
})

  const flipCard = (event:Event) => {
    if (props.shuffledPhoto === undefined) {
      return
    }

    if ((event.target as HTMLImageElement).alt === props.shuffledPhoto.id.toString()) {
      props.shuffledPhoto.isClicked = true
    }
    addCard()
  }

  const addCard = () => {
    const photo = props.shuffledPhoto as Photo

    if (props.shuffledPhoto === undefined) {
      return
    }

    if (props.clickedCards !== undefined && props.clickedCards.length < 2) {
      props.clickedCards?.push(photo)
    }
    checkForMatch()
  }

  const checkForMatch = () => {
    if (props.clickedCards === undefined || props.shuffledPhoto === undefined) {
      return
    }

    if (props.clickedCards?.length === 2)
      if (props.clickedCards[0].src.medium === props.clickedCards[1].src.medium) {
        console.log("It's a match!")
        // Cards stay face up

        props.clickedCards.length = 0
      } else {
        console.log("Not a match")
        // Flip cards back over - face down
        cardResetter(props.clickedCards[0].id, props.clickedCards[1].id)
        props.clickedCards.length = 0
      }
      // console.log(props.clickedCards)
      // console.log(props.matchedCards)
  }

  const cardResetter = (cardId1: number, cardId2: number) => {
    if (props.shuffledPhotos === undefined) {
      return
    }

    props.shuffledPhotos.forEach((photo) => {
      if (photo.id === cardId1) {
        setTimeout(() => {photo.isClicked = false}, 1600)
      }
      if (photo.id === cardId2) {
        setTimeout(() => {photo.isClicked = false}, 1800)
      }
    })
  }

  // const cardMatcher = () => {

  // }

</script>

<template>
  <section className="border-black border-2 h-full w-full rounded-lg" @click="flipCard">
    <img v-if="props.shuffledPhoto?.isClicked" className="h-full w-full rounded-lg"
    :src="shuffledPhoto?.src.medium" :alt="props.shuffledPhoto?.id">
    <img v-else className="h-full w-full rounded-lg hover:mt-[-5px] hover:shadow-md
     hover:border-sky-700 hover:shadow-cyan-500/50 cursor-pointer" :src="cardBlue" :alt="props.shuffledPhoto?.id">
  </section> 
</template>
