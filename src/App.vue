<script setup lang="ts">
import Heading from './components/Heading.vue'
import CardsContainer from './components/CardsContainer.vue'
import { ref } from 'vue'
import photos from './data/imageData'
// import { createClient, ErrorResponse, Photos, Photo } from 'pexels';

// const API_KEY = import.meta.env.VITE_APP_API_KEY
// const client = createClient(API_KEY)

// May need to adjust downstream, or isolate the string somehow:
// const images = ref<Array<Photo> | string>() 

// Get images using The Pexels Javascript library
// const getImages = async () => {
//   await client.photos.curated({ per_page: 8 }).then(photos => {
//     if ((<Photos>photos).photos) {
//       const imageList = (<Photos>photos)
//       images.value = imageList.photos
//     } else {
//       const error = (<ErrorResponse>photos)
//       console.log(error.error)
//       images.value = error.error
//     }
//   })
// }
// getImages()

interface Photo {
  id: number,
  src: { medium: string },
  position?: number,
  isClicked?: boolean,
  isMatched?: boolean,
  isLocked?: boolean,
}

const clickedCards = ref<Array<Photo>>([])

const imageList = (urlList: Array<Photo>): Array<Photo> => {
  return urlList?.reduce((acc:Array<Photo>, curr:Photo): Array<Photo> => {
    acc.push(curr) && acc.push(curr)
    return acc
  }, [])
  .map((image:Photo, index:number) => {
    const { id, src } = image
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

const imageShuffler = (imageList: Array<Photo>): Array<Photo> => {
  return imageList.sort(() => Math.random() - 0.5)
}

const shuffledPhotos = ref<Array<Photo>>(imageShuffler(imageList(photos)))

const gameResetter = () => {
  shuffledPhotos.value = imageShuffler(imageList(photos))
}

const lockSetter = (value: boolean) => {
  if (shuffledPhotos === undefined) {
    return
  }

  shuffledPhotos.value.forEach((photo:Photo) => {
    if (photo.isMatched) {
      photo.isLocked = true
    } else {
      photo.isLocked = value
    }
  })
}

const addCard = (shuffledPhoto:Photo) => {
  if (clickedCards.value === undefined || shuffledPhoto === undefined) {
    return
  }

  if (clickedCards.value.length < 2 && !clickedCards.value.includes(shuffledPhoto)) {
    clickedCards.value.push(shuffledPhoto)
  }
  checkForMatch(shuffledPhoto)
}

const checkForMatch = (shuffledPhoto:Photo) => {
  if (clickedCards.value === undefined || shuffledPhoto === undefined) {
    return
  }

  if (clickedCards.value.length >= 2) {
    if (clickedCards.value[0].id === clickedCards.value[1].id) {
      // Cards stay face up
      cardMatcher(clickedCards.value[0].position!, clickedCards.value[1].position!)
      clickedCards.value.length = 0
    } else {
      // Flip cards back over - face down
      cardResetter(clickedCards.value[0].position!, clickedCards.value[1].position!)
      clickedCards.value.length = 0
    }
  }
}

const cardResetter = (cardPosition1: number, cardPosition2: number) => {
  lockSetter(true)
  if (shuffledPhotos.value === undefined) {
    return
  }

  shuffledPhotos.value.forEach((photo) => {
    if (photo.position === cardPosition1) {
      setTimeout(() => {photo.isClicked = false}, 1600)
    }
    if (photo.position === cardPosition2) {
      setTimeout(() => {photo.isClicked = false}, 1800)
    }
  })
  setTimeout(() => {lockSetter(false)}, 1800)
}

const cardMatcher = (cardPosition1: number, cardPosition2: number) => {
  lockSetter(true)
  if (shuffledPhotos.value === undefined) {
    return
  }

  shuffledPhotos.value.forEach((photo) => {
    if (photo.position === cardPosition1 || photo.position === cardPosition2) {
      photo.isClicked = false
      photo.isMatched = true
    }
  })
  lockSetter(false)
}
</script>


<template>
  <main class="h-screen w-full flex flex-col md:flex-row md:justify-center">
      <Heading :gameResetter="gameResetter" />
      <CardsContainer v-bind:shuffledPhotos="shuffledPhotos" :addCard="addCard" />
  </main>
</template>
