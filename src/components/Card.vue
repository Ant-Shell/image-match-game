<script lang="ts" setup>
import cardBlue from '../assets/Card_Background_Blue.png'

interface Photo {
  id: number,
  src: { medium: string },
  isClicked?: boolean,
  isMatched?: boolean,
  isLocked?: boolean,
}

const props = defineProps({
  shuffledPhoto: Object,
  clickedCards: Array<Photo>,
  shuffledPhotos: Array<Photo>,
})

const lockSetter = (value: boolean) => {
  if (props.shuffledPhotos === undefined) {
    return
  }

  props.shuffledPhotos.forEach((photo:Photo) => {
    photo.isLocked = value
  })
}

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

  if (props.clickedCards === undefined || props.shuffledPhoto === undefined) {
    return
  }

  if (props.clickedCards.length < 2 && !props.clickedCards.includes(photo)) {
    props.clickedCards.push(photo)
  }
  checkForMatch()
}

const checkForMatch = () => {
  if (props.clickedCards === undefined || props.shuffledPhoto === undefined) {
    return
  }

  if (props.clickedCards.length >= 2)
    if (props.clickedCards[0].src.medium === props.clickedCards[1].src.medium) {
      // Cards stay face up
      cardMatcher(props.clickedCards[0].id, props.clickedCards[1].id)
      props.clickedCards.length = 0
    } else {
      // Flip cards back over - face down
      cardResetter(props.clickedCards[0].id, props.clickedCards[1].id)
      props.clickedCards.length = 0
    }
}

const cardResetter = (cardId1: number, cardId2: number) => {
  lockSetter(true)
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
  setTimeout(() => {lockSetter(false)}, 1800)
}

const cardMatcher = (cardId1: number, cardId2: number) => {
  lockSetter(true)
  if (props.shuffledPhotos === undefined) {
    return
  }

  props.shuffledPhotos.forEach((photo) => {
    if (photo.id === cardId1 || photo.id === cardId2) {
      photo.isClicked = false
      photo.isMatched = true
    }
  })
  lockSetter(false)
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
