<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Photo } from 'pexels';
import { getImages } from './utils/apiCalls'
import WinnerModal from './components/WinnerModal.vue'
import Heading from './components/Heading.vue'
import CardsContainer from './components/CardsContainer.vue'
import Error from './components/Error.vue'
import photos from './data/imageData'

interface Card {
  id: number,
  src: { medium: string },
  position?: number,
  isClicked?: boolean,
  isMatched?: boolean,
  isLocked?: boolean,
}

const images = ref<Array<Photo>>([])
const shuffledCards = ref<Array<Card>>([])
const clickedCards = ref<Array<Card>>([])
const matchCount = ref<number>(0)
const moveCount = ref<number>(0)
const gameWon = ref<boolean>(false)
const errorMessage = ref<string>("")
const showError = ref<boolean>(false)
const isLoading = ref<boolean>(false)

onMounted(() =>
  startNewGame()
)

const imageFetcher = () => {
  isLoading.value = true
  getImages()
  .then((data) => {
    images.value = data.photos
    shuffledCards.value = cardShuffler(cardList(images.value))
  })
  .catch((error) => {
    errorMessage.value = `Connectivity error: ${error.message}.\nThis game will use default cards.`
    shuffledCards.value = cardShuffler(cardList(photos))
    errorMessageHandler()
  })
  isLoading.value = false
}

const errorMessageHandler = () => {
  showError.value = true
  setTimeout(() => {showError.value = false}, 5000)
}

const cardList = (cards: Array<Card>): Array<Card> => {
  return cards?.reduce((acc:Array<Card>, curr:Card): Array<Card> => {
    acc.push(curr) && acc.push(curr)
    return acc
  }, [])
  .map((card:Card, index:number) => {
    const { id, src } = card
    return {
      id: id,
      position: index,
      src: src,
      isClicked: false,
      isMatched: false,
      isLocked: false,
    }
  })
}

const cardShuffler = (cardList: Array<Card>): Array<Card> => {
  return cardList.sort(() => Math.random() - 0.5)
}

const gameResetter = () => {
  if (images.value.length) {
    shuffledCards.value = cardShuffler(cardList(images.value))
  } else {
    shuffledCards.value = cardShuffler(cardList(photos))
  }
  matchCount.value = 0
  moveCount.value = 0
  gameWon.value = false
}

const startNewGame = () => {
  imageFetcher()
  matchCount.value = 0
  moveCount.value = 0
  gameWon.value = false
 }

const determineWinner = () => {
  if (matchCount.value === (shuffledCards.value.length / 2)) {
    gameWon.value = true
  }
}

const lockSetter = (value: boolean) => {
  if (shuffledCards === undefined) {
    return
  }

  shuffledCards.value.forEach((card:Card) => {
    if (card.isMatched) {
      card.isLocked = true
    } else {
      card.isLocked = value
    }
  })
}

const addCard = (shuffledCard:Card) => {
  if (clickedCards.value === undefined || shuffledCard === undefined) {
    return
  }

  if (clickedCards.value.length < 2 && !clickedCards.value.includes(shuffledCard)) {
    clickedCards.value.push(shuffledCard)
  }
  checkForMatch(shuffledCard)
}

const checkForMatch = (shuffledCard:Card) => {
  if (clickedCards.value === undefined || shuffledCard === undefined) {
    return
  }

  if (clickedCards.value.length >= 2) {
    moveCount.value++
    if (clickedCards.value[0].id === clickedCards.value[1].id) {
      // Matched cards stay face up
      cardMatcher(clickedCards.value[0].position!, clickedCards.value[1].position!)
      matchCount.value++
      clickedCards.value.length = 0
      determineWinner()
    } else {
      // Flip cards back over - face down
      cardResetter(clickedCards.value[0].position!, clickedCards.value[1].position!)
      clickedCards.value.length = 0
    }
  }
}

const cardResetter = (cardPosition1: number, cardPosition2: number) => {
  lockSetter(true)
  if (shuffledCards.value === undefined) {
    return
  }

  shuffledCards.value.forEach((card) => {
    if (card.position === cardPosition1) {
      setTimeout(() => {card.isClicked = false}, 1600)
    }
    if (card.position === cardPosition2) {
      setTimeout(() => {card.isClicked = false}, 1800)
    }
  })
  setTimeout(() => {lockSetter(false)}, 1800)
}

const cardMatcher = (cardPosition1: number, cardPosition2: number) => {
  lockSetter(true)
  if (shuffledCards.value === undefined) {
    return
  }

  shuffledCards.value.forEach((card) => {
    if (card.position === cardPosition1 || card.position === cardPosition2) {
      card.isClicked = false
      card.isMatched = true
    }
  })
  lockSetter(false)
}
</script>

<template>
  <main class="h-screen w-full flex flex-col md:flex-row md:justify-center relative">
      <WinnerModal v-bind:gameWon="gameWon" :startNewGame="startNewGame"/>
      <Heading v-bind:matchCount="matchCount" v-bind:moveCount="moveCount" :gameResetter="gameResetter" />
      <CardsContainer v-bind:shuffledCards="shuffledCards" v-bind:isLoading="isLoading" :addCard="addCard" />
      <Error v-bind:showError="showError" v-bind:errorMessage="errorMessage"/>
  </main>
</template>
