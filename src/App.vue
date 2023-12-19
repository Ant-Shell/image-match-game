<script setup lang="ts">
import CardsContainer from './components/CardsContainer.vue'
import { ref } from 'vue'
import { createClient, Photos, ErrorResponse } from 'pexels';

const API_KEY = import.meta.env.VITE_APP_API_KEY
const client = createClient(API_KEY)

// Get images using The Pexels Javascript library
let images = client.photos.curated({ per_page: 8 }).then(photos => {
  if ((<Photos>photos).photos) {
    const imageList = (<Photos>photos)
    return imageList.photos
  } else {
    const error = (<ErrorResponse>photos)
      return error.error
  }
})

// Test "images"
const urls = ['Image_1', 'Image_2','Image_3','Image_4','Image_5','Image_6','Image_7','Image_8']

  const imageList = (urlList: Array<string>): Array<Object> => {
    let id = 0
    const imageBuilder = urlList?.reduce((acc:Array<Object>, curr:string): Array<Object> => {
      acc.push({id: id++, imageURL: curr}) && acc.push({id: id++, imageURL: curr})
      return acc
    }, [])
    return imageBuilder
  }

  const imageShuffler = (imageList: Array<Object>): Array<Object> => {
    return imageList.sort(() => Math.random() - 0.5)
  }

  // const images = ref(imageList(urls))
  const shuffledImages = ref(imageShuffler(imageList(urls)))

  defineProps({
    // images: Array<{id: number, imageURL: string}>,
    shuffledImages: Array<{id: number, imageURL: string}>
  })

</script>

<template>
  <html class="h-screen">
    <body>
      <CardsContainer v-bind:shuffledImages="shuffledImages"/>
      {{ console.log(images) }}
    </body>
  </html>
</template>
