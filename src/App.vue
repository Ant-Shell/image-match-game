<script setup lang="ts">
import CardsContainer from './components/CardsContainer.vue'
import { ref } from 'vue'
import images from './data/imageData'
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

  const imageList = (urlList: Array<Object>): Array<Object> => {
    const imageDuplicator = urlList?.reduce((acc:Array<Object>, curr:Object): Array<Object> => {
      acc.push(curr) && acc.push(curr)
      return acc
    }, [])
    return imageDuplicator
  }

  const imageShuffler = (imageList: Array<Object>): Array<Object> => {
    return imageList.sort(() => Math.random() - 0.5)
  }

  const shuffledImages = ref(imageShuffler(imageList(images)))

  const clickedCards = ref([])


  defineProps({
    shuffledImages: Array<{id: number, src: { medium: string }}>,
    clickedCards: Array<string>
  })
</script>


<template>
  <section className="bg-[#1f2e27]">
      <CardsContainer v-bind:shuffledImages="shuffledImages" v-bind:clickedCards="clickedCards" />
  </section>   
</template>
