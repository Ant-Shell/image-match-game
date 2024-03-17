<script setup lang="ts">
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
  isClicked?: boolean,
  isMatched?: boolean,
  isLocked?: boolean,
}

const clickedCards = ref([])

const imageList = (urlList: Array<Photo>): Array<Photo> => {
  return urlList?.reduce((acc:Array<Photo>, curr:Photo): Array<Photo> => {
    acc.push(curr) && acc.push(curr)
    return acc
  }, [])
  .map((image:Photo, index:number) => {
    const { src } = image
    return {
      id: index,
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

const shuffledPhotos = ref(imageShuffler(imageList(photos)))

defineProps({
  shuffledPhotos: Array<Photo>,
  clickedCards: Array<Photo>,
})
</script>


<template>
  <section className="bg-[#1f2e27]">
      <CardsContainer v-bind:shuffledPhotos="shuffledPhotos" v-bind:clickedCards="clickedCards" />
  </section>   
</template>
